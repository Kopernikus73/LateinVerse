import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'URL';
const SUPABASE_KEY = 'KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
