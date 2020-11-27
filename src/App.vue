<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  name: 'App',
  // mounted () {
  //   api.getSearchList().then(res => {
  //     console.log(res.data.data)
  //       })
  // }
};
// axios.getSearchList().then( res => {
//   console.log(res.data.data);
// } )

</script>
