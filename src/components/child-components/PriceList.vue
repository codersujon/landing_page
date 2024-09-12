<script setup>
const props = defineProps({
    list1: String,
    list2: String,
    list3: String
});
</script>

<template>
  <div class="pricing_list">
    <ul>
      <li>{{ props.list1 }}</li>
      <li>{{ props.list2 }}</li>
      <li>{{ props.list3 }}</li>
    </ul>
  </div>
</template>
