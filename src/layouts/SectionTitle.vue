<script setup>
   const props = defineProps({
        sectionTitle: String,
        sectionDes: String
    });
</script>

<template>
  <div class="section_title text-center pb-25">
    <h4 class="title">{{ props.sectionTitle }}</h4>
    <p>{{ props.sectionDes }}</p>
  </div> <!-- section title -->
</template>
