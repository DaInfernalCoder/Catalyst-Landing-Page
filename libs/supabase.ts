import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definition for the registrations table
export interface Registration {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  school: string;
  year_of_study?: string;
  area_of_interest?: string;
  message?: string;
} 