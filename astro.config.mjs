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
					items: [
						{ label: 'Composables', slug: 'reusability/composables' },
						{ label: 'Custom Directives', slug: 'reusability/custom-directives' },
						{ label: 'Plugins', slug: 'reusability/plugins' },
					],
				},
				{
					label: 'Scaling Up',
					items: [
						{ label: 'Single-File Components', slug: 'scalingup/sfc' },
						{ label: 'Tooling', slug: 'scalingup/tooling' },
						{ label: 'Routing', slug: 'scalingup/routing' },
						{ label: 'State Management', slug: 'scalingup/state-management' },
						{ label: 'Testing', slug: 'scalingup/testing' },
					],
				},
				{
					label: 'Best Practices',
					items: [
						{ label: 'Production Deployment', slug: 'bestpractices/production-deployment' },
						{ label: 'Performance', slug: 'bestpractices/performance' },
						{ label: 'Accessibility', slug: 'bestpractices/accessibility' },
						{ label: 'Security', slug: 'bestpractices/security' },
					],
				},
				{
					label: 'Typescript',
					items: [
						{ label: 'Overview', slug: 'typescript/overview' },
						{ label: 'TS with Composition API', slug: 'typescript/composition-api' },
						{ label: 'TS with Option API', slug: 'typescript/options-api' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
