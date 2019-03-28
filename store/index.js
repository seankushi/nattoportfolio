import { readFiles } from '@/api'
import { attributes as main, html as mainBody } from '@/content/site/main.md'
import { attributes as meta } from '@/content/site/meta.md'
import { attributes as theme } from '@/content/site/theme.md'

// const createComponent = innerHTML => ({
//   functional: true,
//   render (h, ctx) {
//     return h({ domProps: { innerHTML } })
//   }
// })

// const importMarkdown = async (dir) => {
//   try {
//     const result = []
//     const files = await api(dir)
//     for (const file of files) {
//       const importPath = `../${dir}/${file}`
//       const content = await import(importPath)
//       console.log('importPaths', content)

//       result.push({ ...content, id: file })
//     }
//     return await result
//   } catch (error) {
//     console.error('importMarkdown', error)
//   }
// }

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { app }) {
    // await dispatch('getProjects', app)
    const projectFiles = await readFiles('./content/projects')
    const projects = projectFiles.map(p => ({ ...p, name: p.filename, slug: p.filename }))
    console.log('PRJECTS_INIT', projects)
    commit('initStore', {
      main: { ...main, body: mainBody },
      meta,
      theme,
      projects
    })
  }
  // async getProjects ({ commit }) {
  //   const projectsDir = 'content/projects'
  //   try {
  //     const projects = await importMarkdown(projectsDir)
  //     console.log('PROJECTS', projects)
  //     commit('setProjects', projects)
  //     return projects
  //   } catch (error) {
  //     console.error('getProjects', error)
  //   }
  // }

}

export const mutations = {
  initStore (state, { main, meta, theme, projects }) {
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
  main: {
    image: ''
  },
  meta: {},
  projects: [],
  theme: {}
})
