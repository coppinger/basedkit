import { supabase } from '$lib/index';

export async function load({ locals: { getSession } }) {
	const { data } = await supabase.from('test').select();

	console.log(await getSession());

	return {
		test: data ?? [],
		session: await getSession()
	};
}
