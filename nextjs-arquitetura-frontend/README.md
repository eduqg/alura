# Aula Alura - Arquitetura Front-end

https://github.com/alura-cursos/curso05-arquitetura/tree/a1.3


Instalação manual em pasta (https://nextjs.org/docs/getting-started/installation)

```shell
cd projects/web-public
yarn init -y
yarn install next@latest react@latest react-dom@latest
yarn add next@latest react@latest react-dom@latest
```

Terminar de instalar typescript na pasta do projeto. NextJS faz de forma automática.

```shell
yarn dev
```

Arquivos com ponto no início, mover para a pasta raiz (.gitignore, .nvmrc). Alterar gitignore para não commitar node_modules e outros arquivos


Ao adicionar package json e configuração inicial de workspaces, não é mais necessário yarn.lock em subpastas, pois na pasta raiz o yarn.lock que irá gerenciar. (https://classic.yarnpkg.com/lang/en/docs/workspaces/)

```json
{
  "private": true,
  "workspaces": ["workspace-a", "workspace-b"]
}

{
  "private": true,
  "workspaces": {
    "packages": [
      "packages/*",
      "projects/*",
      "setup/*"
    ]
  }
}

```

Após salvar e rodar yarn install na raiz, o node_modules de cada subpasta muda, fica com menos arquivos (jargão: içar a pasta node_modules, movida para raiz). Dentro da pasta node_modules raiz, a biblioteca @alura fica disponível para outros projetos pois configuramos com esse nome nos subprojetos.

yarn.lock resolve conflitos de dependências

Posso adicionar @alura/utils nas dependências do meu subprojeto. * pega qualquer versão que estiver em node_modules do nosso utils.

```json
"dependencies": {
  "next": "^14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "@alura/utils": "*"
},
```

Rodar novamente yarn na raiz do projeto.

```shell
yarn
```

Posso adicionar pacotes dentro de projetos:

```shell
 "scripts": {
    "design-system": "yarn workspace @alura/design-system"
  }

  yarn design-system add styled-components
```

Ao tentar utilizar o componente, do design-system Text, irá falhar pois o nosso compilador não está prepara do para lidar com o typescript vindo daquela biblioteca. keyword interface is not defined

Para resolver isso, é necessário adicionar duas bibliotecas e um next.config.js em web-public (https://www.npmjs.com/package/next-transpile-modules)

```shell
yarn web-public add next-compose-plugins next-transpile-modules -D
```

A estrutura no topo com @type possibilita ter as tipagens com autocomplete do next config. next.config.js:

```shell
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['some-module', 'and-another']);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true
});
```

Mover arquivos de tsconfig para serem reaproveitados. Está na pasta setup. A propriedade extends em cada projeto reutiliza a estrutura. O atributo files no package.json diz qual arquivo será exportado de tsconfig-commons. Rodar yarn na pasta raiz ao terminar.

Para styled components, configurar de acordo com _app e _document. Disponíveis no github da vercel exemplos.

```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```



```shell

```
