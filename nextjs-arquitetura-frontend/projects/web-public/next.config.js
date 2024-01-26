const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@alura/design-system',
  '@alura/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true
});

// A estrutura no topo com @type possibilita ter as tipagens com autocomplete do next config
