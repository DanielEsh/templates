import type { App as AppType } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import { installPlugins } from './plugins'

const app = createApp(App)

const ROOT_ELEMENT_SELECTOR = '#app'

async function setupApp(app: AppType<Element>) {
  await Promise.all([installPlugins(app)])

  app.mount(ROOT_ELEMENT_SELECTOR)
}

setupApp(app)
