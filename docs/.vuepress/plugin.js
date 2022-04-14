const moment = require('moment');

module.exports = [
    ['@vuepress/active-header-links',
      {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
      }
    ],
    ['@vuepress/medium-zoom'],
    ['@vuepress/search', 
      {
        searchMaxSuggestions: 10, 
      }
    ],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
  ]