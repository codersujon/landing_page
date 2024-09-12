<script setup>
const props = defineProps({
      title: String,
      description: String
});
</script>

<template>
  <div class="features_content">
    <h4 class="features_title">{{ props.title }}</h4>
    <p>{{ props. description}}</p>
  </div>
</template>
