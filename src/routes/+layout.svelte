<script lang="ts">
  import Layout from "$lib/layout.svelte";
  import type { Snippet } from "svelte";
  import "../app.css";

  const { children }: { children: Snippet } = $props();
</script>

<Layout>
  {@render children()}
</Layout>
