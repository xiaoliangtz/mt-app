<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city :hotCityList="hotCityList"/>
    </el-row>
    <el-row>
      <recent-city :recentCityList="recentCityList"/>
    </el-row>
    <el-row>
      <category 
        :category="category" 
        :cityAlphabetList="cityAlphabetList"
      /> 
    </el-row>
  </div>
</template>
<script>
import Province from '@/components/changecity/province.vue';
import HotCity from '@/components/changecity/hotCity.vue';
import RecentCity from '@/components/changecity/recentCity.vue';
import Category from '@/components/changecity/category.vue';
// import AlphabetCityArea from '@/components/changecity/alphabetCityArea.vue';
import apiMeituan from '@/api/apiMT.js';
export default {
  data () {
    return {
      hotCityList: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
      recentCityList: ['北京', '天津', '上海'],
      category: 'abcdefghjklmnpqrstwxyz'.toUpperCase().split(''),
      provinceCityInfoList: [],
      cityAlphabetList: []
    }  
  },
  created () {
    apiMeituan.getProvinceCityInfo().then( res => {
      const data = res.data;
      this.category.forEach( item => {
        this.cityAlphabetList.push({
          alphabet: item,
          cityList: []
        })
      } )
      data.forEach( item => {
        item.cityInfoList.forEach( city => {
          this.cityAlphabetList.forEach( alphabet => {
            if(alphabet.alphabet === city.firstChar) {
              alphabet.cityList.push(city.name);
            }
          } )
        } )
      } )
    } )
    // console.log(this.cityList)
  },
  // methods: {
  //   cityAlphabet () {
  //     // console.log(this.$event);
  //   },
  // },
  components: {
    Province,
    HotCity,
    RecentCity,
    Category,
    // AlphabetCityArea,
  }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/index.scss';
</style>