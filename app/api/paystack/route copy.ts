import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

// Define the type for the request body
interface RequestBody {
  email: string;
  amount: number;
}

// Define the type for the Paystack response
interface PaystackResponse {
  status: boolean;
  message: string;
  data: any;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { email, amount }: RequestBody = await req.json();

    // Retrieve the Paystack secret key from environment variables
    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

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

    const response: PaystackResponse = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          console.log('Paystack API response:', data); // Log the response
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            reject(new Error('Failed to parse Paystack API response'));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(params);
      req.end();
    });

    return NextResponse.json(response);
  } catch (error: unknown) {
    console.error('Error initializing Paystack transaction:', error);
    return NextResponse.json(
      { error: 'Failed to initialize transaction' },
      { status: 500 }
    );
  }
}
