# svelte-kit-spa

https://github.com/alura-cursos/alura-cook-curso-1/tree/aula-1

```shell
npm create svelte@latest svelte-kit-spa
cd svelte-kit-spa
npm install
npm run dev -- --open
```

Para adicionar alias, editar em svelte config

```svelte
kit: {
  adapter: adapter(),
  alias: {
    $components: 'src/lib/components'
  }
}
```

for each com identificar único (entre parênteses)

```svelte
{#each ingredientes as ingrediente (ingrediente)}
	<li>
		<Tag ativa={true}>{ingrediente}</Tag>
	</li>
{/each}
```

Svelte tag. Para diferentes tipos de elementos (h1, h2, h3...)

```svelte
<svelte:element this={tag} class="titulo tag-{tag}">
	<slot />
</svelte:element>

```

Componentes especializados. IngredientesSelecionados encapsula o componente Tag.

```svelte

```

```svelte

```

```svelte

```
