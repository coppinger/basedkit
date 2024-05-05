<script lang="ts">
	import '../app.pcss';

	export let data;
	let { session, supabase } = data;
	$: ({ session, supabase } = data);
</script>

<slot />
