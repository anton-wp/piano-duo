<template>
  <div class="container-fluid navbar-custom">
    <div class="row align-items-center h-100">
      <nuxt-link class="navLogo" to="/"
        ><img src="~/static/image/logo.png" alt="logo"
      /></nuxt-link>
      <div class="d-flex col-lg justify-content-center">
        <div class="navigations-block">
          <template v-for="(item, index) in navBar">
            <nuxt-link
              v-if="!item.subItem"
              class="menuItem"
              :key="index"
              :to="item.url"
            >
              {{ item.title }}
            </nuxt-link>
            <b-dropdown
              v-else
              :key="index"
              class="menuItem"
              id="dropdown-left"
              variant="inherit"
              :text="item.title"
            >
              <b-dropdown-item
                v-for="(subItem, key) in item.subItem"
                :key="key"
                href="#"
                >{{ subItem.title }}</b-dropdown-item
              >
            </b-dropdown>
          </template>

          <b-form-select
            class="selectLang"
            v-model="selectLang"
            :options="lang"
          ></b-form-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navBar: [
      {
        title: "Mitwirkende",
        url: "/",
        subItem: [
          {
            title: "test",
            url: "/",
          },
        ],
      },
      {
        title: "Auf Reisen",
        url: "/",
      },
      {
        title: "Kalender",
        url: "/",
      },
      {
        title: "Aufnahmen",
        url: "/",
      },
      {
        title: "Stimmen",
        url: "/",
      },
      {
        title: "Aktuell",
        url: "/",
      },
      {
        title: "Kontakt",
        url: "/",
      },
    ],
    selectLang: "DE",
    lang: ["DE", "EN", "RU"],
  }),
};
</script>
<style lang="scss">
.navbar-custom {
  position: absolute;
  z-index: 3;
  font-family: "Helvetica Neue";
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.2px;
  line-height: 31px;
  .navLogo {
    margin-left: 40px;
    margin-top: 9px;
  }
  .navigations-block {
    width: 983px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .selectLang {
      border: 1px solid $colorWhite;
      background-image: none;
      padding: 4px 8px;
      width: auto;
      height: auto;
      background-color: inherit;
      color: $colorWhite;
      border-radius: 0px;
      box-shadow: none;
      line-height: 1.3;
      option {
        color: black;
        padding: 5px;
      }
    }
    .menuItem {
      color: $colorWhite;
      text-decoration: none;
      box-shadow: none;
      .btn-inherit {
        color: $colorWhite;
        box-shadow: none;
        font-size: inherit;
      }
    }
  }
}
</style>
