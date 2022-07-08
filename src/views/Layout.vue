<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppHeaderSticky></AppHeaderSticky>

  <div>
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import AppHeaderSticky from "@/components/app-header-sticky.vue";
import { useStore } from "vuex";
export default {
  name: "xtx-layout",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  //获取分裂数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style scoped lang="less"></style>
