<script setup></script>

<template>
  <div class="wrapper">
    <div class="wrapper__body">
      <span>Your internet connection was lost. Retry</span>
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
    max-width: 500px;
    @include transition;
  }

  @media (max-width: $vt-mobile) {
    top: 0;
    right: 0;
    left: 0;
    padding: 0;

    &__body {
      max-width: 100%;
    }
  }
}
</style>
