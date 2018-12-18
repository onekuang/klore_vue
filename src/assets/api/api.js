var baseUrl = 'http://192.168.0.109:80/api/';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {
	test 					: 'Webdata/test',
	test1					: 'Webdata/test1',
	test2					: 'Webdata/test2',
	test3					: 'Webdata/test3',
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}

export default api;