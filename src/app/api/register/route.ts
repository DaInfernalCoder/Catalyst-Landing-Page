import { NextRequest, NextResponse } from 'next/server';
import { supabase, Registration } from '../../../../libs/supabase';

// Server-side validation function
const validateRegistrationData = (data: any): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  // Required field validation
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
    errors.email = 'Email is required';
  } else {
    // Email format validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  if (!data.school || typeof data.school !== 'string' || !data.school.trim()) {
    errors.school = 'School/University is required';
  }

  // Optional field type validation
  if (data.yearOfStudy && typeof data.yearOfStudy !== 'string') {
    errors.yearOfStudy = 'Year of study must be a string';
  }

  if (data.areaOfInterest && typeof data.areaOfInterest !== 'string') {
    errors.areaOfInterest = 'Area of interest must be a string';
  }

  if (data.message && typeof data.message !== 'string') {
    errors.message = 'Message must be a string';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the incoming data
    const validation = validateRegistrationData(body);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Prepare data for Supabase (map camelCase to snake_case)
    const registrationData: Omit<Registration, 'id' | 'created_at'> = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      school: body.school.trim(),
      year_of_study: body.yearOfStudy?.trim() || null,
      area_of_interest: body.areaOfInterest?.trim() || null,
      message: body.message?.trim() || null,
    };

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert([registrationData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      
      // Handle duplicate email error
      if (error.code === '23505' && error.message.includes('email')) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'This email address is already registered',
            errors: { email: 'This email address is already registered' }
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to save registration. Please try again.' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful!',
        data: data
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again.' 
      },
      { status: 500 }
    );
  }
} 