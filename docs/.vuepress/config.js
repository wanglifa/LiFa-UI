module.exports = {
  base: '/LiFa-UI/',
  title: 'LiFa UI',
  description: '一个好用的UI框架',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' }
    ],
    sidebar: [
      {
        title: '开发指南',
        children: [
          '/install/',
          'get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
            'components/cascader'
        ]
      }
    ]
  }
}