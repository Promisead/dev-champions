import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

export async function POST(req: NextRequest) {
  try {
    const { email, amount } = await req.json();

    // Retrieve the Paystack secret key from environment variables
    //const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
    const PAYSTACK_SECRET_KEY = 'sk_live_477f9b910c296de798cebda9039cf9c2271cc099';
    
    if (!PAYSTACK_SECRET_KEY) {
      throw new Error('Paystack secret key is not defined in environment variables');
    }

    const params = JSON.stringify({
      email,
      amount,
    });

    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`, // Use the secret key from env
        'Content-Type': 'application/json',
      },
    };

    const response = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          console.log('Paystack API response:', data); // Log the response
          resolve(JSON.parse(data));
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(params);
      req.end();
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error initializing Paystack transaction:', error);
    return NextResponse.json(
      { error: 'Failed to initialize transaction' },
      { status: 500 }
    );
  }
}
