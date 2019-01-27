const PrerenderSPAPlugin = require('prerender-spa-plugin')
const { getRoutes } = require('./src/routes')
// const Prerenderer = require('@prerenderer/prerenderer')
// Make sure you install a renderer as well!
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')
const path = require('path')

module.exports = (config, env) => {
  if (env === 'production') {
    getRoutes().then(
      (routes) => {
        config.plugins = config.plugins.concat([
          new PrerenderSPAPlugin({
            routes,
            staticDir: path.join(__dirname, 'build'),
            render: new PuppeteerRenderer()
          })
        ])
      }
    )
  }

  return config
}
