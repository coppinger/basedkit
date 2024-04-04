![SkunkKit Logo, a green ASCII skunk](https://github.com/coppinger/skunkkit/blob/master/skunkkit-logo.png?raw=true)

# SvelteKit & Supabase Boilerplate

Everything you need to kick off a SvelteKit + Supabase (SSR Auth) + ShadCN + Tailwind + Typescript project

## Setup Steps

0. Create an .env.local file in the root and add your Supabase project URL, anon and servive_role keys

1. Setup the Supabase CLI locally and login by [following this guide](https://supabase.com/docs/guides/cli/getting-started)

2. Run the `supabase gen types typescript --local > src/lib/types/DatabaseDefinitions.ts` command to [generate types](https://supabase.com/docs/reference/cli/supabase-gen-types)

3. Follow [the steps here](https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr?framework=sveltekit) and [here (local)](https://supabase.com/docs/guides/cli/customizing-email-templates) to update the email templates for the SSR auth flow

4. Uncomment the index.ts, +layouts.server.ts, +layout.ts & +page.server.ts files
