export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dcc2b906847672e97d9b6ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ceo5ze3h',
                  apiId: '1c4451c2-d51b-401a-9282-6bff08709068'
                },
                {
                  buildHookId: '5dcc2b9025483d55b82cb240',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-krx6pjr4',
                  apiId: 'c4ef4443-9820-4a97-8640-d46522942359'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonzhao588/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-krx6pjr4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
