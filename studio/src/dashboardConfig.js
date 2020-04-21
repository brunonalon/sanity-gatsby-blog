export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9f4f3342903395de5b0c7c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1ghzcfef',
                  apiId: 'e9d3d4b7-7252-4eb9-891e-dae4be8af1d0'
                },
                {
                  buildHookId: '5e9f4f334290339bd15b0d37',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3iswirrp',
                  apiId: 'eea53af5-a9e1-4f73-baad-3ba3ada1e5bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunonalon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3iswirrp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
