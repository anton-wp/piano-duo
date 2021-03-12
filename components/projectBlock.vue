<template>
  <div class="container">
    <div class="row mb-72" :class="[{ 'flex-row-reverse': reverse }]">
      <div class="col-lg-6 px-2">
        <span class="projectBlock__topText">{{ data.top_text }}</span>
        <h2 class="projectBlock__title">{{ data.title }}</h2>
      </div>
      <div class="col-lg-6 px-2">
        <p class="projectBlock__description mb-4">{{ data.description }}</p>
        <a class="projectBlock__button" :href="data.button_link">{{
          data.button
        }}</a>
      </div>
    </div>
    <div class="row">
      <Card v-for="(item, index) in data.projects" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "~/components/card";
export default {
  components: {
    Card,
  },
  props: ["data", "reverse"],
};
</script>

<style lang="scss">

.mb-72 {
  margin-bottom: 72px;
}
.projectBlock {
  &__topText {
    color: $colorRed;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 3px;
    display: block;
    margin-bottom: 8px;
  }
  &__title {
    color: #000000;
    font-family: "Optima";
    font-size: 43px;
    font-weight: 400;
    line-height: 55px;
    text-align: left;
    text-transform: uppercase;
  }
  &__description {
    color: #101010;
    font-family: "Helvetica Neue";
    font-size: 17px;
    font-weight: 300;
    line-height: 31px;
    text-align: left;
  }
  &__button {
    color: $colorRed;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    text-align: left;
    text-decoration: underline;
    text-transform: uppercase;
  }
}
</style>
