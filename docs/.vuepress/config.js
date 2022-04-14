module.exports = {
  title: "Tang's Blog",
  description: "This is a blog.",
  base: '/blog/',
  markdown: {
    lineNumbers: true, // 代码行号
  },
  
  head:[['link', { rel: 'icon', href: '/TB5.PNG' }]],
  themeConfig:{
    logo:'/TB5.PNG',
    nav:  require("./nav.js"),
    sidebarDepth:3,
    sidebar:require("./sidebar.js"),
    search: true,
    searchMaxSuggestions: 10,
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    smoothScroll: true,

  },
  plugins: require('./plugin.js'),
  // lastUpdated: 'Last Updated'
}