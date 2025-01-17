import { defineConfig } from 'vitepress'
import markdownItReplaceLink from 'markdown-it-replace-link'

export default defineConfig({
  lang: "zh",
  title: "AIGC Platform",
  description: "A VitePress Site",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
  ],

  themeConfig: {
    logo: { src: '/logo-mini.png', width: 24, height: 24 },

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '项目介绍', link: '/docs/guide/project-describe' },
          { text: '快速开始', link: '/docs/guide/getting-started' },
        ]
      },
      {
        text: '文本大模型集成',
        items: [
          { text: 'OpenAI', link: '/docs/text-model-integrated/open-ai' },
        ]
      },
      {
        text: '音频大模型集成',
        items: [
          { text: '编译环境准备', link: '/docs/audio-model-integrated/c++-prepare-env-prepare' },
          { text: 'GPT-SoVITS', link: '/docs/audio-model-integrated/gpt-sovits' },
          { text: 'Fish-Speech', link: '/docs/audio-model-integrated/fish-speech' },
          { text: 'ChatTTS', link: '/docs/audio-model-integrated/chat-tts' },
          { text: 'Edge-TTS', link: '/docs/audio-model-integrated/edge-tts' },
        ]
      },
      {
        text: '运维部署',
        items: [
          { text: '本地启动', link: '/docs/deployment/deployment-local' },
          { text: '集成打包', link: '/docs/deployment/integrated-package' },
          { text: '容器部署', link: '/docs/deployment/deployment-docker' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zddgg/aigc-platform-server' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  markdown: {
    config: (md) => {
      md.use(markdownItReplaceLink, {
        replaceLink(link: string) {
          if (link.startsWith('IMAGE_BASE_URL')) {
            return link.replace('IMAGE_BASE_URL', 'https://files.wenliang.space')
          }
          return link
        }
      })
    }
  }
})
