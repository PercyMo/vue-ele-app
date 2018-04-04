<template>
    <div>
        <div class="city-nav">
            <div class="city-tip">
                <span class="text-l">当前定位城市：</span>
                <span class="text-r">定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + guessCityid" class="guess-city">
                <span class="city-text">{{guessCity}}</span>
                <svg class="arrow-right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>
        </div>
        <div class="hot-city-container">
            <h4 class="city-title">热门城市</h4>
            <ul class="city-list clear">
                <router-link v-for="item in hotcity" tag="li" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </div>
        <div class="group-city-container">
            <ul class="letter-classify">
                <li class="letter-classify-item" v-for="(item, index) in sortgroupcity" :key="item.title">
                    <h4 class="city-title">{{item.title}}
                        <span v-if="index === 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity-name-container city-list clear">
                        <router-link v-for="city in item.list" class="ellipsis" tag="li" :to="'/city/' + city.id" :key="city.id">
                            {{city.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {cityGuess, hotcity, groupcity} from 'service/getData'

    export default {
        data() {
            return {
                guessCity: '',      // 当前城市
                guessCityid: null,  // 当前城市的id
                hotcity: [],        // 热门城市列表
                groupcity: {}       // 所有城市列表
            }
        },
        computed: {
            // 将获取的数据按照A-Z字母开头排序
            sortgroupcity() { 
                let groupcity = this.groupcity,
                    ret = []
                
                for (let key in groupcity) {
                    ret.push({
                        title: key,
                        list: groupcity[key]
                    })
                }
                ret.sort((a, b) => {
                    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                })
                return ret
            }
        },
        mounted() {
            // 获取当前城市
            cityGuess().then((res) => {
                this.guessCity = res.name
                this.guessCityid = res.id
            })

            // 获取热门城市
            hotcity().then((res) => {
                this.hotcity = res
            })

            // 获取所有城市
            groupcity().then((res) => {
                this.groupcity = res
            })
        },
        components: {
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~assets/style/mixin"

    .city-nav
        margin-bottom .4rem
        padding-top 2.35rem
        background-color #fff
        border-bottom 1px solid $bc
        .city-tip
            padding 0 .45rem
            display flex
            line-height 1.45rem
            justify-content space-between
            .text-l
                color #666
                font-size .55rem
            .text-r
                color #9f9f9f
                font-size .475rem
                font-weight 900
        .guess-city
            padding 0 .45rem
            height 1.8rem
            display flex
            align-items center
            font-size .75rem
            line-height 1.8rem
            justify-content space-between
            border-top 1px solid $bc
            border-bottom 1px solid $bc
            .city-text
                color $blue
            .arrow-right
                width .6rem
                height .6rem
                fill #999
    .city-title
        height 1.45rem
        color #666
        font-size .55rem
        font-family 'Helvetica Neue'
        font-weight 400
        line-height 1.45rem
        text-indent .45rem
        border-top 2px solid $bc
        border-bottom 1px solid $bc
        span
            color #999
            font-size .475rem
    .hot-city-container
        margin-bottom .4rem
        background-color #fff
    .city-list
        li
            width 25%
            height 1.75rem
            line-height 1.75rem
            float left
            font-size .6rem
            color $blue
            text-align center
            border-bottom .025rem solid $bc
            border-right .025rem solid $bc
            &:nth-child(4n)
                border-right none
    .letter-classify-item
        margin-bottom .4rem
        background-color #fff
        border-bottom 1px solid $bc
        .groupcity-name-container
            li
                color #666
</style>