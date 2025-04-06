<template>
  <article class="base-error">
    <h1 v-if="statusCode">
      {{ statusCode }}
    </h1>
    <div class="error-placeholder">
      <h2>{{ header }}</h2>
      <div
        v-if="description"
        class="error-description"
      >
        {{ description }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  statusCode: {
    type: Number,
    default: null
  },
  header: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  }
});
</script>

<style lang="scss" scoped src="./BaseError.scss" />
