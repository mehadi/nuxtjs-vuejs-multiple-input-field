<template>
  <div>
    <nav class="nav flex flex-wrap items-center justify-between px-4 bg-blue-100">
      <div class="flex flex-no-shrink items-center mr-6 py-3 text-gray-800">
        <nuxt-link to="/" class="font-semibold text-xl tracking-tight">NUXTJS</nuxt-link>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn">
      <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
        <span class="navicon bg-gray-800 flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none">
          <nuxt-link to="/" class="block md:inline-block px-4 py-3 no-underline text-gray-800 hover:text-gray-700 font-bold">Home</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
</script>
