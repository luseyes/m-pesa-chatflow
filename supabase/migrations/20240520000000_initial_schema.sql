-- Initial Schema for WhatsApp SME Automation

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Businesses Table
CREATE TABLE IF NOT EXISTS businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID REFERENCES auth.users(id),
    name TEXT NOT NULL,
    whatsapp_number TEXT UNIQUE NOT NULL,
    mpesa_shortcode TEXT,
    mpesa_till_number TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Products Catalog
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    base_price DECIMAL(10, 2) NOT NULL,
    min_price DECIMAL(10, 2), -- Floor price for negotiation
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Negotiations Table (State Machine)
-- States: 'ASK', 'NEGOTIATING', 'CONFIRMED', 'PAYMENT_PENDING', 'COMPLETED', 'CANCELLED'
CREATE TABLE IF NOT EXISTS negotiations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_phone TEXT NOT NULL,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    current_state TEXT DEFAULT 'ASK',
    offered_price DECIMAL(10, 2),
    final_price DECIMAL(10, 2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    negotiation_id UUID REFERENCES negotiations(id),
    mpesa_receipt_number TEXT UNIQUE,
    amount DECIMAL(10, 2) NOT NULL,
    phone_number TEXT NOT NULL,
    status TEXT DEFAULT 'PENDING', -- 'PENDING', 'SUCCESS', 'FAILED'
    checkout_request_id TEXT UNIQUE, -- For M-Pesa STK Push tracking
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE negotiations ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policies (Simplified for demo - in production, refine based on user ownership)
CREATE POLICY "Public businesses are viewable by everyone" ON businesses FOR SELECT USING (true);
CREATE POLICY "SMEs can manage their own business" ON businesses FOR ALL USING (auth.uid() = owner_id);

CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "SMEs can manage their products" ON products FOR ALL USING (
    business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())
);

CREATE POLICY "Service role can manage negotiations" ON negotiations FOR ALL USING (true);
CREATE POLICY "Service role can manage payments" ON payments FOR ALL USING (true);

-- Indexes for performance
CREATE INDEX idx_negotiations_customer_phone ON negotiations(customer_phone);
CREATE INDEX idx_negotiations_status ON negotiations(current_state);
CREATE INDEX idx_payments_checkout_id ON payments(checkout_request_id);