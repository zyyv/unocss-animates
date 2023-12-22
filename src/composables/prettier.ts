import prettier from 'prettier/standalone'
import parserCSS from 'prettier/plugins/postcss'

export function usePrettier(code: string) {
  return prettier.format(code, {
    parser: 'css',
    plugins: [parserCSS],
    singleQuote: true,
    semi: false,
  })
}
