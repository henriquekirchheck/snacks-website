<script lang="ts">
  import logoImg from "$lib/assets/images/logo.png?enhanced";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<header
  class="flex w-full flex-wrap items-center justify-between border-b-2 border-black bg-white p-4"
>
  <div class="flex items-center gap-3">
    <enhanced:img src={logoImg} alt="" class="w-16" sizes="min(100px, 50vw)" />
    <h1 class="text-3xl font-bold uppercase">André Lanches</h1>
  </div>
  <nav class="grow">
    <ul class="flex items-center justify-end gap-2">
      <li>
        <a
          href={`${base}/about`}
          aria-current={$page.url.pathname == `${base}/about`}
          class="h-12 whitespace-nowrap border-2 border-black bg-[#ffa6a6] p-2.5 hover:bg-[#ff7979] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] aria-current:bg-[#ff7979]"
          >Sobre Nós</a
        >
      </li>
      <li>
        <a
          href={`${base}/`}
          aria-current={$page.url.pathname == `${base}/`}
          class="h-12 whitespace-nowrap border-2 border-black bg-[#ffa6a6] p-2.5 hover:bg-[#ff7979] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] aria-current:bg-[#ff7979]"
          >Lanches</a
        >
      </li>
      <li>
        <a
          href={`${base}/contact`}
          aria-current={$page.url.pathname == `${base}/contact`}
          class="h-12 whitespace-nowrap border-2 border-black bg-[#ffa6a6] p-2.5 hover:bg-[#ff7979] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] aria-current:bg-[#ff7979]"
          >Contato</a
        >
      </li>
    </ul>
  </nav>
</header>
