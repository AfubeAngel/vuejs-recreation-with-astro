// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vue.js Recreation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'gettingstarted' },
				},
				{
					label: 'Essentials',
					autogenerate: { directory: 'essentials' },
				},
				{
					label: 'Built In Components',
					autogenerate: { directory: 'builtincomponents' },
				},
				{
					label: 'Components in depth',
					autogenerate: { directory: 'componentsindepth' },
				},
				{
					label: 'Reusability',
					autogenerate: { directory: 'reusability' },
				},
				{
					label: 'Scaling up',
					autogenerate: { directory: 'scalingup' },
				},
				{
					label: 'Best Practices',
					autogenerate: { directory: 'bestpractices' },
				},
				{
					label: 'Typescript',
					autogenerate: { directory: 'typescript' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
