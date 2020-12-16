import { GatsbyNode } from 'gatsby'
import { IGatsbyState } from 'gatsby/internal'
import path from 'path'
import manifestQuery from './src/queries/manifest'
import { colors } from './src/theme/global/theme'
import { ManifestQueryData } from './src/typings'

/**
 * @see https://github.com/gatsbyjs/gatsby/issues/19792#issuecomment-560980490
 */
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  store,
}) => {
  const { flattenedPlugins }: IGatsbyState = store.getState()
  const manifestPlugin = flattenedPlugins.find(({ name }) => {
    return name === 'gatsby-plugin-manifest'
  })

  if (!manifestPlugin) return

  const { data } = await graphql<ManifestQueryData>(manifestQuery)
  const { favicon, ...manifestQueryData } = data.manifest

  manifestPlugin.pluginOptions = {
    ...manifestPlugin.pluginOptions,
    ...manifestQueryData,
    ...data.metadata,
    background_color: colors.background,
    icon: favicon.localFile.relativePath,
    theme_color: colors.body,
  }
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        $context: path.resolve(__dirname, 'src/context'),
        $sections: path.resolve(__dirname, 'src/sections'),
        $theme: path.resolve(__dirname, 'src/theme'),
        $typings: path.resolve(__dirname, 'src/typings'),
        $utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  })
}
