export default {
  getHomePage(context) {
    return this.$axios
      .$get(`${this.$axios.defaults.baseURL}pages/9`)
      .then((res) => {
        context.commit('SET_HOME_PAGE', res)
      })
  },



  async nuxtServerInit(vuexContext) {
    await vuexContext.dispatch('getHomePage', { root: true })
  }
}
