import type { App } from 'vue'

export interface PluginFile {
  install: (app: App<Element>) => Promise<void>
}

export const installPlugins = (app: App<Element>) => {
  const pluginFiles = Object.values(
    import.meta.globEager('./*.ts') as Record<string, PluginFile>,
  )
  const installPromises: Promise<void>[] = []
  pluginFiles.map(
    (i: PluginFile) => i.install && installPromises.push(i.install(app)),
  )

  return Promise.all(installPromises)
}
