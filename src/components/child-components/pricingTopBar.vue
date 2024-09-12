<script setup>
const props = defineProps({
    title: String,
    iconName: String,
    price: Number
});
</script>

<template>
  <div class="pricing_top_bar">
    <h5 class="pricing_title">{{ title }}</h5>
    <i class="lni lni-coffee-cup"></i>
    <span class="price">{{price}}</span>
  </div>
</template>
