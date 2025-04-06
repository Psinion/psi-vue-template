<template>
  <BaseError
    :status-code="404"
    header="Error 404"
  />
</template>

<script setup lang="ts">
import BaseError from "@/modules/errors/components/BaseError/BaseError.vue";
</script>
