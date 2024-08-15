<script lang="ts">
  import sale from "$lib/assets/images/promocao.jpg?enhanced";
  import type { Picture } from "vite-imagetools";

  const images = import.meta.glob<true, string, { default: Picture }>(
    "$lib/assets/images/produtos/*.jpg",
    {
      eager: true,
      query: { enhanced: true },
    }
  );
</script>

<div class="flex flex-col items-center justify-center gap-5 p-2">
  <div
    class="relative rounded-md border-2 border-black bg-white hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
  >
    <enhanced:img src={sale} sizes="min(1200px, 100vw)" class="max-w-screen-md w-full"/>
    <span class="text-shadow absolute left-4 top-4 text-6xl font-bold text-white">Promoção</span>
    <span class="text-shadow absolute bottom-4 right-4 text-3xl font-bold text-white">
      X-Salada + Batata = R$9,90
    </span>
  </div>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
    {#each Object.entries(images) as [path, module]}
      {@const imageName = path.split("/").at(-1)?.split(".").at(0)!}
      <div
        class="rounded-md border-2 border-black bg-white hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      >
        <enhanced:img
          src={module.default}
          alt=""
          class="rounded-md rounded-b-none border-b-2 border-black"
        />
        <div class="flex flex-col p-2">
          <h2 class="text-xl font-bold">{imageName}</h2>
          <span>R$10.99</span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .text-shadow {
    text-shadow: 0px 0px 3rem rgb(255, 67, 67);
  }
</style>
