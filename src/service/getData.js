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