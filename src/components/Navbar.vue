<template>
  <header>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div class="container mx-auto">
        <ul
          class="flex justify-evenly md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <router-link to="/">
              <a class="nav-item" aria-current="page">Home</a>
            </router-link>
          </li>

          <li>
            <router-link to="/handler">
              <a class="nav-item">Input Handler</a>
            </router-link>
          </li>

          <li>
            <router-link to="/binding">
              <a class="nav-item">Binding</a>
            </router-link>
          </li>

          <li>
            <router-link to="/simple-calculation">
              <a class="nav-item">Simple Calculation</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
