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
        method: option.method || 'get',
        data: option.data || {}
    }

    // 'get'请求，数据拼进url
    if (options.method == 'get') {
		let dataStr = '';
		Object.keys(options.data).forEach(key => {
			dataStr += key + '=' + options.data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			options.url = options.url + '?' + dataStr;
		}
    }

    return axios(options).then((res) => {
        return Promise.resolve(res.data)
    }).catch((error) => {
        return Promise.reject(error)
    })
};

export default require