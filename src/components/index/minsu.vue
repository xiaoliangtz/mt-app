<template>
  <div class="minsu">
    <div class="index-nav-container">
      <dl>
        <dt>推荐民宿</dt>
        <dd
          v-for="city in cityList"
          :key="city.cityId"
          :data-type="city.cityName"
          @mouseover="minsuOver"
          :class="{active: isActive === city.cityName}"
        >{{ city.cityName }}</dd>
      </dl>
    </div>
    <div class="minsu-ls-view clearfix">
      <div class="products">
        <div 
          class="minsu-item"
          v-for="product in productList"
          :key="product.productId"
        >
          <router-link to="/">
            <div class="product-card-header">
              <img :src="product.coverImage" alt="" class="product-img">
              <!-- <img src="https://bj.meituan.com/null@200w_200h_1e_1c" alt="" class="head-img"> -->
            </div>
            <div class="product-info">
              <p class="product-title">{{ product.title }}</p>
              <p class="sub-title">
                <span>整套{{ product.layoutRoom }}居室</span>
                <span>可住{{ product.maxGuestNumber }}人 | </span>
                <span>{{ product.locationArea }}</span>
              </p>
              <p class="price-number price numfont">
                <span class="price-icon">￥</span>
                {{ product.price }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import meituanApi from '@/api/apiMT.js';
export default {
  data () {
    return {
      cityList: [],
      productList: [],
      isActive: '天津',
    }
  },
  methods: {
    minsuOver (e) {
      let type = e.target.getAttribute('data-type');
      if(type === '天津') {
        meituanApi.getMinsuTJ().then( res => {
          this.productList = res.data.productList;
          this.isActive = '天津';
        } )
      }else if (type === '济南') {
        meituanApi.getMinsuJN().then( res => {
          this.productList = res.data.productList;
          this.isActive = '济南'; 
        } )
      }else if (type === '大连') {
        meituanApi.getMinsuDL().then( res => {
          this.productList = res.data.productList;
          this.isActive = '大连';
        } )
      }else if (type === '太原') {
        meituanApi.getMinsuTY().then( res => {
          this.productList = res.data.productList;
          this.isActive = '太原';
        } )
      }else if (type === '石家庄') {
        meituanApi.getMinsuSJZ().then( res => {
          this.productList = res.data.productList;
          this.isActive = '石家庄';
        } )
      }else if (type === '秦皇岛') {
        meituanApi.getMinsuQHD().then( res => {
          this.productList = res.data.productList;
          this.isActive = '秦皇岛';
        } )
      }else if (type === '呼和浩特') {
        meituanApi.getMinsuHHHT().then( res => {
          this.productList = res.data.productList;
          this.isActive = '呼和浩特';
        } )
      }else if (type === '潍坊') {
        this.isActive = '潍坊';
      }else if (type === '唐山') {
        this.isActive = '唐山';
      }else if (type === '泰安 ') {
        this.isActive = '泰安';
      }
    }
  },
  mounted () {
    meituanApi.getMinsuCitys().then( res => {
      this.cityList = res.data.cityList;
    } );
    meituanApi.getMinsuTJ().then( res => {
      this.productList = res.data.productList;
    } )
  }
}
</script>
<style lang="scss">
@import '@/assets/css/index/minsu.scss';
</style>