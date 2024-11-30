import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary_cream: '#D7D3BF',
				secondary_cream: '#FFF0D1'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
