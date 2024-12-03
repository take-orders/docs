import { defineConfig } from 'vitepress'

const base = '';
export const zh = defineConfig({
  lang: 'zh-Hans',
  title: "Take Orders",
  description: "项目集介绍",
  themeConfig: {
    nav: [
      { text: '项目介绍', link: `${base}/markdown-examples` },
      { text: '关于我', link: `${base}/about` },
    ],
    sidebar: [
      {
        text: '例子',
        items: [
          { text: 'Markdown Examples', link: `${base}/markdown-examples` },
          { text: 'Runtime API Examples', link: `${base}/api-examples` }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: `https://github.com/take-orders/docs` }
    ]
  }
})
