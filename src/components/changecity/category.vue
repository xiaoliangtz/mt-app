<template>
  <div>
    <div class="category">
      <h3 class="l-attr">按拼音首字母选择：</h3>
      <p class="r-info">
        <a
          :href="'#' + item"
          v-for="item in category"
          :key="item"
          class="letter"
        >{{ item }}</a>
      </p>
    </div>
    <div class="alphabet-city-area">
      <div 
        class="city-area" 
        :id="item.alphabet"
        v-for="item in cityAlphabetList"
        :key="item.alphabet"
      >
        <span class="city-label">{{ item.alphabet }}</span>
        <span class="cities">
          <a 
            href=""
            class="city"
            v-for="city in item.cityList"
            :key="city"
          >{{ city }}</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Array,
      required: true,
    },
    cityAlphabetList: {
      type: Array,
      required: true,
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/categroy.scss';
@import '@/assets/css/changecity/alphabetCityArea.scss';
</style>