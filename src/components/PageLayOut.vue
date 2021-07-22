<template>
  <n-layout has-sider class="page-layout">
    <n-layout-sider content-style="padding: 24px;" class="page-layout__sider">
      <div class="page-layout__title">Naive mall</div>
      <n-menu
        @update:value="onMenuValueUpdate"
        :options="menuOptions"
        inverted
        :value = "currentMenuKey"
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
import { useRoute, useRouter } from "vue-router";
import { watch, ref, h, Component } from 'vue'
import {InboxOutlined, UserOutlined} from '@vicons/antd'
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NIcon,
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
      personal : "/my-info",
    };

    const renderIcon =  (icon: Component) => {
      return () => h(NIcon, null, { default: () => h(icon) })
    }
    const menuOptions = [
      {
        key: "goods",
        label: "商品",
        icon : renderIcon(InboxOutlined)
      },
      {
        key: "my",
        label: "个人中心",
        icon : renderIcon(UserOutlined),
        children : [{
          key : "personal",
          label : "个人信息"
        }]
      },
    ];

    const router = useRouter();
    const route = useRoute();

    const currentMenuKey = ref<string>('goods');
    
    watch(()=> route.path, () => {
        Object.keys(routeMap).some((k: unknown) => {
            const useKey = k as keyof typeof routeMap;
            const path = routeMap[useKey];
            const flag = (path === route.path);
            if(flag) {
                currentMenuKey.value = useKey;
            }
            return flag;
        })
    })

    const onMenuValueUpdate = (key: keyof typeof routeMap) => {
      router.push(routeMap[key]);
    };

    return {
      menuOptions,
      onMenuValueUpdate,
      routeMap,
      currentMenuKey
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