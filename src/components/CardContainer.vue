<script setup>
import CardItem from "./CardItem.vue";
const props = defineProps({ teste: {type: String}})
const close = () => alert("close");

console.log(props.teste)
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__body">
      <CardItem v-type-toast:success @close="close" />
      <CardItem v-type-toast:warning @close="close" />
      <CardItem v-type-toast:error />
      <CardItem v-type-toast:info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  position: fixed;
  top: 50px;
  right: 50px;
  width: auto;
  padding: $vt-s-1;
  @include transition;

  &__body {
    max-width: 900px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    gap: $vt-s-1;
    @include transition;
  }
  @media (max-width: $vt-tablet) {
    right: 10px;
    top: 20px;
  }
  @media (max-width: $vt-mobile) {
    top: 0;
    right: 0;
    left: 0;
    padding: 0;
    height: auto;

    &__body {
      max-width: 100%;
      min-width: 100%;
    }
  }
}
</style>
