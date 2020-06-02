import { serve } from "https://deno.land/std@0.54.0/http/server.ts";
const s = serve({ port: 3030 });
console.log("http://localhost:3030/");

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
