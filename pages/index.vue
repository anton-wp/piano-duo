<template>
  <div>
    <HomeTitleBlock :data="homePage.acf.section_header" :size="'big'" />
    <div class="justify-content-center content-block">
      <ProjectBlock :data="homePage.acf.section_projects" />
    </div>
  </div>
</template>

<script>
import HomeTitleBlock from "~/components/homeTitleBlock";
import ProjectBlock from "~/components/projectBlock";
import { mapState } from "vuex";
export default {
  components: {
    HomeTitleBlock,
    ProjectBlock,
  },
  computed: {
    ...mapState(["homePage"]),
  },
};
</script>

<style>
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
