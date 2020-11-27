<template>
  <div class="citylist recent-city">
    <h3 class="l-attr">最近访问：</h3>
    <p class="r-info">
      <a 
        href=""
        v-for="recent in recentCityList"
        :key="recent"
        class="city"
      >{{ recent }}</a>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    recentCityList: {
      type: Array,
      reqiured: true,
    }
  }
}
</script>