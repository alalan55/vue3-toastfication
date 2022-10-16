<script setup>
const props = defineProps({
  type: { type: String, default: "success" },
});
</script>

<template>
  <div class="card" :class="[props.type]">
    <div class="card__left">
      <div class="title">
        <figure>
          <img src="/icons/check-icon.svg" alt="Alert" />
        </figure>
        <span> Success </span>
      </div>
      <div class="text">
        <p>Itens added to yout cart Itens added to yout cart.</p>
      </div>
    </div>
    <div class="card__right"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.card {
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 5px;
  @include transition;
  &__left {
    .title {
      display: flex;
      align-items: center;
      gap: 0.1rem;

      figure {
        width: 30px;
        height: 30px;
        img {
          width: 90%;
          height: 90%;
          object-fit: contain;
        }
      }

      span {
        font-weight: 600;
        font-size: 1.2em;
      }
    }
    .text {
      margin-top: 0.5rem;
      span {
        font-weight: 400;
        font-size: 1.2em;
      }
    }
  }
  @media (max-width: $vt-mobile) {
    border-radius: 0px;
  }
}

.success {
  background: $vt-green-1;
  .card__left {
    color: $vt-green-2;
    .title {
      figure {
        img {
          filter: invert(26%) sepia(10%) saturate(3371%) hue-rotate(73deg) brightness(99%)
            contrast(77%);
        }
      }
    }
  }
}
.warning {
  background: $vt-yellow-1;
  .card__left {
    color: $vt-yellow-2;
    .title {
      figure {
        img {
          filter: invert(48%) sepia(50%) saturate(331%) hue-rotate(3deg) brightness(95%)
            contrast(88%);
        }
      }
    }
  }
}

.error {
  background: $vt-red-1;
  .card__left {
    color: $vt-red-2;
    .title {
      figure {
        img {
          filter: invert(39%) sepia(6%) saturate(2590%) hue-rotate(307deg)
            brightness(104%) contrast(84%);
        }
      }
    }
  }
}

.info {
  background: $vt-blue-1;
  .card__left {
    color: $vt-blue-2;
    .title {
      figure {
        img {
          filter: invert(92%) sepia(80%) saturate(5582%) hue-rotate(246deg)
            brightness(77%) contrast(91%);
        }
      }
    }
  }
}
</style>
