import { createStore } from 'vuex'

export default createStore({
  // state是用来定义数据，这里可以设置数据的默认数据，但是为了数据的安全性，通常不直接修改state数据，而是通过mutations修改，修改方法下面会介绍
  state: {
    searchValue: ''
  },
  // getters用来处理数据，对state中的数据进行处理，得到自己想要的效果，当需要在多处组件使用这种数据时，gettters是你最好的选择
  getters: {
    getSearchValue: function(state){
      return state.searchValue
    }
  },
  // mutations通常为修改state数据而使用，这用就可以避免直接修改state的数据
  mutations: {
    setSearchValue: function(state, value){
      state.searchValue = value
    }
  },
  // actions当你的数据是需要发送请求获取时，这是非常完美的选择
  actions: {
    // getSearchValue: function(state){
    //   return state.searchValue
    // }
  },
  modules: {
  }
})
