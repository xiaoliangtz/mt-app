<template>
  <div>
      <span class="name">按省份选择：</span>
      <m-select 
        :list="provinceList"
        title="省份"
        :value="province"
        :showWrapperActive="provinceActive"
        className="province"
        @change_active="changeProvinceActive"
        @change="changeProvince"
      />
      <m-select 
        :list="cityList"
        title="城市"
        :value="city"
        :showWrapperActive="cityActive"
        className="city"
        @change_active="changeCityActive"
        @change="changeCity"
        :disabled="cityDisabled"
      />
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        placeholder="请输入关键字"
        filterable
        remote
        reserve-keyword
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in searchList"
          :key="item"
          :value="item"
          :label="item"
        >
        </el-option>
      </el-select>
  </div>
    
</template>
<script>
import meituanApi from '@/api/apiMT.js';
import MSelect from './select.vue';
export default {
  data () {
    return {
      provinceList: [],
      cityList: [],
      province: '省份',
      city: '城市',
      provinceActive: false,
      cityActive: false,
      isShow: true,
      cityDisabled: true, 
      searchWord: '',
      loading: false,
      searchList: ['北京', '上海', '广州', '深圳', '天津']
    }
  },
  components: {
    MSelect,
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag;
      if(flag) this.cityActive = false;
    },
    changeCityActive (flag) {
      this.cityActive = flag;
      if(flag) this.provinceActive = false;
    },
    changeProvince (item) {
      this.province = item.provinceName;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
      // this.provinceActive = false;
      // console.log(this.provinceActive)
    },
    changeCity (item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({ name: 'index' }); 
    },
    remoteMethod (value) {
      console.log(value);
    }
  },
  created () {
    // console.log(this.provinceList);
    meituanApi.getProvinceCityInfo().then( res => {
      // console.log(res.data);
      this.provinceList = res.data;
    })
    }
}
// <div class="province-choose">
//           <span>{{ province }}</span>
//           <i class="el-icon-caret-bottom" />
//           <div 
//             class="mt-provinces"
//             :class="{isShow: isShow}"
//           >
//             <p>省份</p>
//             <div 
//               class="provinces-wrapper clearfix"
//             >
//               <div 
//                 class="province-col"
//                 v-for="i in provinceLength"
//                 :key="i"
//               >
//                 <template v-if="i == 1">
//                   <span 
//                     class="mt-province"
//                     v-for="province in leftProvinceList"
//                     :key="province.provinceCode"
//                   >{{ province.provinceName }}</span>
//                 </template>
//                 <template v-else-if="i == 2">
//                   <span 
//                     class="mt-province"
//                     v-for="province in centerProvinceList"
//                     :key="province.provinceCode"
//                   >{{ province.provinceName }}</span>
//                 </template>
//                 <template v-else-if="i == 3">
//                   <span 
//                     class="mt-province"
//                     v-for="province in rightProvinceList"
//                     :key="province.provinceCode"
//                   >{{ province.provinceName }}</span>
//                 </template>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="city-choose">
//           <span>{{ city }}</span>
//           <i class="el-icon-caret-bottom" />
//         </div>
</script>
<style lang="scss">
@import '@/assets/css/changecity/iselect.scss';
</style>