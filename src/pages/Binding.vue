<script>
export default {
  data() {
    return {
      message: "Vue is a JavaScript framework for building user interfaces.",
      text: "",
      isYellow: false,
      color: "green",
    };
  },
  methods: {
    toggleSpan() {
      this.isYellow = !this.isYellow;
    },
  },
};
</script>

<template>
  <div class="px-10 py-10">
    <p>
      <span :title="message"> Hover me for more info about Vue. </span>
    </p>

    <span :class="{ badgeYellow: isYellow }" @click="toggleSpan">
      Click me if you like yellow.
    </span>

    <div>
      <input
        v-model="text"
        type="text"
        class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Type something..."
      />

      <label
        for="first_name"
        class="block mb-2 text-sm font-medium dark:text-gray-300"
        >{{ text }}</label
      >

      <span>{{ text }}</span>
    </div>
  </div>
</template>
