import type { App } from 'vue'
import { router } from '../core/router'

export const install = (app: App<Element>) => {
  app.use(router)
}
