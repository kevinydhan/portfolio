import { GatsbyNode } from 'gatsby'
import path from 'path'

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
