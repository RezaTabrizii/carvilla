<template>
  <div class="max-w-96 w-full md:w-1/2 lg:w-1/3">
    <div
      class="group single-service-item m-2 py-16 px-7 border border-gray-300 rounded-sm flex flex-col justify-center items-center font-poppins transition-all duration-500 hover:bg-blue-600 hover:shadow-md"
    >
      <div>
        <svg class="lnr size-16 fill-gray-600 group-hover:fill-slate-100" :class="svg_class">
          <use :xlink:href="svg_xlink"></use>
        </svg>
      </div>

      <h2 class="mt-9 mb-5">
        <a
          class="text-xl text-nowrap font-bold cursor-pointer text-center text-gray-700 group-hover:text-slate-100"
          :href="heading_link"
          v-html="heading_content"
        >
        </a>
      </h2>

      <p
        class="relative select-none text-gray-500 text-base text-center leading-relaxed pb-9 group-hover:text-slate-100"
      >
        {{ main_content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  svg_class: {
    type: String,
    required: true
  },
  svg_xlink: {
    type: String,
    required: true
  },
  heading_content: {
    type: String,
    required: true
  },
  heading_link: {
    type: String,
    required: true
  },
  main_content: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.single-service-item p:before {
  border-radius: 3px;
  position: absolute;
  content: '';
  width: 20px;
  height: 3px;
  background: #3030ea;
  bottom: 0;
  left: 50%;
  margin-left: -10px;
}

.single-service-item:hover p:before {
  background: #fff;
}
</style>
