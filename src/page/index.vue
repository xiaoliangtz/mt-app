<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <m-movie />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <min-su></min-su>
          </el-col>
        </el-row>
    </div>
</template>
<script>
import apiMt from '@/api/apiMT.js';
import MMenu from '@/components/index/Menu.vue';
import MLife from '@/components/index/life.vue';
import Container from '@/components/index/container.vue';
import MMovie from '@/components/index/movie.vue';
import MinSu from '@/components/index/minsu.vue';
export default {
  components: {
      MMenu,
      MLife,
      Container,
      MMovie,
      MinSu,
  },
  data () {
    return {
      movieList: [],
    }
  },
  // mounted () {
  //   // axios.get('../../static/mock/movies.json').then( res => {
  //   //   this.movieList = res.data.data.hot;
  //   //   console.log(this.movieList)
  //   // } ) 
  //   apiMt.getMovies().then( res => {
  //     this.movieList = res.data.data.hot;
  //     console.log(res.data.data);
  //   } )
  // }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>