<template>
  <div :class="box_size_classes">
    <div
      class="group single-service-item m-2 py-16 px-7 border border-gray-300 rounded-sm flex flex-col justify-center items-center font-poppins transition-all duration-500 hover:bg-blue-600 hover:shadow-md"
    >
      <div>
        <slot name="image_part"></slot>
      </div>

      <div class="mt-9 mb-5 w-full text-center">
        <slot name="first_part"></slot>
      </div>

      <div class="select-none text-center">
        <slot name="second_part"></slot>
      </div>

      <span v-if="have_zheget" class="relative pb-9 w-full"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  have_zheget: {
    type: Boolean,
    required: false
  },
  box_size_classes: {
    type: String,
    required: false,
    default: 'max-w-96 w-full md:w-1/2 lg:w-1/3'
  }
})
</script>

<style scoped>
.single-service-item span:before {
  border-radius: 3px;
  position: absolute;
  content: '';
  width: 20px;
  height: 3px;
  background: #3030ea;
  bottom: 0px;
  left: 50%;
  margin-left: -10px;
}

.single-service-item:hover span:before {
  background: #fff;
}
</style>
