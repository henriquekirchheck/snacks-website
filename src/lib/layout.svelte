<script lang="ts">
  import type { Snippet } from "svelte";
  import Header from "./header.svelte";
  const { children }: { children: Snippet } = $props();
</script>

<div class="grid h-dvh w-dvw grid-rows-[auto_1fr]">
  <Header />
  <main class="bg-[#a6faff]">
    {@render children()}
  </main>
</div>
