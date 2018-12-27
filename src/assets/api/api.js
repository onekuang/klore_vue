var baseUrl = 'http://192.168.0.109:80/api/';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {
	test 					: 'Webdata/test',
	test1					: 'Webdata/test1',
	test2					: 'Webdata/test2',
	test3					: 'Webdata/test3',
	test4					: 'Webdata/test4',
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}
api.base_img = 'http://192.168.0.116'

export default api;