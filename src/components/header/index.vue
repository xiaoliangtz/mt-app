<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import SearchBar from './SearchBar';
import TopBar from './TopBar';
export default {
    components: {
        SearchBar,
        TopBar,
    }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/topbar.scss';
</style>