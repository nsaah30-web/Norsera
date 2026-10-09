export default {
  async fetch(request, env, ctx) {
    const supabaseUrl = "https://yfjmvftqjpkgpxqelqbv.supabase.co/rest/v1/Norsera";
    const supabaseKey = env.SUPABASE_ANON_KEY;

    try {
      const response = await fetch(supabaseUrl, {
        method: "GET",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      return new Response(JSON.stringify(data, null, 2), {
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }, null, 2), {
        status: 500,
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      });
    }
  }
};
