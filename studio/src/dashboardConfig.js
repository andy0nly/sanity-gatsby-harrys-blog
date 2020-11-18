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
                  buildHookId: '5fb4c36f459cf544b1c73c26',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-harrys-blog-studio',
                  apiId: '658e8f1e-9e7b-4422-bae7-6646ebdd04f5'
                },
                {
                  buildHookId: '5fb4c36f3877744b5da71e36',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-harrys-blog',
                  apiId: '470cb1e8-eb7c-4be3-b86b-6885231af8a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andy0nly/sanity-gatsby-harrys-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-harrys-blog.netlify.app', category: 'apps' }
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
