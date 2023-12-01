# Curso svelte perfis Alura

https://github.com/alura-cursos/svelte-perfis/tree/aula-2

```shell
node scripts/setupTypeScript.js
npm install
npm run dev
```

Exemplo de estilo global no svelte. Estilos sao por escopo de cada arquivo, desta forma é possível passar um estilo para outro componente

```css
:global(.titulo) {
  color: red;
}
```

Diretivas. No svelte é quando utilizamos os dois pontos. No caso, a diretiva (Element directives) on, que serve para escutar eventos da dom:

Modificadores (Modifiers) do svelte são adicionados com o pipe |

```html
<form on:submit|preventDefault={aoSubmeter}>
```

A diretiva :bind pode alterar valores no script. O input inicia com o valor definido e o usuário ao digitar o input, modifica o let valorInput.


```svelte
<script lang="ts">
  let valorInput = 'eduardo';
</script>

<input type="text" class="input" bind:value={valorInput} />
```

Props

Definir dentro do script do componente

```svelte
  export let usuario: IUsuario;
```

E utilizar da seguinte forma 

```svelte
{#if usuario}
  <Usuario {usuario} />
{/if}
```

No ts config, deixar typescript mais rígido, tipo usuário vai avisar sobre o null

```json
"compilerOptions": {
  "strictNullChecks": true
}
```

```svelte
Errado

let usuario: IUsuario = null;

Certo

let usuario: IUsuario | null = null;
```

Variavel pode ser passada do pai para o filho. Com a diretiva bind.
```svelte
<Formulario bind:usuario />
```

Eventos personalizados. 


No componente filho adicionar createEventDispatcher

```svelte
  const dispatch = createEventDispatcher<{
    aoAlterarUsuario: IUsuario | null;
  }>();

  Na funcao adicionar dispatch

  dispatch('aoAlterarUsuario', dadosDoUsuario)

  Alguém precisa escutar o evento. Entao em App.svelte devemos adicionar. Vamos alterar a diretiva bind:

  De <Formulario bind:usuario />
  Para <Formulario on:aoAlterarUsuario={definirUsuario} />

  function definirUsuario(evento: CustomEvent<IUsuario | null>) {
    usuario = evento.detail;
  }

```

Props x Dispatch x Bind

```text
Props: do pai para o filho;

Dispatch: do filho para o pai;

Bind: via dupla.
```

Encaminhamento de evento https://svelte.dev/tutorial/event-forwarding

É útil em casos que precisamos enviar evento ao componente avô

```svelte
const dispatch = createEventDispatcher();

function forward(event) {
  dispatch('message', event.detail);
}
```

Interpolação para adicionar classes


```svelte

<input
  class="input {statusDeErro === 404 && 'erro-input'}"
/>

Podemos escrever da forma svelte. A classe será adicionada quando a condição é satisfeita

<input
  class:erro-input={statusDeErro === 404}
/>
```

for each

```svelte
{#each usuario.repositorios_recentes as repositorio}
  <li>
    <a
      href={repositorio.url}
      target="_blank"
      rel="noopener"
      class="repositorio"
    >
      {repositorio.nome}
    </a>
  </li>
{/each}
```

O código escrito na tag script é executado apenas uma vez ao renderizar a tela. Para a variável ser atualizada de acordo com interações na tela utilizamos $. No javascript isso tem o nome de Sintaxe de rótulo. O Svelte aproveitou essa funcionalidade e utilizou o dólar para criar código reativo.

```svelte
De

<script lang="ts">
  temRepositorios = Boolean(usuario.repositorios_recentes.length);
</script>

Para

<script lang="ts">
  $: temRepositorios = Boolean(usuario.repositorios_recentes.length);
</script>

Que também pode ser escrito da forma:

<script lang="ts">
  $: {
    temRepositorios = Boolean(usuario.repositorios_recentes.length);
    console.log(temRepositorios);
  }
</script>
```

slot: funciona como children do react


```svelte

Componente
<button type="submit" class="botao">
  <slot></slot>
</button>


Utilização
<Botao>
  Buscar
  <img src="/assets/lupa.svg" alt="ícone de lupa">
</Botao>

```


```svelte

```


```svelte

```
