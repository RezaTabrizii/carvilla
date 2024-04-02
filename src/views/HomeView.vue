<template>
  <main>
    <section
      class="relative welcome-section flex flex-col justify-center items-center pb-[780px] lg:pb-20"
    >
      <div class="flex justify-center items-center z-0 h-screen">
        <div class="font-poppins text-white text-center px-4 sm:px-12">
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
      <!-- With Flex : class="flex flex-wrap justify-center px-4 md:justify-normal lg:justify-center" -->
      <!-- With Grid : class="grid grid-cols-3 gap-4 auto-rows-max" -->
      <div class="flex flex-wrap justify-center px-4 md:justify-normal lg:justify-center">
        <app-post-card
          svg_class="lnr-car"
          svg_xlink="#lnr-car"
          heading_content="Largest Dealership <span> of</span> Car"
          heading_link="#"
          main_content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia."
        ></app-post-card>
        <app-post-card
          svg_class="lnr-bus"
          svg_xlink="#lnr-bus"
          heading_content="Largest Dealership <span> of</span> Bus"
          heading_link="#"
          main_content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia!"
        ></app-post-card>
        <app-post-card
          svg_class="lnr-train"
          svg_xlink="#lnr-train"
          heading_content="Largest Dealership <span> of</span> Train"
          heading_link="#"
          main_content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia?"
        ></app-post-card>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue'
import AppFormSelectBox from '../components/AppFormSelectBox.vue'
import AppPostCard from '../components/AppPostCard.vue'

const year_options: string[] = ['Year', '2045', '2044', '2043']
const body_style_options: string[] = ['Style', 'Sedan', 'Van', 'RoadSter']
const make_options: string[] = ['Make', 'Toyota', 'Holden', 'Maecedes-Benz']
const car_condition_options: string[] = ['Condition', 'Ok', 'Broken', 'Not Exist']
const model_options: string[] = ['Model', 'Kia-Rio', 'Mitsubishi', 'Ford']
const price_options: string[] = ['Price', '$2500', '$5000', '$7500']

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
</style>
