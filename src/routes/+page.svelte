<script lang="ts">
	export let data;
	let { session, supabase } = data;
	$: ({ session, user } = data);
</script>
