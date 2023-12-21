export const GET = async (event) => {
	// const {
	// 	url,
	// 	locals: { getSession }
	// } = event;

	// const { user } = await getSession();

	// const { email } = user;

	const options = {
		status: 404
	};

	return new Response('🍌', options);
};
