import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const whatsappToken = Deno.env.get('WHATSAPP_TOKEN') // For sending messages

const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  const { method } = req

  // Handle WhatsApp Webhook Verification
  if (method === 'GET') {
    const url = new URL(req.url)
    const mode = url.searchParams.get('hub.mode')
    const token = url.searchParams.get('hub.verify_token')
    const challenge = url.searchParams.get('hub.challenge')

    if (mode === 'subscribe' && token === 'your_verify_token') {
      return new Response(challenge, { status: 200 })
    }
    return new Response('Forbidden', { status: 403 })
  }

  // Handle Incoming WhatsApp Messages
  try {
    const payload = await req.json()
    const message = payload.entry?.[0]?.changes?.[0]?.value?.messages?.[0]
    
    if (!message) return new Response('OK', { status: 200 })

    const senderPhone = message.from
    const text = message.text?.body?.toLowerCase() || ""

    // 1. Check for active negotiation
    const { data: negotiation, error: negError } = await supabase
      .from('negotiations')
      .select('*, products(*)')
      .eq('customer_phone', senderPhone)
      .neq('current_state', 'COMPLETED')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    // 2. State Machine Logic
    if (!negotiation) {
       // Start new negotiation (simplified: assume they mention a product name)
       // In reality, you'd search the product catalog
       await sendWhatsAppMessage(senderPhone, "Welcome! What product are you interested in today?")
    } else {
      if (text.includes('confirm') || text.includes('buy')) {
        // Trigger M-Pesa logic here
        await supabase.from('negotiations').update({ current_state: 'CONFIRMED' }).eq('id', negotiation.id)
        await sendWhatsAppMessage(senderPhone, `Great! Confirming order for ${negotiation.products.name} at KES ${negotiation.final_price || negotiation.products.base_price}. Sending M-Pesa prompt...`)
        // Trigger M-Pesa STK Push (would call another internal function or logic)
      } else if (text.match(/\d+/)) {
        // Simple negotiation logic: If they send a number, treat as offer
        const offer = parseFloat(text)
        await supabase.from('negotiations').update({ 
          offered_price: offer, 
          current_state: 'NEGOTIATING' 
        }).eq('id', negotiation.id)
        
        await sendWhatsAppMessage(senderPhone, `Received your offer of KES ${offer}. Type 'confirm' to proceed or send another offer.`)
      }
    }

    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})

async function sendWhatsAppMessage(to: string, text: string) {
  // Mock WhatsApp API call
  console.log(`Sending to ${to}: ${text}`)
}