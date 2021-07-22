<template>
  <n-layout has-sider class="page-layout">
    <n-layout-sider content-style="padding: 24px;" class="page-layout__sider">
      <div class="page-layout__title">Naive mall</div>
      <n-menu
        @update:value="onMenuValueUpdate"
        :options="menuOptions"
        inverted
      ></n-menu>
    </n-layout-sider>
    <n-layout
      class="page-layout__main"
      content-style="display: flex;flex-direction: column"
    >
      <n-layout-header class="page-layout__header"></n-layout-header>
      <n-layout-content
        content-style="padding: 24px"
        class="page-layout__content"
      >
        <router-view />
      </n-layout-content>
      <n-layout-footer class="page-layout__footer"></n-layout-footer>
    </n-layout>
  </n-layout>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
} from "naive-ui";
import router from "../router";
// import setup from "naive-ui/lib/radio/src/use-radio";

export default {
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NMenu,
  },

  setup() {
    const routeMap = {
      goods: "/list",
      my: "/detail",
    };
    const menuOptions = [
      {
        key: "goods",
        label: "商品",
      },
      {
        key: "my",
        label: "个人中心",
      },
    ];

    const router = useRouter();

    const onMenuValueUpdate = (key: keyof typeof routeMap) => {
      console.log(key);
      router.push(routeMap[key]);
    };

    return {
      menuOptions,
      onMenuValueUpdate,
      routeMap,
    };
  },
};
</script>
<style>
/* .n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
} */

.page-layout {
  height: 100%;
}

.page-layout__sider {
  color: #fff;
  background: #001529;
}
.page-layout__title {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}

.page-layout__header {
  height: 48px;
  background: #fff;
}

.page-layout__main {
  background: #f0f2f5
}
.page-layout__content,
.page-layout__footer {
  background: transparent;
}



</style>