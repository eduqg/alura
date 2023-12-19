<script lang="ts">
  let name: string = 'Eduardo';
  let src = 'https://avatars.githubusercontent.com/u/23617963?s=200&v=4';
  let alt = 'Imagem do Svelte';
</script>

<h1>Welcome to SvelteKit {name}</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<img {src} {alt} height="300" />
