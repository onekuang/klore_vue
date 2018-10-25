var baseUrl = 'http://localhost/shopping/public/index.php';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {
	test 					: '/api/Webdata/goods_detaile',
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}

export default api;