<template>
  <div class="col-lg-4 px-2">
    <img
      v-if="item.image === 205"
      class="project-image"
      src="~/static/image/205.jpg"
      alt="project"
    />
    <img
      v-if="item.image === 199"
      class="project-image"
      src="~/static/image/199.jpg"
      alt="project"
    />
    <img
      v-if="item.image === 201"
      class="project-image"
      src="~/static/image/201.jpg"
      alt="project"
    />
    <h5 class="project-title">{{ item.title }}</h5>
    <p class="project-description">{{ item.description }}</p>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss">
.project {
  &-title {
    color: #000000;
    font-family: "Optima";
    font-size: 25px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 21px;
    margin-top: 23px;
  }
  &-description {
    color: #101010;
    font-family: "Helvetica Neue";
    font-size: 17px;
    font-weight: 300;
    line-height: 31px;
    text-align: left;
  }
  &-image {
    width: 100%;
  }
}
</style>
