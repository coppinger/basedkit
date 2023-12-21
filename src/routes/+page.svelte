<script lang="ts">
	import Skunk from '$lib/components/Skunk.svelte';
	import { Button } from '$lib/components/ui/button';
	import ConfettiOnClick from '$lib/components/ConfettiOnClick.svelte';

	export let data;
	// const { table } = data;
	let { session } = data;
</script>

<Skunk />

<h1 class="text-xl font-bold">Welcome to SkunkKit</h1>

<!-- {#each test as item}
	<p>{item.id}</p>
{/each}

{#if session}
	<p>Logged in 🔓</p>
{:else}
	<p>Logged out 🔒</p>
{/if} -->

<ul class="flex gap-2">
	<li>ShadCN</li>
	<li>---</li>
	<li>SvelteKit</li>
	<li>---</li>
	<li>Supabase(d)*</li>
	<li>---</li>
	<li>Typescript</li>
</ul>

<h3 class="text-lg font-bold">Setup steps</h3>

<p>0. Create an `.env.local` file in the root and add your Supabase project URL & anon key</p>
<p>
	1. Setup the Supabase CLI locally and login by following <a
		href="https://supabase.com/docs/guides/cli/getting-started"
		target="_blank"
		class="border-2 underline underline-offset-4">this guide</a
	>
</p>
<p>2. Update the `npm run gentypes` command in `packages.json` with the project id</p>
<p>
	3. Follow the steps <a
		href="https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr?framework=sveltekit"
		target="_blank"
		class="border-2 underline underline-offset-4">here</a
	> to update the email templates for the SSR auth flow
</p>
<p>4. Uncomment the index.ts, +layouts.server.ts, +layout.ts & +page.server.ts files</p>

<ConfettiOnClick><Button variant="outline">Noice</Button></ConfettiOnClick>

<p class="italic">*based on what?</p>
