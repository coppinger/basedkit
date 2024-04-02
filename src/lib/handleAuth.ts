import { supabaseClient } from '$lib/supabaseClient';

export async function handleMagicLink(email: string) {
	const { data, error } = await supabaseClient.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true,
			emailRedirectTo: 'http://localhost:5173/'
		}
	});

	console.log('data: ', data);
	console.log('error: ', error);
}
