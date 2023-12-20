# svelte-kit-spa parte 1

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

# svelte-kit-spa parte 2

https://github.com/alura-cursos/alura-cook-curso-2

Layouts, store, navegação

Stores. Para disponibilizar dados entre componentes.
Utilizar o $ para conseguir acessar minhaLista.
Como se fosse um estado global.

```svelte
	{#if $minhaLista.length}
```

O método subscribe pode ser utilizado ao invés do $. O que traz maior complexidade:

```svelte
<script lang="ts">
	import { contador } from '$lib/stores/contador';

	let valorContador: number;

	contador.subscribe((valorAtualizado) => {
		valorContador = valorAtualizado;
	});

	function incrementar() {
		contador.update((valorAtual) => valorAtual + 1);
	}
</script>

<button on:click={incrementar}> Incrementar </button>

<span>{valorContador}</span>
```

Ao utilizar um código que possui dependência de um estado global, utilizar sintaxe reativa com dólar, pois $minhaLista é um valor de uma store:

```svelte
De let selecionado = $minhaLista.includes(ingrediente); Para $: selecionado =
$minhaLista.includes(ingrediente);
```

Compara dois arrays. Satisfaz se todos os ingredientes de uma receita estão em $minha lista. Retorna as receitas possíveis de servem feitas.

```javascript
$: receitasFiltradas = receitas.filter((receita) =>
	receita.ingredientes.every((ingrediente) => $minhaLista.includes(ingrediente))
);
```

Estilos como props

```svelte
<Card --largura="200px">\

Adiciona style com variável css no escopo desse card.
Dentro de card posso usar da seguinte forma.

var(valor da prop, valor padrão caso prop não exista)

.card {
  width: var(--largura, 300px);

  min-height: 100%;
  background: var(--branco);
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
}
```

Transições de css no svelte

```svelte
import { fade } from 'svelte/transition';

<div class="meu-ingrediente-container" in:fade out:fade>

Mesmo que

<div class="meu-ingrediente-container" transition:fade={{ duration: 200 }}>
```

Build e preview

```svelte
npm run build
npm run preview
```

```svelte

```

```svelte

```

```svelte

```

```svelte

```
