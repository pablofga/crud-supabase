import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://blubmqafukoigmwklvry.supabase.co";
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdWJtcWFmdWtvaWdtd2tsdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY5NzIwOTgsImV4cCI6MTk4MjU0ODA5OH0.h7O4eVyOFM-iVDbee0q-5tKB8q5H4Su7ngo3ygc-km8";
createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
