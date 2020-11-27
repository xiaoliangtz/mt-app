<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active': item.active}"
      >{{ item.name }}</li>
    </ul>
    <el-row>
      <item 
        v-for="( item, index ) in productList"
        :key="index"
        :data="item"
      />
    </el-row>
  </div>
</template>
<script>
import Item from '@/components/products/item.vue';
import apiMT from '@/api/apiMT.js';
import api from '@/api/index.js';
export default {
  components: {
    Item,
  },
  data () {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [],
    }
  },
  created () {
    // apiMT.getProductList().then(res => {
    //   console.log(res.data)
    //   this.productList = res.data;
    // })
    api.getProductsList().then(res => {
      console.log(res.data.data)
      this.productList = res.data.data.concat(res.data.data).concat(res.data.data);
    })
  }
}
</script>