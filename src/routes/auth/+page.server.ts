import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'twitch',
			options: {
				redirectTo: 'http://localhost:5173/auth/confirm'
			}
		});

		if (error) {
			console.error(error);
			return redirect(303, '/auth/error');
		} else {
			return redirect(303, data.url);
		}
	}
};
