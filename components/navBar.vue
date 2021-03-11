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
  height: 100px;
  position: absolute;
  z-index: 3;
  font-family: "Helvetica Neue";
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.2px;
  line-height: 31px;
  .navLogo {
    margin-left: 40px;
  }
  .navigations-block {
    width: 983px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .selectLang {
      width: 40px;
      height: 32px;
      border: 1px solid #ffffff;
      background-image: none;
      padding: 4px 8px;
      background-color: inherit;
      color: white;
      border-radius: 0px;
      box-shadow: none;
      option {
        color: black;
      }
    }
    .menuItem {
      color: white;
      text-decoration: none;
      box-shadow: none;
      .btn-inherit {
        color: white;
        box-shadow: none;
        font-size: inherit;
      }
    }
  }
}
</style>
