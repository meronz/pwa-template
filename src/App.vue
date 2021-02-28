<template>
  <div>
    <div class="text-white min-h-screen bg-light-blue-500 dark:bg-gray-800">
      <div class="flex justify-start justify-items-end">
        <div id="nav" class="pt-12 mx-8">
          <router-link
            :to="{ name: 'Home' }"
            class="px-4 py-2 mx-2 rounded-3xl bg-white bg-opacity-30"
            href="#"
            v-t="'nav.home'"
          >
          </router-link>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>