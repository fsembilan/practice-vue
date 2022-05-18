<script>
import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#title", {
    strings: "HELLO WORLD!",
  }).go();

  new TypeIt("#subtitle", {
    speed: 60,
    afterComplete: function (instance) {
      instance.destroy();
    },
  })
    .type("frontend internship")
    .pause(800)
    .move(-11)
    .type(" hub-academy")
    .pause(600)
    .move(11)
    .go();
});
</script>

<template>
  <a href="#" class="card-hover mx-auto my-36">
    <h5
      id="title"
      class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
    ></h5>
    <p id="subtitle" class="font-normal text-gray-700 dark:text-gray-400"></p>
  </a>
</template>
