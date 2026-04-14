import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  try {
    const payload = await req.json()
    const body = payload.Body.stkCallback

    const checkoutRequestID = body.CheckoutRequestID
    const resultCode = body.ResultCode
    const resultDesc = body.ResultDesc

    if (resultCode === 0) {
      // Payment Successful
      const metadata = body.CallbackMetadata.Item
      const amount = metadata.find((i: any) => i.Name === 'Amount').Value
      const receipt = metadata.find((i: any) => i.Name === 'MpesaReceiptNumber').Value
      const phone = metadata.find((i: any) => i.Name === 'PhoneNumber').Value

      // Update Database
      const { data: payment } = await supabase
        .from('payments')
        .update({ 
          status: 'SUCCESS', 
          mpesa_receipt_number: receipt 
        })
        .eq('checkout_request_id', checkoutRequestID)
        .select()
        .single()

      if (payment) {
        await supabase
          .from('negotiations')
          .update({ current_state: 'COMPLETED' })
          .eq('id', payment.negotiation_id)
          
        console.log(`Payment confirmed for ${phone}: ${receipt}`)
        // Trigger WhatsApp Notification (omitted for brevity)
      }
    } else {
      // Payment Failed
      await supabase
        .from('payments')
        .update({ status: 'FAILED' })
        .eq('checkout_request_id', checkoutRequestID)
    }

    return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: "Success" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})