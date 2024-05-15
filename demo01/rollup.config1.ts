import type { RollupOptions } from 'rollup'


interface NewRollupOptions extends RollupOptions {
    entry: string | string[]
}


const config: NewRollupOptions = {
        entry: './src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs',
        }
}

export default config