import path from 'path'
import { GatsbyNode } from 'gatsby'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        $sections: path.resolve(__dirname, 'src/sections'),
        $theme: path.resolve(__dirname, 'src/theme'),
        $typings: path.resolve(__dirname, 'src/typings'),
      },
    },
  })
}
