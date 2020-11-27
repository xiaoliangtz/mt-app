<template>
  <div class="alphabet-city-area">
    <div 
      class="city-area" 
      id="city-"
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
</template>
<script>
export default {
  props: {
    cityAlphabetList: {
      type: Array,
      required: true,
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/alphabetCityArea.scss';
</style>