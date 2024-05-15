export default {
    input: './src/main.js',
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
        name: "bundleName", //iife和umd 需要指定名字
    }
}