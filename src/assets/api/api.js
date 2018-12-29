var baseUrl = 'http://192.168.0.116/api/';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {	
	get_classify	: 'Tbk/categorylist.html',// 获取所有分类
	pro_list			: 'Tbk/GoodsList',//分类商品列表
	test2					: 'Webdata/test2',
	test3					: 'Webdata/test3',
	test4					: 'Webdata/test4',
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}

api.base_img = 'http://192.168.0.116'

export default api;