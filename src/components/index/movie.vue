<template>
  <div class="maoyan-container">
    <div class="index-nav-container">
      <dl>
        <dt>猫眼电影</dt>
        <dd 
          v-for="mao in maoyanList"
          :key="mao"
          :data-type="mao"
          @mouseover="maoOver"
          :class="{active: isActive === mao}"
        >{{ mao }}</dd>
        <dd class="all">全部<i class="el-icon-arrow-right"></i></dd>
      </dl>
    </div>
    <div class="scenes-body">
      <div class="hot-container">
        <div>
          <div class="slider">
            <div class="slider-content">
              <div 
                class="slider-item-film" 
                v-for="movie in movieList"
                :key="movie.id"
              >
                <router-link to="/">
                  <img :src="movie.img" alt="" class="film-img">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png" alt="" class="film-mark">
                  <div class="film-info">
                    <p class="film-score">
                      <b>
                        {{ movie.sc === 0 ? '' : '观众评' }}
                        <span>{{ movie.sc === 0 ? movie.wish : movie.sc }}</span>
                        {{ movie.sc === 0 ? '人想看' : '' }}
                      </b>
                    </p>
                    <p class="film-name">{{ movie.nm }}</p>
                    <span class="buy-ticket">{{ movie.sc === 0 ? '预售' : '购票' }}</span>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="btn btn-prev" @click="moviePrev">
                <i class="iconfont">&#xe603;</i>
              </div>
              <div class="btn btn-next" @click="movieNext">
                <i class="iconfont">&#xe635;</i>
              </div>
          </div>
        </div>
      </div>
      <div class="comming-container"></div>
    </div>
  </div>
</template>
<script>
import meituanApi from '@/api/apiMT.js'
export default {
  data () {
    return {
      isActive: '正在上映',
      maoyanList: ['正在上映', '即将上映'],
      movieList: [],
    }
  },
  methods: {
    moviePrev (e) {
      const sliderContent = document.getElementsByClassName('slider-content')[0];
      sliderContent.style.left = 0;
      // console.log(sliderContent)
    },
    movieNext (e) {
      const sliderContent = document.getElementsByClassName('slider-content')[0];
      sliderContent.style.transition = 'left 0.5s';
      sliderContent.style.left = -1158 + 'px';
    },
    maoOver (e) {
      this.isActive = e.target.getAttribute('data-type');
      if(this.isActive === '正在上映') {
        meituanApi.getHotMovies().then( res => {
          this.movieList = res.data.data.hot;
        } )
      }else {
        meituanApi.getComingMovies().then( res => {
          this.movieList = res.data.data.coming;
          console.log(res)
        } )
      }
    },
  },
  computed: {
    
  },
  mounted () {
    meituanApi.getHotMovies().then( res => {
      this.movieList = res.data.data.hot;
    } )
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/index/movie.scss';
  @font-face {
    font-family: 'iconfont';  /* project id 2129596 */
    src: url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.eot');
    src: url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.woff') format('woff'),
    url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2129596_zv6rk0qwbgb.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>