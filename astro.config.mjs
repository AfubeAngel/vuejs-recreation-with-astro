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
					items: [
						{ label: 'Creating an Application', slug: 'essentials/application' },
						{ label: 'Template Syntax', slug: 'essentials/templatesyntax' },
						{ label: 'Reactivity Fundamentals', slug: 'essentials/reactivity' },
						{ label: 'Computed Properties', slug: 'essentials/computedproperties' },
						{ label: 'Class and Style binding', slug: 'essentials/classandstyle' },
					],
				},
				{
					label: 'Built In Components',
					items: [
						{ label: 'Transition', slug: 'builtincomponents/transition' },
						{ label: 'Transition Group', slug: 'builtincomponents/transition-group' },
						{ label: 'KeepAlive', slug: 'builtincomponents/keep-alive' },
						{ label: 'Teleport', slug: 'builtincomponents/teleport' },
						{ label: 'Suspense', slug: 'builtincomponents/suspense' },
					],
				},
				{
					label: 'Components In-depth',
					items: [
						{ label: 'Registration', slug: 'componentsindepth/registration' },
						{ label: 'Props', slug: 'componentsindepth/props' },
						{ label: 'Events', slug: 'componentsindepth/events' },
						{ label: 'Component v-model', slug: 'componentsindepth/v-model' },
						{ label: 'Fallthrough Attributes', slug: 'componentsindepth/attrs' },
					],
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
