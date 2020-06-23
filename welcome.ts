import { serve } from "https://deno.land/std@0.54.0/http/server.ts";
import username from "https://deno.land/x/username/mod.ts";

const s = serve({ port: 3030 });
console.log("http://localhost:3030/");

const user = await username();

for await (const req of s) {
  req.respond({ body: `Hello ${user}\n` });
}
