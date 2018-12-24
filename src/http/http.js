import axios from 'axios'
import Qs from 'qs'
import Vue from "vue";



// # 创建一个axios实例
var instance = axios.create({
// # config里面有这个transformRquest，这个选项会在发送参数前进行处理。
// # 通过Qs.stringify转换为表单查询参数
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
// # 设置Content-Type
    headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
    params: {
      access_token: '5b7f60aca7e7f6f8c680b1b219ad3ec6'
    },
})


/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
instance.interceptors.request.use(    
    config => {   
        return config;    
    },    
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(  
		function(res) {
            if(res.status === 200 && res.data.code != 200) {
                // 如果不是200 统一处理
                _verify_code(res.data.code)
                return
            }
			return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.data)
		},
		function(err) {
			const { response } = err;
			if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            console.log('网络有误')
        }
		}
 );


/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            console.log(401)
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            
            break;
        // 404请求不存在 
        case 404:
        		Vue.prototype.$toast('404请求的资源不存在')
            break;
        case 500:
        		Vue.prototype.$toast('服务器错误,请稍后再试')
            break;
        default:
            Vue.prototype.$toast('服务器错误,请稍后再试')
            console.log('网络错误');   
    }
}


// 验证code
function _verify_code(code) {
    switch (code) {
        case 1:
            console.log('code=1')
            break;
        default: 
            console.log('网络错误')
            
    }
}
















export default(instance)