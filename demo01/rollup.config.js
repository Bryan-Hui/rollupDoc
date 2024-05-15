const typescript = require('@rollup/plugin-typescript');

export default {
    entry: './src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        typescript({
          // 插件选项，如果需要的话
        }),
    ],
}