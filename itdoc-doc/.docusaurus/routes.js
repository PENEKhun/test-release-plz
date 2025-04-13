import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '258'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/cjs-1301',
    component: ComponentCreator('/blog/authors/cjs-1301', '960'),
    exact: true
  },
  {
    path: '/blog/authors/pene-khun',
    component: ComponentCreator('/blog/authors/pene-khun', '394'),
    exact: true
  },
  {
    path: '/blog/authors/wnghdcjfe',
    component: ComponentCreator('/blog/authors/wnghdcjfe', '4e7'),
    exact: true
  },
  {
    path: '/blog/itdoc',
    component: ComponentCreator('/blog/itdoc', '35c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/itdoc',
    component: ComponentCreator('/blog/tags/itdoc', '9c9'),
    exact: true
  },
  {
    path: '/blog/tags/javascript',
    component: ComponentCreator('/blog/tags/javascript', '173'),
    exact: true
  },
  {
    path: '/blog/tags/test',
    component: ComponentCreator('/blog/tags/test', '646'),
    exact: true
  },
  {
    path: '/blog/tags/typescript',
    component: ComponentCreator('/blog/tags/typescript', 'e24'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cee'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '49f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7bb'),
            routes: [
              {
                path: '/docs/api-reference/reference',
                component: ComponentCreator('/docs/api-reference/reference', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-reference',
                component: ComponentCreator('/docs/category/api-reference', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial',
                component: ComponentCreator('/docs/category/tutorial', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guides/quick-start',
                component: ComponentCreator('/docs/guides/quick-start', 'f73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
