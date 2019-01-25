var baseUrl = 'http://192.168.0.116/api/';
// var baseUrl = 'http://192.168.4.118:8080';
// var baseUrl = 'http://192.168.4.115:8180';

var api = {	
	page_init 		: 'Tbk/InitPage', 					// 初始化
	home_list			: 'Tbk/TopicList',					// 首页列表
	MaterialList	: 'Tbk/MaterialList',				// 物料列表


	get_classify	: 'Tbk/categorylist.html',	// 获取所有分类
	pro_list			: 'Tbk/GoodsList',					// 分类商品列表
	goods_info		: 'Tbk/GoodsInfo',					// 商品详情
	goods_collect : 'Tbk/GoodsCollection',		// 商品收藏
	goods_like		: 'Tbk/GoodsLike',					// 猜你喜欢
	goods_url 		: 'Tbk/GoodsLinkTpwd', 			// 购买链接
	search 				: 'Tbk/GoodsSearch', 				// 搜索
	searchSug			: 'Tbk/SearchSug', 					// 搜索联想

	VerifyMobile	: 'User/VerifyMobile',			// 判断手机号是否已注册
	register			: 'User/Register',					// 注册
	login					: 'User/Login', 						// 登录
	changepassword: 'User/changepassword', 		// 忘记密码
	get_code 			: 'Tools/SmsSend', 					// 发送短信

	order_list 		: 'User/OrderList', 				// 订单列表
	user_info 		: 'User/UserInfo', 					// 会员信息
	fans_list 		: 'User/FansList', 					// 粉丝列表
	earnings 			: 'User/IncomeInfo',				// 收益信息
	collect_list	: 'Tbk/GoodsCollectionList',// 收藏列表
	feed_back			: 'Tbk/GoodsCollectionList',// 意见反馈

	bind_alipay 	: 'User/AlipayBind',				// 支付宝绑定
	get_money_info: 'User/WithdrawInfo', 			// 提现界面信息
	get_money 		: 'User/Withdraw', 					// 提现请求
	get_money_list: 'User/WithdrawList', 			// 提现列表
	IncomeList 		: 'User/IncomeList', 				// 收益列表

	notice 				: 'article/articlelist',    // 公告和常见问题
	article 			: 'article/articleinfo', 		// 公告和问题的详情

	change_name 	: 'User/InfoEdit',					// 修改昵称和头像
	change_config : 'User/MessageSetting',		// 修改通知配置

	wx_login 			: 'Weixin/Login',						// 微信授权登录
}

for(var i in api ) {
	api[i] = baseUrl + api[i]
}

api.url = 'http://192.168.0.109:8088'
api.base_img = 'http://192.168.0.116'

export default api;