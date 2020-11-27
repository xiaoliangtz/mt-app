<template>
  <div class="search-panel">
      <el-row class="m-header-searchbar">
          <el-col class="left" :span="3">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
          </el-col>
          <el-col class="center" :span="14">
            <div class="wrapper">
              <el-input 
                placeholder="搜索商家或地址" 
                v-model="searchWord" 
                @focus="focusInput" 
                @blur="blurInput" 
                @input="input"
                />
              <el-button type="primary" icon="el-icon-search"></el-button>
              <dl class="hotPlace" v-if="isHotPlace">
                <dt>热门搜索</dt>
                <dd v-for="( address,index ) in hotPlaceList" :key="address + '_' + index">
                  <router-link :to="{name: 'goods', params: {name: address}}">{{ address }}</router-link>
                </dd>
              </dl>
              <dl class="searchList" v-if="isSearchList">
                <dd
                  v-for="( search, index) in searchList"
                  :key="index"
                >
                  <router-link
                    :to="{name: 'goods',  params: {name: search}}"
                  >{{ search }}</router-link>
                </dd>
              </dl>
          </div>
          <p class="suggest">
            <router-link 
              v-for="( suggest, index) in suggestList"
              :key="suggest + '~' + index"  
              :to="{name: 'goods', params: {name: suggest}}"  
            >{{ suggest }}</router-link>
          </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    data () {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: ['北京', '上海', '广州'],
            searchList: [],
            suggestList: [],
        }
    },
    created () {
      api.searchHotWords().then(res => {
        this.searchList = res.data.data;
        this.suggestList = res.data.data;
      })
    },
    computed: {
        isHotPlace () {
            return this.isFocus && !this.searchWord;
        },
        isSearchList () {
          return this.isFocus && this.searchWord;
        }
    },
    methods: {
        focusInput () {
            this.isFocus = true;
        },
        blurInput () {
          setTimeout( () => {
            this.isFocus = false;
          }, 200);
        },
        input () {
          // console.log(this.searchWord)
          let val = this.searchWord;
          api.getSearchList().then(res => {
            this.searchList = res.data.data.list.filter( (item, index) => {
              return item.includes(val);
            })
          })
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>