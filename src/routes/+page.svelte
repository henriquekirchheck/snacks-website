<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import AutoPlay from "embla-carousel-autoplay";

  import type { Picture } from "vite-imagetools";
  import friesImg from "$lib/assets/images/produtos/Batata Frita.jpg?enhanced";
  import bigTowerImg from "$lib/assets/images/produtos/Big Tower.jpg?enhanced";
  import cheedarImg from "$lib/assets/images/produtos/Cheddar.jpg?enhanced";
  import cheeseburgerImg from "$lib/assets/images/produtos/Cheeseburger.jpg?enhanced";
  import chickenImg from "$lib/assets/images/produtos/Frangão.jpg?enhanced";
  import nuggetsImg from "$lib/assets/images/produtos/Nuggets.jpg?enhanced";
  import sodaImg from "$lib/assets/images/produtos/Refri Lata.jpg?enhanced";
  import juiceImg from "$lib/assets/images/produtos/Sucos.jpg?enhanced";
  import healthyImg from "$lib/assets/images/produtos/Xis-Salada.jpg?enhanced";

  const products: {
    name: string;
    price: string;
    img: Picture;
  }[] = [
    { name: "Batata Frita", price: "R$7,99", img: friesImg },
    { name: "Big Tower", price: "R$17.99", img: bigTowerImg },
    { name: "Cheddar", price: "R$12.99", img: cheedarImg },
    { name: "Cheeseburger", price: "R$11.99", img: cheeseburgerImg },
    { name: "Frangão", price: "R$10.99", img: chickenImg },
    { name: "Nuggets", price: "R$6.99", img: nuggetsImg },
    { name: "Refri Lata", price: "R$5.99", img: sodaImg },
    { name: "Sucos", price: "R$8.99", img: juiceImg },
    { name: "Xis-Salada", price: "R$11.99", img: healthyImg },
  ];

  import sale from "$lib/assets/images/promocao.jpg?enhanced";
  import newLocationMcGuee from "$lib/assets/images/hamburgueria2.jpg?enhanced";

  type Slide = {
    src: Picture;
    topRight: string;
    bottomLeft: string;
  };

  const slides: Slide[] = [
    {
      src: sale,
      topRight: "Promoção",
      bottomLeft: "X-Salada + Batata = R$9,90",
    },
    {
      src: newLocationMcGuee,
      topRight: "Nova Localização",
      bottomLeft: "Nós visite no Cruzeiro",
    },
  ];
</script>

<div class="flex items-center justify-center">
  <div
    class="flex max-w-screen-md flex-col items-center justify-center gap-5 border-black bg-[#fff59f] p-5 md:border-x-2"
  >
    <Carousel.Root
      opts={{
        loop: true,
      }}
      plugins={[
        AutoPlay({
          delay: 5000,
        }),
      ]}
    >
      <Carousel.Content>
        {#each slides as itemSlide}
          <Carousel.Item>
            <div class="relative rounded-md border-2 border-black">
              <enhanced:img src={itemSlide.src} sizes="min(1200px, 100vw)" class="w-full" />
              <span class="text-shadow absolute left-4 top-4 text-6xl font-bold text-white"
                >{itemSlide.topRight}</span
              >
              <span
                class="text-shadow absolute bottom-4 right-4 text-2xl font-bold text-white sm:text-3xl"
              >
                {itemSlide.bottomLeft}
              </span>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
    </Carousel.Root>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {#each products as { img, name, price }}
        <div
          class="rounded-md border-2 border-black bg-white hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        >
          <enhanced:img
            src={img}
            alt=""
            class="rounded-md rounded-b-none border-b-2 border-black"
          />
          <div class="flex flex-col p-2">
            <h2 class="text-xl font-bold">{name}</h2>
            <span>{price}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .text-shadow {
    text-shadow: 0px 0px 2rem rgb(255, 16, 16), 0px 0px 2rem rgb(255, 16, 16);
  }
</style>
