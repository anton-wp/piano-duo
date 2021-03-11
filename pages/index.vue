<template>
  <div>
    <HomeTitleBlock :data="homeData.acf.section_header" />
    <div class="justify-content-center content-block">
      <ProjectBlock :data="homeData.acf.section_projects" />
    </div>
  </div>
</template>

<script>
import HomeTitleBlock from "~/components/homeTitleBlock";
import ProjectBlock from "~/components/projectBlock";
export default {
  components: {
    HomeTitleBlock,
    ProjectBlock,
  },
  data: () => ({
    homeData: null,
  }),
  async asyncData({ $axios }) {
    const homeData = await $axios.$get(
      "https://admin.piano-duo.webhikers.dev/wp-json/wp/v2/pages/9"
    );
    return { homeData };
  },
};
</script>

<style>
@font-face {
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("~assets/fonts/HelveticaNeueCyr-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Optima";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~assets/fonts/Optima.ttf") format("truetype");
}
.content-block {
  height: 100%;
  padding-top: 92px;
  background-image: linear-gradient(
    181deg,
    #ffffff 0%,
    rgba(255, 247, 208, 0.9) 0%,
    rgba(255, 225, 74, 0.6) 69%,
    rgba(255, 225, 74, 0.84) 100%
  );
}
</style>
