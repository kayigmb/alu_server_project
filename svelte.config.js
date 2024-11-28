import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: adapter({
			runtime: 'bun',
			out: 'build'
		})
	}
};

export default config;
