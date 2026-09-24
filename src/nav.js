// The sidebar, in reading order. Each slug is a file in src/pages/{slug}.html.
// Previous/next follows this order, so a new page goes where a reader would expect it.
export const nav = [
  {
    title: 'Getting started',
    pages: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'configuration', title: 'Configuration' },
      { slug: 'scheduler', title: 'Scheduler and queue' },
      { slug: 'upgrading', title: 'Releases and upgrading' },
    ],
  },
  {
    title: 'Core concepts',
    pages: [
      { slug: 'workspaces', title: 'Workspaces and user types' },
      { slug: 'roles-and-gates', title: 'Roles and gates' },
      { slug: 'house-style', title: 'The house style' },
    ],
  },
  {
    title: 'Features',
    pages: [
      { slug: 'authentication', title: 'Authentication' },
      { slug: 'accounts', title: 'Account lifecycle' },
      { slug: 'impersonation', title: 'Impersonation' },
      { slug: 'media', title: 'Image and video libraries' },
      { slug: 'blog', title: 'Blog' },
      { slug: 'money', title: 'Ledger and currencies' },
      { slug: 'email', title: 'Email and newsletter' },
      { slug: 'policies', title: 'Legal pages and consent' },
      { slug: 'languages', title: 'Languages' },
      { slug: 'data-tables', title: 'Data tables' },
      { slug: 'admin', title: 'The admin workspace' },
      { slug: 'activity-log', title: 'Activity log' },
    ],
  },
  {
    title: 'Development',
    pages: [
      { slug: 'commands', title: 'Commands' },
      { slug: 'testing', title: 'Testing' },
      { slug: 'extending', title: 'Extending the kit' },
      { slug: 'production', title: 'Going to production' },
    ],
  },
  {
    title: 'Legal',
    pages: [
      { slug: 'license', title: 'License' },
      { slug: 'trademark', title: 'Trademark policy' },
      { slug: 'disclaimer', title: 'Disclaimer' },
    ],
  },
];
