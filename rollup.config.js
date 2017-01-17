import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'k-http.js',
  plugins: [
    babel(),
    uglify()
  ]
}
