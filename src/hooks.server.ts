import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		const clonedRequest = new Request('https://reqres.in' + event.url.pathname, event.request);
		return fetch(clonedRequest);
	}

	return await resolve(event);
};
