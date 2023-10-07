import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cvujzbeoukhddojcnmrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2dWp6YmVvdWtoZGRvamNubXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMTIwNDIsImV4cCI6MjAxMTg4ODA0Mn0.8FxImMDBe9VVXFwgShy0Kai-ZB6V8FH2RoGamAUcvh4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
