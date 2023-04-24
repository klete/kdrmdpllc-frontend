<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="item-link"
    :to="{ name: 'index-details', params: { id: item.id } }"
  >
    <div class="item-card">
      <h2>{{ item.text }}</h2>
    </div>
  </RouterLink>
</template>

<style scoped>
.item-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.item-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.item-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
