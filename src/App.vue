<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <svg-icon></svg-icon>
    </div>
</template>

<script>
    import SvgIcon from 'components/common/svg'

    export default {
        components: {
            SvgIcon
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>