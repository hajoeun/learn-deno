import { serve } from "https://deno.land/std@0.127.0/http/server.ts";
import username from "https://deno.land/x/username/mod.ts";

const user = await username();

console.log("http://localhost:3030/");
serve((req) => new Response(`Hello ${user}`), { port: 3030 });
