import require from '../config/require'

// 获取首页默认地址
export const cityGuess = () => {
    return require({
        url: '/v1/cities',
        data: {
            type: 'guess'
        }
    })
}

// 获取首页热门城市
export const hotcity = () => {
    return require({
        url: '/v1/cities',
        data: {
            type: 'hot'
        }
    })
}

// 获取首页所有城市
export const groupcity = () => {
    return require({
        url: '/v1/cities',
        data: {
            type: 'group'
        }
    })
}

// 获取当前所在城市
export const currentcity = (number) => {
    return require({
        url: '/v1/cities' + number
    })
}

// 获取搜索地址
export const searchplace = (cityid, value) => {
    return require({
        url: '/v1/pois',
        data: {
            type: 'search',
            city_id: cityid,
            keyword: value
        }
    })
}