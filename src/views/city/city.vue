<template>
    <div class="city-container">
        <form class="city-form" @submit.prevent>
            <div class="input-wrap">
                <input type="search" name="city" placeholder="请输入学校、商务楼、地址" class="city-input input-style" required v-model="inputVaule">
            </div>
            <div class="input-wrap">
                <input type="submit" name="submit" class="city-submit input-style" @click="postpois" value="提交">
            </div>
        </form>
        <header v-if="historyTitle" class="pois-search-history">搜索历史</header>
    </div>
</template>

<script>
    import {searchplace} from '../../service/getData'

    export default {
        data() {
            return {
                inputVaule: '',
                historyTitle: true
            }
        },
        computed: {
            
        },
        mounted() {
            this.cityid = this.$route.params.cityid
        },
        methods: {
            postpois() {
                if (this.inputVaule) {
                    searchplace(this.cityid, this.inputVaule).then((res) => {
                        console.log(res)
                    })
                }
            }
        },
        components: {
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/style/mixin"

    .city-container
        padding-top 2.35rem
    .city-form
        padding-top .4rem
        background-color #fff
        border-top 1px solid $bc
        border-bottom 1px solid $bc
        .input-wrap
            margin 0 auto
            width 90%
            text-align center
            .input-style
                margin-bottom .4rem
                width 100%
                height 1.4rem
                border-radius .1rem
            .city-input
                padding 0 .3rem
                color #333
                font-size .65rem
                border 1px solid $bc
            .city-submit
                color #fff
                font-size .65rem
                background-color $blue
    .pois-search-history
        padding .3rem 0 .3rem .5rem
        font-size .52rem
        line-height .8rem
        border-top 1px solid $bc
        border-bottom 1px solid $bc
</style>