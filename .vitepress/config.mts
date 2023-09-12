import { defineConfig } from 'vitepress'
import { readdirSync } from 'node:fs'

const items = ['笔记', '大杂烩', '项目与资源', '学习资料', '影视推荐', '娱乐向', 'ACGN相关'];

const getNavItems = () => items.map(item => {
  const children = readdirSync(`./${item}/`)
  return {
    text: item,
    link: `/${item}/${children[0]}`
  }
})

const getSidebarItems = () => items.map(item => {
  const children = readdirSync(`./${item}/`)
  return {
    text: item,
    items: children.map(child => ({
      text: child.replace('.md', ''),
      link: `/${item}/${child}`
    }))
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SuskrTyan",
  description: "这是一个导航性质的列表，专门收录实用性的网址",
  base: '/SuskrTyan',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      ...getNavItems(),
    ],

    sidebar: getSidebarItems(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SusakrTyan/SuskrTyan' }
    ]
  }
})
