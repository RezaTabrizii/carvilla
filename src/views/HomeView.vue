<template>
  <main>
    <section
      class="relative welcome-section flex flex-col justify-center items-center pb-[780px] lg:pb-20"
    >
      <div class="flex justify-center items-center z-0 h-screen">
        <div class="font-poppins text-white text-center px-4 sm:px-12 select-none">
          <h2 class="text-3xl font-bold uppercase mb-11 leading-relaxed md:text-4xl">
            get your desired car in resonable price
          </h2>
          <p class="text-sm font-normal md:w-2/3 md:mx-auto md:text-lg max-md:px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <app-button
            text="Contact Us"
            additional_classes="mt-14"
            size-classes="py-5 px-16"
          ></app-button>
        </div>
      </div>

      <div class="absolute container -bottom-32 flex justify-center">
        <div
          class="w-11/12 2xl:w-3/4 rounded-sm bg-white z-0 shadow-lg py-10 px-4 lg:px-16 font-poppins"
        >
          <form
            class="flex flex-col justify-center items-center lg:flex-row lg:justify-between"
            @submit.prevent="submitForm"
          >
            <div class="w-full">
              <app-form-select-box
                name="year"
                label="Select Year"
                :options="year_options"
              ></app-form-select-box>
              <app-form-select-box
                name="body-style"
                label="Body Style"
                :options="body_style_options"
                main_class="mb-7 lg:mb-0"
              ></app-form-select-box>
            </div>
            <div class="w-full">
              <app-form-select-box
                name="make"
                label="Select Make"
                :options="make_options"
              ></app-form-select-box>
              <app-form-select-box
                name="car-condition"
                label="Car Condition"
                :options="car_condition_options"
                main_class="mb-7 lg:mb-0"
              ></app-form-select-box>
            </div>
            <div class="w-full">
              <app-form-select-box
                name="model"
                label="Select Model"
                :options="model_options"
              ></app-form-select-box>
              <app-form-select-box
                name="price"
                label="Select Price"
                :options="price_options"
                main_class="mb-7 lg:mb-0"
              ></app-form-select-box>
            </div>
            <div>
              <app-button
                additional_classes="max-sm:text-sm"
                text="Search"
                type="submit"
              ></app-button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-64 mb-24">
      <div class="flex flex-wrap justify-center px-4 md:justify-normal lg:justify-center">
        <app-post-card :have_zheget="true">
          <template v-slot:image_part>
            <svg class="lnr-car lnr size-16 fill-gray-600 group-hover:fill-slate-100">
              <use xlink:href="#lnr-car"></use>
            </svg>
          </template>
          <template v-slot:first_part>
            <h2 class="w-full truncate">
              <a
                class="text-xl text-nowrap font-bold cursor-pointer text-center text-gray-700 group-hover:text-slate-100"
                href="#"
                v-html="`Largest Dealership <span> of</span> Car`"
              >
              </a>
            </h2>
          </template>
          <template v-slot:second_part>
            <p
              class="select-none text-gray-500 text-base text-center leading-relaxed truncate-lines-3 group-hover:text-slate-100"
            >
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed
              quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit
              sed quia.
            </p>
          </template>
        </app-post-card>
        <app-post-card :have_zheget="true">
          <template v-slot:image_part>
            <svg class="lnr-bus lnr size-16 fill-gray-600 group-hover:fill-slate-100">
              <use xlink:href="#lnr-bus"></use>
            </svg>
          </template>
          <template v-slot:first_part>
            <h2 class="w-full truncate">
              <a
                class="text-xl text-nowrap font-bold cursor-pointer text-center text-gray-700 group-hover:text-slate-100"
                href="#"
                v-html="`Largest Dealership <span> of</span> Bus`"
              >
              </a>
            </h2>
          </template>
          <template v-slot:second_part>
            <p
              class="select-none text-gray-500 text-base text-center leading-relaxed truncate-lines-3 group-hover:text-slate-100"
            >
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed
              quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit
              sed quia.
            </p>
          </template>
        </app-post-card>
        <app-post-card :have_zheget="true">
          <template v-slot:image_part>
            <svg class="lnr-train lnr size-16 fill-gray-600 group-hover:fill-slate-100">
              <use xlink:href="#lnr-train"></use>
            </svg>
          </template>
          <template v-slot:first_part>
            <h2 class="w-full truncate">
              <a
                class="text-xl text-nowrap font-bold cursor-pointer text-center text-gray-700 group-hover:text-slate-100"
                href="#"
                v-html="`Largest Dealership <span> of</span> Train`"
              >
              </a>
            </h2>
          </template>
          <template v-slot:second_part>
            <p
              class="select-none text-gray-500 text-base text-center leading-relaxed truncate-lines-3 group-hover:text-slate-100"
            >
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed
              quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit
              sed quia.
            </p>
          </template>
        </app-post-card>
      </div>
    </section>

    <section class="bg-slate-100 py-28">
      <div class="container mx-auto overflow-hidden">
        <app-section-header
          header_content="newest cars"
          paragraph_content="checkout <span class='lowercase'>the</span> latest cars"
        ></app-section-header>

        <app-regular-carousel
          :items_count="cars.length"
          :have_auto_slide="true"
          :have_footer_buttons="true"
        >
          <div v-for="(car, index) in cars" :key="index" class="flex-grow-0 flex-shrink-0 w-full">
            <div
              class="flex flex-col items-center px-4 mx-auto max-w-sm sm:px-0 sm:max-w-md sm:mx-auto lg:flex-row lg:max-w-full lg:mx-0"
            >
              <div class="w-full lg:w-7/12 lg:px-6 flex justify-center">
                <img :src="car.image" alt="img" />
              </div>
              <div class="my-4 font-poppins select-none w-full lg:w-5/12 lg:px-6">
                <h2 class="capitalize mb-6 text-3xl font-semibold text-gray-600">
                  <a :href="car.detailsLink"> {{ car.title }} </a>
                </h2>
                <p class="text-base text-gray-500">
                  {{ car.description }}
                </p>
                <p class="text-base text-gray-500 mt-7">
                  Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>
                <app-button text="View Details" additional_classes="mt-8"></app-button>
              </div>
            </div>
          </div>
        </app-regular-carousel>
      </div>
    </section>

    <section class="py-28">
      <div class="container mx-auto">
        <app-section-header
          header_content="featured cars"
          paragraph_content="checkout <span>the</span> featured cars"
        ></app-section-header>

        <div class="flex flex-wrap justify-center items-center gap-4 pt-24 px-4 sm:px-0">
          <app-product-card
            v-for="(product, index) in products"
            :key="index"
            :product_title="product.title"
            :product_link="product.link"
            :product_image="product.image"
            :product_price="product.price"
            :product_description="product.description"
            :product_tags="product.tags"
          >
          </app-product-card>
        </div>
      </div>
    </section>

    <section class="bg-slate-100 py-28">
      <div class="container mx-auto">
        <app-section-header header_content="what our clients say"></app-section-header>

        <div class="pt-24 px-4 flex justify-center">
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <app-post-card :have_zheget="false" box_size_classes="bg-slate-100 w-full">
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c1.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>
            <swiper-slide>
              <app-post-card :have_zheget="false" box_size_classes="bg-slate-100 w-full">
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c2.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>
            <swiper-slide>
              <app-post-card :have_zheget="false" box_size_classes="bg-slate-100 w-full">
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c3.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>

            <swiper-slide>
              <app-post-card :have_zheget="false" box_size_classes="bg-slate-100 w-full">
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c1.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>
            <swiper-slide>
              <app-post-card
                class="bg-g"
                :have_zheget="false"
                box_size_classes="bg-slate-100 w-full"
              >
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c2.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>
            <swiper-slide>
              <app-post-card :have_zheget="false" box_size_classes="bg-slate-100 w-full">
                <template v-slot:image_part>
                  <img src="../assets/images/clients/c3.png" />
                </template>
                <template v-slot:first_part>
                  <p
                    class="select-none text-gray-500 text-center text-base truncate-lines-4 group-hover:text-slate-100"
                  >
                    Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan
                    rem aperiam, eaque ipsa quae ab illo inventore verit.
                  </p>
                </template>
                <template v-slot:second_part>
                  <h2
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    Tomas Lili
                  </h2>
                  <h4
                    class="select-none text-gray-600 text-center text-base font-bold truncate group-hover:text-slate-100"
                  >
                    New York
                  </h4>
                </template>
              </app-post-card>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="py-28">
      <div class="container mx-auto">
        <div class="px-4 flex justify-center">
          <app-infinite-carousel :items_count="6" @item_width="set_width">
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br1.png" alt="" />
            </a>
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br2.png" alt="" />
            </a>
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br3.png" alt="" />
            </a>
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br4.png" alt="" />
            </a>
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br5.png" alt="" />
            </a>
            <a href="#" class="flex justify-center" :style="`width: ${items_width}px`">
              <img class="h-20 w-36" src="/images/brand/br6.png" alt="" />
            </a>
          </app-infinite-carousel>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import AppButton from '../components/AppButton.vue'
import AppFormSelectBox from '../components/AppFormSelectBox.vue'
import AppPostCard from '../components/AppPostCard.vue'
import AppSectionHeader from '../components/AppSectionHeader.vue'
import AppRegularCarousel from '../components/AppRegularCarousel.vue'
import AppProductCard from '../components/AppProductCard.vue'
import AppInfiniteCarousel from '@/components/AppInfiniteCarousel.vue'
import { ref } from 'vue'

const modules = [Pagination]
const year_options: string[] = ['Year', '2045', '2044', '2043']
const body_style_options: string[] = ['Style', 'Sedan', 'Van', 'RoadSter']
const make_options: string[] = ['Make', 'Toyota', 'Holden', 'Maecedes-Benz']
const car_condition_options: string[] = ['Condition', 'Ok', 'Broken', 'Not Exist']
const model_options: string[] = ['Model', 'Kia-Rio', 'Mitsubishi', 'Ford']
const price_options: string[] = ['Price', '$2500', '$5000', '$7500']

const cars = [
  {
    title: 'chevrolet camaro za100',
    image: '/images/new-cars-model/ncm1.png',
    detailsLink: '#1',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'BMW series-3 wagon',
    image: '/images/new-cars-model/ncm2.png',
    detailsLink: '#2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, libero sint veniam, facilis accusamus sunt pariatur maiores nemo fugit magni ipsam repudiandae atque consequatur distinctio debitis? Doloribus cum aut id omnis natus facilis ipsam veritatis.'
  },
  {
    title: 'ferrari 488 superfast',
    image: '/images/new-cars-model/ncm3.png',
    detailsLink: '#3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptas omnis aperiam debitis consequatur fuga eos laboriosam, ipsam quaerat corporis, in provident illo, delectus exercitationem! Ab, numquam alias? Deleniti, dolor.'
  }
]

const products = [
  {
    title: 'BMW 6-Series Gran Coupe',
    link: '#',
    image: '/images/featured-cars/fc1.png',
    price: 85000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.',
    tags: [
      'Model 2017 3100 Mi 240HP',
      'automatic',
      'automatic',
      'automatic',
      'automatic',
      'automatic',
      'automatic'
    ]
  },
  {
    title: 'BMW 6-Series Gran Coupe',
    link: '#',
    image: '/images/featured-cars/fc2.png',
    price: 85000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.',
    tags: ['Model 2017 3100 Mi 240HP', 'automatic']
  },
  {
    title: 'BMW 6-Series Gran Coupe',
    link: '#',
    image: '/images/featured-cars/fc3.png',
    price: 85000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.',
    tags: ['Model 2017 3100 Mi 240HP', 'automatic']
  },
  {
    title: 'BMW 6-Series Gran Coupe',
    link: '#',
    image: '/images/featured-cars/fc4.png',
    price: 85000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.',
    tags: ['Model 2017 3100 Mi 240HP', 'automatic']
  },
  {
    title: 'BMW 6-Series Gran Coupe',
    link: '#',
    image: '/images/featured-cars/fc5.png',
    price: 85000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.',
    tags: ['Model 2017 3100 Mi 240HP', 'automatic']
  }
]

function submitForm(event: any) {
  const formData = new FormData(event.target)
  console.log(
    formData.get('year'),
    formData.get('body-style'),
    formData.get('make'),
    formData.get('car-condition'),
    formData.get('model'),
    formData.get('price')
  )
}

const items_width = ref<number>(0)
const set_width = (width: number) => {
  items_width.value = width
}
</script>

<style scoped>
.welcome-section {
  /* padding: 20% 0; */
  /* height: 135vh; */
  position: relative;
  background: url(../assets/images/welcome-hero/welcome-banner.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.welcome-section:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(42, 45, 84, 0.6);
}

/* .swiper {
} */

.swiper-slide {
  min-width: 300px;
  background-color: rgb(241 245 249);
}

@media (max-width: 767px) {
  .swiper-slide {
    min-width: 0px;
    width: 100% !important;
  }
}
</style>
