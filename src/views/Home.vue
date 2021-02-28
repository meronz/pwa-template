<template>
  <div class="flex h-screen justify-center items-center">
    <big-button :msg="t('home.start')" />
  </div>
</template>

<script setup>
import BigButton from "../components/BigButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>
