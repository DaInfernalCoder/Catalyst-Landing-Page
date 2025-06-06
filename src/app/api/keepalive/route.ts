import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../libs/supabase';

/**
 * Keepalive endpoint to prevent Supabase from going inactive
 * 
 * This endpoint performs a simple, lightweight query to Supabase
 * to keep the database connection active and prevent inactivity timeouts.
 */
export async function GET(request: NextRequest) {
  try {
    const timestamp = new Date().toISOString();
    
    // Perform a lightweight query to keep Supabase active
    // We'll just count the registrations table - this is a minimal operation
    const { count, error } = await supabase
      .from('registrations')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error(`[${timestamp}] Supabase keepalive error:`, error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Keepalive failed - database error',
          timestamp,
          error: error.message
        },
        { status: 500 }
      );
    }

    console.log(`[${timestamp}] Supabase keepalive successful - ${count} registrations`);
    
    return NextResponse.json(
      { 
        success: true, 
        message: `Supabase keepalive successful - database is active`,
        timestamp,
        registrationCount: count
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );

  } catch (error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] Keepalive endpoint error:`, error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Keepalive failed - internal error',
        timestamp,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Also support POST method in case it's needed
export async function POST(request: NextRequest) {
  return GET(request);
} 