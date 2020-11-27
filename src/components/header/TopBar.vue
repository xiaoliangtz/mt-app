<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10"><geo-bar /></el-col>
        <el-col :span="14"><nav-bar /></el-col>
    </el-row>
</template>
<script>
import GeoBar from './geo.vue';
import NavBar from './nav.vue';
export default {
    components: {
        GeoBar,
        NavBar,
    }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/topbar.scss';
</style>
