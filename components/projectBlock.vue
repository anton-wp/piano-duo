<template>
  <div class="container">
    <div class="row mb-72">
      <div class="col-lg-6">
        <span class="projectBlock__topText">{{ data.top_text }}</span>
        <h2 class="projectBlock__title">{{ data.title }}</h2>
      </div>
      <div class="col-lg-6">
        <p class="projectBlock__description">{{ data.description }}</p>
        <a class="projectBlock__button" :href="data.button_link">{{
          data.button
        }}</a>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in data.projects"
        :key="index"
        class="col-lg-4 px-2"
      >
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.mb-72 {
  margin-bottom: 72px;
}
.projectBlock {
  &__topText {
    color: #960000;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 3px;
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
    color: #960000;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    text-align: left;
    text-decoration: underline;
    text-transform: uppercase;
  }
}
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
