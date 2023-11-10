import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'FOLD',
      social: {
        github: 'https://github.com/edemaine/fold',
      },
      sidebar: [
        {
          label: 'Introduction',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Specification',
          badge: 'v1.2',
          autogenerate: { directory: 'spec' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'examples' },
        },
        {
          label: 'History',
          link: 'history',
        },
      ],
    }),
  ],
});
