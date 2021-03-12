<template>
  <div
    class="home-TitleBlock"
    :class="size === 'big' ? 'home-TitleBlock__big' : 'home-TitleBlock__small'"
  >
    <div class="mask"></div>
    <img
      class="titleBlock__image"
      :src="data.background_image"
      alt="title-block-image"
    />
    <div class="titleBlock__content">
      <h1>{{ data.title }}</h1>
      <h3>{{ data.description }}</h3>
    </div>
    <div class="titleBlock__gradient"></div>
  </div>
</template>
<script>
export default {
  props: ["data", "size"],
};
</script>
<style lang="scss">


.home-TitleBlock {
  position: relative;

  &__big {
    height: $bigHeight;
    .mask {
      height: $bigHeight;
    }
    .titleBlock {
      &__image {
        height: $bigHeight;
      }
      &__content {
        h1 {
          font-size: $bigTitleFontS;
        }
        h3 {
          font-size: $bigSubTFontS;
        }
      }
      &__gradient {
        height: $bigBlockGr;
      }
    }
  }
  &__small {
    height: $smallHeight;
    .mask {
      height: $smallHeight;
    }
    .titleBlock {
      &__image {
        height: $smallHeight;
      }
      &__content {
        h1 {
          font-size: $smallTitleFontS;
        }
        h3 {
          font-size: $smallSubTFontS;
        }
      }
      &__gradient {
        height: $smallBlockGr;
      }
    }
  }

  .mask {
    background-color: #000000;
    opacity: 8;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .titleBlock {
    &__image {
      position: absolute;
      opacity: 0.85;
      left: 0;
      top: 0;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    &__content {
      position: relative;
      padding-top: 218px;
      display: flex;
      align-items: center;
      flex-direction: column;
      color: $colorWhite;
      font-family: "Poppins", sans-serif;
      h1 {
        font-weight: 400;
      }
      h3 {
        font-weight: 300;
        letter-spacing: 6.75px;
      }
    }
    &__gradient {
      position: absolute;
      width: 100%;
      bottom: -78px;
      background-image: linear-gradient(
        180deg,
        rgba(252, 245, 207, 0) 0%,
        #fcf4ce 100%
      );
    }
  }
}
</style>
