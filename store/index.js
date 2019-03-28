import { readFiles } from '@/api'
import { attributes as about, html as aboutBody } from '@/content/pages/about.md'
import { attributes as main, html as mainBody } from '@/content/site/main.md'
import { attributes as meta } from '@/content/site/meta.md'
import { attributes as theme } from '@/content/site/theme.md'

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app }) {
    const projectFiles = await readFiles('./content/projects')
    const projects = projectFiles.map(p => ({ ...p.content, name: p.filename, slug: p.filename }))

    commit('initStore', {
      about: { ...about, body: aboutBody },
      main: { ...main, body: mainBody },
      meta,
      theme,
      projects
    })
  }
}

export const mutations = {
  initStore (state, { about, main, meta, theme, projects }) {
    state.about = about
    state.main = main
    state.meta = meta
    state.projects = projects
    state.theme = theme
  },
  setProjects (state, projects) {
    state.projects = projects
  }
}

export const state = () => ({
  about: {},
  main: {
    image: ''
  },
  meta: {},
  projects: [],
  theme: {}
})
