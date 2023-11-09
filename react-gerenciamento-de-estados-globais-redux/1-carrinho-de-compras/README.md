# Curso de redux, sass, css modules

```shell
yarn add react-redux @reduxjs/toolkit

yarn add sass classnames   

```

jsconfig.json para adicionar base url

```json

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```


## classnames

Sem classnames

```jsx
<div className={selecionado ? ‘card-selecionado’ : ‘’}>
</div>

```

Com classnames


```jsx
<div className={classNames({
 ‘card-selecionado’: selecionado
})}>
</div>

```

## CSS modules

Adicionam ids unicos a componentes no html. Isso resolve problemas de sobreposição de CSS

Sem css modules

```jsx
import ‘./Navbar.scss’;

<nav className=’nav’>
</nav>

// o resultado na dom será
<nav class=”nav”> … </nav>
```

Com css modules



```jsx
import styles from './Navbar.module.scss';

<nav className={styles.nav}> … </nav>

// O resultado na dom será

<nav class=”Navbar_nav__VwSpp”> … </nav>
```



Para icones

```shell
yarn add react-icons

```




```shell
 yarn add react-router-dom  

```


Redux toolkit: cria a store
React Redux: prove a store para os componentes


```shell
 yarn add @reduxjs/toolkit react-redux

```




```shell


```



