<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';

	export let data;
	let { session, supabase } = data;
	$: ({ session, user } = data);

	function copyToClipboard() {
		const text = `PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
PUBLIC_DEV_URL=
PUBLIC_DEV_ANON_KEY=`;

		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Error copying text to clipboard:', error);
			});
	}

	const contributors = [
		{
			username: 'finnlawrence',
			id: 8252909
		},
		{
			username: 'themixednuts',
			id: 118081862
		},
		{
			username: 'drjamesj',
			id: 37321814
		},
		{
			username: 'ahmad1702',
			id: 72112379
		},
		{
			username: 'badcopcgsdev0',
			id: 4583705
		},
		{
			username: 'coppinger',
			id: 8434307
		}
	];
</script>

<div
	class="min-w-screen dark flex min-h-screen flex-col items-center justify-center gap-8 bg-black p-4 text-[#00ff00]"
>
	<pre>
                                                                                                                                                
                                                                                      dddddddd                                                  
BBBBBBBBBBBBBBBBB                                                                     d::::::dKKKKKKKKK    KKKKKKK  iiii          tttt          
B::::::::::::::::B                                                                    d::::::dK:::::::K    K:::::K i::::i      ttt:::t          
B::::::BBBBBB:::::B                                                                   d::::::dK:::::::K    K:::::K  iiii       t:::::t          
BB:::::B     B:::::B                                                                  d:::::d K:::::::K   K::::::K             t:::::t          
  B::::B     B:::::B  aaaaaaaaaaaaa      ssssssssss       eeeeeeeeeeee        ddddddddd:::::d KK::::::K  K:::::KKKiiiiiiittttttt:::::ttttttt    
  B::::B     B:::::B  a::::::::::::a   ss::::::::::s    ee::::::::::::ee    dd::::::::::::::d   K:::::K K:::::K   i:::::it:::::::::::::::::t    
  B::::BBBBBB:::::B   aaaaaaaaa:::::ass:::::::::::::s  e::::::eeeee:::::ee d::::::::::::::::d   K::::::K:::::K     i::::it:::::::::::::::::t    
  B:::::::::::::BB             a::::as::::::ssss:::::se::::::e     e:::::ed:::::::ddddd:::::d   K:::::::::::K      i::::itttttt:::::::tttttt    
  B::::BBBBBB:::::B     aaaaaaa:::::a s:::::s  ssssss e:::::::eeeee::::::ed::::::d    d:::::d   K:::::::::::K      i::::i      t:::::t          
  B::::B     B:::::B  aa::::::::::::a   s::::::s      e:::::::::::::::::e d:::::d     d:::::d   K::::::K:::::K     i::::i      t:::::t          
  B::::B     B:::::B a::::aaaa::::::a      s::::::s   e::::::eeeeeeeeeee  d:::::d     d:::::d   K:::::K K:::::K    i::::i      t:::::t          
  B::::B     B:::::Ba::::a    a:::::assssss   s:::::s e:::::::e           d:::::d     d:::::d KK::::::K  K:::::KKK i::::i      t:::::t    tttttt
BB:::::BBBBBB::::::Ba::::a    a:::::as:::::ssss::::::se::::::::e          d::::::ddddd::::::ddK:::::::K   K::::::Ki::::::i     t::::::tttt:::::t
B:::::::::::::::::B a:::::aaaa::::::as::::::::::::::s  e::::::::eeeeeeee   d:::::::::::::::::dK:::::::K    K:::::Ki::::::i     tt::::::::::::::t
B::::::::::::::::B   a::::::::::aa:::as:::::::::::ss    ee:::::::::::::e    d:::::::::ddd::::dK:::::::K    K:::::Ki::::::i       tt:::::::::::tt
BBBBBBBBBBBBBBBBB     aaaaaaaaaa  aaaa sssssssssss        eeeeeeeeeeeeee     ddddddddd   dddddKKKKKKKKK    KKKKKKKiiiiiiii         ttttttttttt  
                              
</pre>

	<h1 class="text-xl font-bold">Welcome to BasedKit</h1>

	<ul class="flex flex-col items-center gap-2 md:flex-row md:items-start">
		<li>Supabase</li>
		<li>✧</li>
		<li>SvelteKit</li>
		<li>✧</li>
		<li>ShadCN</li>
		<li>✧</li>
		<li>Typescript</li>
	</ul>

	<p class="max-w-sm text-center">
		BasedKit is a free and open source boilerplate for building with Supabase (inc. Supabase CLI)
		and SvelteKit.
	</p>

	<Button href="https://github.com/coppinger/basedkit" target="_blank">Get started 🚀</Button>

	<h3 class="text-lg font-bold">Setup steps</h3>

	<ol class="ml-2 flex max-w-sm list-decimal flex-col gap-8">
		<li>
			Create an `.env` file in the root and add the following keys:
			<ul class="mt-2 flex flex-col gap-1 rounded-md border border-neutral-700 p-4">
				<li>PUBLIC_SUPABASE_URL</li>
				<li>PUBLIC_SUPABASE_ANON_KEY</li>
				<li>PUBLIC_DEV_URL</li>
				<li>PUBLIC_DEV_ANON_KEY</li>
				<hr class="my-2" />
				<li>
					<Button
						variant="outline"
						on:click={() => {
							copyToClipboard();
						}}>Copy to clipboard 📋</Button
					>
				</li>
			</ul>
		</li>
		<li>
			<p>Replace 'project_id' in <code>supabase/config.toml</code> with your project ID.</p>
		</li>
	</ol>

	<h3 class="text-lg font-bold">Q&A</h3>

	<Accordion.Root class="w-full max-w-sm">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Where can I find my Supabase keys?</Accordion.Trigger>
			<Accordion.Content
				>This boilerplate uses Supabase CLI (local), so you'll need both your remote keys from your
				Supabase project and your local keys from the Supabase CLI. To find the latter, run
				`supabase status` and copy they keys that print out in the terminal.</Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>How can I change the Tailwind theme?</Accordion.Trigger>
			<Accordion.Content>
				Simply change the <code>'baseColor'</code> value in <code>components.json</code> to your desire
				color.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>

	<Button href="https://github.com/coppinger/basedkit" target="_blank" variant="secondary"
		>Contribute 💚</Button
	>
	<Button variant="outline" href="https://github.com/coppinger/basedkit/issues" target="_blank"
		>Issues? Please report!</Button
	>

	<h3 class="text-lg font-bold">Contributors</h3>

	<ul class="flex gap-4">
		{#each contributors as { username, id }}
			<li>
				<a href={`https://github.com/${username}}`} target="_blank">
					<img
						src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
						alt={`${username}\'s GitHub profile picture`}
						class="h-16 w-16 rounded-full"
					/>
				</a>
			</li>
		{/each}
	</ul>

	<footer class="flex flex-col items-center py-8">
		<pre>
 ░▒▓██████▓▒░░▒▓███████▓▒░▒▓████████▓▒░▒▓█▓▒░▒▓██████████████▓▒░░▒▓█▓▒░░▒▓███████▓▒░▒▓████████▓▒░      ░▒▓████████▓▒░▒▓██████▓▒░░▒▓███████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░░▒▓███████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░  ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓██████▓▒░░▒▓██████▓▒░        ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░        ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓██████▓▒░  ░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░ 
 ░▒▓██████▓▒░░▒▓█▓▒░        ░▒▓█▓▒░   ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░      ░▒▓█▓▒░      ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░         ░▒▓██▓▒░  ░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░▒▓███████▓▒░  
		</pre>
		<a href="https://github.com/sveltejs/svelte/discussions/10085" target="_blank">☍</a>
	</footer>
</div>

<style>
	code {
		border: 1px solid #404040;
		border-radius: 8px;
		padding: 2px 4px;
		font-size: 0.8rem;
		font-style: italic;
		color: #ababab;
	}

	pre {
		font-size: 0.15rem;
	}
</style>
