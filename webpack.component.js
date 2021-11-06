const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const glob = require('glob')
// 组件列表
const list = {}

// 动态获取组件列表
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  console.log('files：', files)
  for(let file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component：', component)
    list[component] = `./${file}`
  }
  console.log(list)
}
makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
}