<template>
  <!-- Panel
        面板 -->
  <div class="weui-panel weui-panel_access">
    <div v-for="(n, index) in newComputed" :key="index" class="weui-panel__bd">
      <a
        aria-labelledby="js_p1m1_bd"
        href="javascript:void(0)"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div aria-hidden="true" class="weui-media-box__hd">
          <img
            class="weui-media-box__thumb"
            :src="n.author.avatar_url"
            alt=""
          />
        </div>
        <div aria-hidden="true" id="js_p1m1_bd" class="weui-media-box__bd">
          <strong class="weui-media-box__title" v-text="n.title"></strong>
          <p class="weui-media-box__desc" v-text="n.loginname"></p>
        </div>
      </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
      <a
        href="javascript:void(0)"
        class="weui-cell weui-cell_active weui-cell_access weui-cell_link"
      >
        <span class="weui-cell__bd">查看更多</span>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import store from "@/store";
import axios from "axios";
import useSearch from "@/store/useSearch";
export default {
  setup() {
    const { getSearchValue, setSearchValue } = useSearch();
    const state = reactive({
      // 页数
      page: 1,
      // 列表数据
      news: [],
      // 通过搜索框筛选
      newComputed: computed(() => {
        // 判断是否输入框是否输入了筛选条件，如果没有返回原始的 news 数组
        if (getSearchValue()) {
          return state.news.filter((item) => {
            if (item.title.indexOf(getSearchValue()) >= 0) {
              return item;
            }
          });
        } else {
          return state.news;
        }
      }),
    });
    // 发送 ajax 请求获取列表数据
    const loadMore = async () => {
      let data = await axios.get("https://cnodejs.org/api/v1/topics", {
        params: {
          // 每一页主题数量
          limit: 15,
          // 页数
          page: state.page,
        },
      });
      state.page += 1;
      state.news = [...state.news, ...data.data.data];
    };
    onMounted(() => {
      // 首屏加载时出发请求
      loadMore();
    });
    return {
      ...toRefs(state),
      loadMore,
    };
  },
};
</script>

<style></style>
