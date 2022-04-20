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
        text: 'Client Router App',
        link: '/client/'
      },
      {
        text: 'References',
        link: '/references/'
      },
      {
        text: 'Support & Contact',
        link: '/contact/'
      }
    ],
    sidebar: {
      '/tutorials/': [
        '',     /* /README.md/ */
        'sign-up/',   /* README.md */
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
        'device-reported-states/',  /* /README.md */
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

      '/baz/': 'auto', /* automatically generate single-page sidebars */

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    displayAllHeaders: true 
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
