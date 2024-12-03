import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  base: '/docs/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'zh/:rest*': ':rest*',
  },
});