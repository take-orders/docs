import { defineConfig } from 'vitepress'

const base = '/en';
export const en = defineConfig({
  lang: 'en-US',
  title: "Take Orders",
  description: "Project Portfolio Introduction",
  themeConfig: {
    nav: [
      { text: 'Examples', link: `${base}/markdown-examples` },
      { text: 'About', link: `${base}/about` },
    ],
    sidebar: [
      {
        text: 'Examples',
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