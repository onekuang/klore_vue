var baseUrl = 'http://www.fushuaxx.com';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {
	home 					: '/wechatpicenterlist.json',
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}

export default api;