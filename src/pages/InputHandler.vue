<script>
export default {
  data() {
    return {
      message: "Input Handler Page",
      price: 49,
    };
  },
};
</script>

<template>
  <div class="py-10 px-10">
    <a href="#" class="badgeBlue">{{ message }}</a>

    <div class="mt-8">
      <button @click="price += 1" type="button" class="btn-cyan">
        Increase Price
      </button>

      <button @click="price -= 1" type="button" class="btn-pink">
        Decrease Price
      </button>
    </div>

    <div
      class="p-4 max-w-sm bg-white rounded-lg border shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-4"
    >
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Weekday Price
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">{{ price }}</span>
        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
          >/month</span
        >
      </div>
    </div>
  </div>
</template>
