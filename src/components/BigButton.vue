<template>
  <button
    class="p-8 px-28 rounded-3xl bg-white bg-opacity-10 hover:bg-opacity-30 shadow-sm focus:outline-none focus:ring-0 active:bg-opacity-10"
  >
    <p class="text-white font-light text-2xl text-center">
      {{ msg }}
    </p>
  </button>
</template>

<script>
export default {
  name: "big-button",
  props: [ 'msg' ]
}
</script>