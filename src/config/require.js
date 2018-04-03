import axios from 'axios'
import {baseUrl} from './env'

var require = function(option) {
    var options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        baseURL: baseUrl,
        url: option.url || '/',
        timeout: 10000,
        method: option.method || 'get'
    }

    // 'get'请求，数据拼进url
    if (options.method == 'get') {
		let dataStr = '';
		Object.keys(option.data).forEach(key => {
			dataStr += key + '=' + option.data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			options.url = options.url + '?' + dataStr;
		}
    }

    if (options.method == 'post') {
        options.data = option.data || {}
    }

    return axios(options).then((res) => {
        return Promise.resolve(res.data)
    }).catch((error) => {
        return Promise.reject(error)
    })
};

export default require