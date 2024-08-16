<script lang="ts">
  import Uber from "$lib/icons/uber-brands-solid.svelte";
  import Whatsapp from "$lib/icons/square-whatsapp-brands-solid.svelte";
  import Instagram from "$lib/icons/square-instagram-brands-solid.svelte";
</script>

<div class="flex items-center justify-center">
  <div
    class="flex w-full max-w-screen-md flex-col items-center justify-center gap-5 border-b-2 border-black bg-[#fff59f] p-5 md:border-x-2"
  >
    <h1 class="text-4xl font-bold">Fale Conosco</h1>
    <div
      class="flex w-full flex-col items-baseline justify-between gap-3 sm:flex-row sm:items-center"
    >
      <div class="flex w-full items-center justify-between gap-2 sm:justify-center">
        <Whatsapp class="h-16 w-16 fill-green-500" />
        <h2 class="text-3xl">Whatsapp</h2>
      </div>
      <div class="h-1 w-full bg-black sm:h-20 sm:w-1"></div>
      <div class="flex w-full items-center justify-between gap-2 sm:justify-center">
        <Uber class="h-16 w-16" />
        <h2 class="text-3xl">Uber Eats</h2>
      </div>
      <div class="h-1 w-full bg-black sm:h-20 sm:w-1"></div>
      <div class="flex w-full items-center justify-between gap-2 sm:justify-center">
        <Instagram class="h-16 w-16 fill-purple-500" />
        <h2 class="text-3xl">Instagram</h2>
      </div>
    </div>
    <form class="flex w-full flex-col gap-2">
      <div class="flex flex-col">
        <label for="name">Nome</label>
        <input
          name="name"
          class=" border-2 border-black p-2.5 focus:bg-[#FFA6F6] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          placeholder="Seu nome"
        />
      </div>
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input
          name="email"
          class=" border-2 border-black p-2.5 focus:bg-[#FFA6F6] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          placeholder="seu@email.com"
          type="email"
        />
      </div>
      <div class="flex flex-col">
        <label for="order">Pedido</label>
        <input
          name="order"
          class=" border-2 border-black p-2.5 focus:bg-[#FFA6F6] focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          placeholder="Seu pedido"
        />
      </div>
      <button
        class="h-12 border-2 border-black bg-[#A6FAFF] p-2.5 hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
      >
        Enviar
      </button>
    </form>
  </div>
</div>
