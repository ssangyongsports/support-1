module.exports = {
  title: 'Hashnode Support',
  tagline: 'Your go-to guide for understanding Hashnode a little better',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'hashnode', // Usually your GitHub org/user name.
  projectName: 'hashnode-guide', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hashnode',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Back to Hashnode',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Contact us',
          items: [
            {
              label: 'Email Us',
              href: 'mailto:hello@hashnode.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hashnode',
            },
            {
              label: 'Livee Chat: Join our Discord Server',
              href: 'https://discord.gg/qsAQfxX',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hashnode`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
    
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};