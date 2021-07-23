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
import { h, defineComponent  } from 'vue'
import {NPageHeader, NBreadcrumb, NBreadcrumbItem, NCard, 
  NDescriptions, NDescriptionsItem, NDivider, NDataTable, NTag, NButton } from 'naive-ui'


    /**
    * 根据商品状态组合相应的按钮框
    */
    const getTags = (row : any) => {
        let tagKey = row.state;
        if(tagKey) {
            return h(
                NTag,
                {
                style: {
                    marginRight: '6px'
                },
                type: 'info'
                },
                {
                default: () => "已上架"
                }
            )
        };
        return h(
                NTag,
                {
                    style: {
                        marginRight: '6px'
                }
                },
                {
                    default: () => "未上架"
                }
        )
    }

    /**
     * 对一行数据进行操作, 可用枚举
     */
    const operating = (key : string, goodsNo : string) => {

    }   

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
      title : "上架状态",
      key : "state",
      render (row : any) {
          return getTags(row);
      }
  }, {
      title : "金额", 
      key : "total"
  }, {
      title : "操作",
      key : "action",
      render (row : any) {
        const tags = row.action.map((key : any) => {
            return h(
                NButton,
                {
                    size: 'small',
                    style: {
                        marginRight: '6px'
                    },
                    onClick: () => operating(key, row.goodsNo)
                },
                { default: () => key}
            )
        })
        return tags;
      }
  }]

interface Data {
  goodsNo : string
  name : string
  barcode : string
  price : string
  amount : number
  state : boolean
  total : string
  action : any
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
      NDataTable,
      NTag,
      NButton,
  }, setup() {

      const dataSource = reactive<Data[]>([]);

      dataSource.push({
        goodsNo: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2',
        amount: 3,
        state : true,
        total: '2',
        action : ["下架", "编辑", "详情"]
      })

      /**
       * <n-button type="info" ghost>Info</n-button>
       * 获取数据源
       * 单价和金额保留两位小数
       * 金额由单价和数量决定
       */
      const getDataSource = () => {
        for(let i = 0; i < dataSource.length; i++) {
          let currentData = dataSource[i];
          let price = Number(currentData.price);
          let total = price * currentData.amount;
          dataSource[i].price = price.toFixed(2);
          dataSource[i].total = total.toFixed(2);
        }
        return dataSource;
      }

      return {
          dataSource, columns, getDataSource, getTags, operating
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