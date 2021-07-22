<template>
  <div>
      <n-page-header class="detail__header" title="基础详情页">
          <template #header>
              <n-breadcrumb>
                  <n-breadcrumb-item>详情页</n-breadcrumb-item>
                  <n-breadcrumb-item>基础详情页</n-breadcrumb-item>
              </n-breadcrumb>
          </template>
      </n-page-header>
      <n-card class="detail__content">
          <n-descriptions title = "退款申请" label-placement = "left">
              <n-descriptions-item label = "取款单号">
                  10000000
              </n-descriptions-item>
              <n-descriptions-item label = "状态">
                  已取货
              </n-descriptions-item>
              <n-descriptions-item label = "销售单号">
                  1223213123
              </n-descriptions-item>
              <n-descriptions-item label = "子单号">
                  123123125432
              </n-descriptions-item>
          </n-descriptions>
          <n-divider></n-divider>
          <div>
              <h3>退货商品</h3>
              <n-data-table :columns = "columns" :data = "getDataSource()"/>
          </div>
      </n-card>
  </div>
</template>
<script lang="ts">
import { reactive } from '@vue/reactivity';
import {NPageHeader, NBreadcrumb, NBreadcrumbItem, NCard, 
  NDescriptions, NDescriptionsItem, NDivider, NDataTable} from 'naive-ui'

  const columns = [{
      title : "商品编号",
      key : "goodsNo"
  }, {
      title : "商品名称",
      key : "name",
  }, {
      title : "商品条码", 
      key : "barcode"
  }, {
      title : "单价",
      key : "price"
  }, {
      title : "数量（件）",
      key : "amount"
  }, {
      title : "金额", 
      key : "total"
  }]

interface Data {
  goodsNo : string
  name : string
  barcode : string
  price : number
  amount : number
  total : number
}

export default ({
  components : {
      NPageHeader,
      NBreadcrumb,
      NBreadcrumbItem,
      NCard,
      NDescriptions,
      NDescriptionsItem,
      NDivider,
      NDataTable
  }, setup() {

      const dataSource = reactive<Data[]>([]);

      dataSource.push({
        goodsNo: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: 2,
        amount: 1,
        total: 2,
      })


      const getDataSource = () => {
        for(let i = 0; i < dataSource.length; i++) {
          let price = dataSource[i].price;
          dataSource[i].price = parseFloat(price.toFixed(2));
        }
        return dataSource;
      }

      return {
          dataSource, columns, getDataSource
      }
  }

})
</script>

<style>
  
  .detail__header {
      padding: 12px 24px 16px;
      background: #fff;
  }

  .detail__content {
      margin: 24px 24px 0px;
      width: initial;
  }

</style>