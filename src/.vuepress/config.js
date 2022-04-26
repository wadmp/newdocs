const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'WebAccess/DMP Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Tutorials',
        link: '/tutorials/',
      },
      {
        text: 'Explanations',
        link: '/explanations/'
      },
      {
        text: 'Release Notes',
        link: '/release-notes/'
      },
      {
        text: 'Client Release Notes',
        link: '/client/'
      },      
      {
        text: 'Support & Contact',
        link: '/contact/'
      }
    ],
    sidebar: {
      '/tutorials/': [
        '',     /* /README.md/ */
        'ui-general-structure/',   /* README.md */
        'create-company/',   /* README.md */
        'create-users/',   /* README.md */
        'device/',   /* README.md */
        'search-filter-devices/',   /* README.md */
        'configuring-router-apps/',   /* README.md */
        'configuring-on_off-devices/',   /* README.md */
        'upgrade-fw/',   /* README.md */
        'move-a-device/'   /* README.md */
      ],
      '/explanations/': [
        '',      /* /README.md/ */
        'companies-and-users/',  /* /README.md */
        'understanding-oauth/',  /* /README.md */
        'cellular-data-usage/',  /* /README.md */
        'grouping-and-tagging/',  /* /README.md */
        'billing/',  /* /README.md */
        'playbooks/',  /* /README.md */
        'grafana/',  /* /README.md */
        'alerts/',  /* /README.md */
        'auditing-options/'  /* /README.md */
      ],

      '/release-notes/': [
        '',      /* /README.md/ */
        '2.4.1/',  /* /2.4.1.md */
        '2.4.0/',  /* /2.4.0.md */
        '2.3.1/',  /* /2.3.1.md */
        '2.3.0/',  /* /2.3.0.md */
        '2.2.0/',  /* /2.2.0.md */
        '2.1.1/',  /* /2.1.1.md */
        '2.1.0/'  /* /2.1.0.md */
      ],
      '/client/': [
      ],
      '/contact/': [
      ],
      '/client/': [
        ' '      /* /README.md/ */
      ],


      '/baz/': 'auto', /* automatically generate single-page sidebars */

      // fallback
      '/': [
        '',        /* / */ 
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    sidebarDepth: 5
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
