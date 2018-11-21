module.exports = {
  base: '/gulu-demo/',
  title: 'WheelUI',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
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
        ]
      }
    ]
  }
}