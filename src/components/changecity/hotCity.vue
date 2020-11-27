<template>
  <div class="citylist">
    <h3 class="l-attr">热门城市：</h3>
    <p class="r-info">
      <a 
        href=""
        v-for="hot in hotCityList"
        :key="hot"
        class="city"
        >{{ hot }}</a>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    hotCityList: {
      type: Array,
      reqiured: true,
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/hotCity.scss';
</style>