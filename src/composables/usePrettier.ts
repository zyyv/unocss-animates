import prettier from 'prettier/standalone'
import parserCSS from 'prettier/parser-postcss'

export const usePrettier = (code: string) => {
  return prettier.format(code, {
    parser: 'css',
    plugins: [parserCSS],
    singleQuote: true,
    semi: false,
  })
}
