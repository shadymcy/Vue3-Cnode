<template>
  <!-- https://github.com/Tencent/weui/blob/master/src/example/searchbar/searchbar.html -->

  <div
    :class="['weui-search-bar', { 'weui-search-bar_focusing': isFocus }]"
    id="searchBar"
  >
    <form
      id="searchForm"
      role="combobox"
      aria-haspopup="true"
      aria-expanded="false"
      aria-owns="searchResult"
      class="weui-search-bar__form"
    >
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <!-- 1、给dom节点记上ref属性，可以理解为给dom节点起了个名字。
                         2、加上ref之后，在$refs属性中多了这个元素的引用。
                         3、通过vue实例的$refs属性拿到这个dom元素。 -->
        <input
          v-model="searchValue"
          type="search"
          ref="inputElement"
          aria-controls="searchResult"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        />
        <a
          @click="toggle"
          href="javascript:"
          role="button"
          title="清除"
          class="weui-icon-clear"
          id="searchClear"
        ></a>
      </div>
      <label
        @click="toggle"
        for="searchInput"
        class="weui-search-bar__label"
        id="searchText"
      >
        <i class="weui-icon-search"></i>
        <span aria-hidden="true">搜索</span>
      </label>
    </form>
    <a
      @click="toggle"
      href="javascript:"
      role="button"
      class="weui-search-bar__cancel-btn"
      id="searchCancel"
      >取消</a
    >
  </div>
  <div>
    <p v-text="seachValue"></p>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import store from "@/store";
import useSearch from "@/store/useSearch";
export default {
  setup() {
    const state = reactive({
      searchValue: "",
      isFocus: false,
      inputElement: null,
    });
    const toggle = () => {
      state.inputElement.focus();
      state.isFocus = !state.isFocus;
    };
    const { setSearchValue } = useSearch();
    watch(
      () => state.searchValue,
      (newVal, oldVal) => {
        setSearchValue(newVal);
        // console.log(state.searchValue);
      }
    );
    return {
      ...toRefs(state),
      toggle,
    };
  },
};
</script>

<style></style>
