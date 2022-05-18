<script>
import BindingPage from "@/pages/Binding.vue";

export default {
  data() {
    return {
      c: 0,
      f: 32,
    };
  },
  methods: {
    setC(e, c = +e.target.value) {
      this.c = c;
      this.f = c * (9 / 5) + 32;
    },

    setF(e, f = +e.target.value) {
      this.f = f;
      this.c = (f - 32) * (5 / 9);
    },
  },
};
</script>

<template>
  <div class="px-10 py-10">
    <a href="#" class="badgeBlue">Konversi Suhu Celcius ~ Fahrenheit</a>

    <div class="mt-5">
      C
      <input
        class="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        :value="c"
        @change="setC"
      />

      F
      <input
        class="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="number"
        :value="f"
        @change="setF"
      />
    </div>
  </div>
</template>
