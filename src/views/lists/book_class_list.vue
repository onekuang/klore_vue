<template>
<div class="book_class_list page app_head">
	<k_header 
		title="阅读分类" 
		r_icon="iconfont icon-shaixuan"
		r_icon_color="#FD9A00"
		@r_click="r_click" 
	/>

<div class="book_list">


<!-- <div class="index_title">分类</div>   -->

<div class="book_wrapper">
	<div class="items">
		<router-link tag="div" to="/book_info" class="item" v-for="i in 4">
			<div class="img">
				<img src="https://images-cn.ssl-images-amazon.com/images/I/51dmO8LM2LL._SL150_.jpg" width=100 height=120>
			</div>
			<div class="info">
				<div class="inof_box">
					<div class="title">傲慢与偏见</div>
					<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore atque enim eos voluptas, minima commodi accusantium quidem quo ipsa facilis, incidunt aspernatur voluptatem, sapiente quod error unde nam cum expedita!</div>
				</div>
				<div class="time_box">
					<div class="name"><i class="iconfont icon-people"></i> name</div>
					<div class="tags">
						<div class="tag">热门</div>
						<!-- <div class="tag">玄幻</div> -->
					</div>
				</div>
			</div>
		</router-link>
	</div>
</div>

</div>

<k_cls_tab 
	:data=cla_list
	:cla_show=slide_bar_show 
	@get_id=get_id
	@hide=_reset 
/>


</div>
</template>

<script>
import HomeMenu from '@/components/home_menu/home_imgmenu';
import k_swipe_banner from '@/components/k_swipe/k_swipe';
import k_header from '@/components/app_head/app_head';
import k_cls_tab from '@/components/k_cls_tab/k_cls_tab';
export default {
	data() {
		return {
			slide_bar_show: false,
			cla_list:[
				{
					title:'测试',
					list:[
						{id:1,val:'测试'},
						{id:2,val:'测试测试'},
					]
				},
				{
					title:'测试2',
					list:[
						{id:3,val:'测试'},
						{id:4,val:'测试测试测试'},
					]
				},
			]
		}
	},
	created() {
		this.get_data()
	},
	methods: {
		get_data(){},
		r_click() {
			this.slide_bar_show = !this.slide_bar_show
		},
		get_id(id) {
			console.log(id)
		},
		_reset() {
			this.slide_bar_show = false
		},
		goto(url) {
			console.log(123)
		}
	},
	components: {k_header,k_cls_tab}
}
</script>

<style scoped lang="less">
@import url('../../common/less/index.less');

.book_wrapper{
	.items{
		padding-top: 8px;
		.item{
			padding: 4px 8px;
			margin-bottom: 12px;
			display: flex;
			.img{
				flex: 0 0 100px;
				width: 100px;
				text-align: center;
				img{
					width: 90px;
					height: 120px;
				}
			}
			.info{
				height: 120px;
				flex: 1;
				min-width: 0;
				padding-left: 8px;
				position: relative;
				.title{
					font-weight: 900;
					.ell();
				}
				.desc{
					color: #888;
					margin-top: 4px;
					font-size: 14px;
			    line-height: 22px;
			    max-height: 44px;
			    text-overflow:ellipsis; 
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
				}
				.time_box{
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					.name{
						float: left;
						font-size: 12px;
						color: #666;
						margin-left: 8px;
					}
					.tags{
						float: right;
						.tag{
							font-size: 12px;
							float: left;
							display: inline-block;
							margin-right: 4px;
							border: 1px solid #eee;
							padding: 0px 4px;
							border-radius: 4px;
							color: @orange;
						}
					}
				}
			}
		}
	}
}


// 人气专区 _ 滑动模块
.popularity{
	padding-bottom: 12px;
}
.k_sweipe_box{
	.item{
		// border: 1px solid #eee;
		// box-shadow: 1px 2px 5px #ccc;
		margin-bottom: 6px;
		position: relative;
		border-radius: 2px;
		.flag{
			position: absolute;
			top: 8px;
			left: 8px;
			color: #fff;
			font-size: 10px;
			line-height: 10px;
			padding: 4px 6px;
			border-radius: 12px;
			background: rgba(0,0,0,.3);
		}
	}
	.img{
		border-radius: 2px;
		height: 0;
		width: 100%;
		padding-bottom: 100%;
		background: #eee;
		background-size: 100% 100%!important;
		background-repeat: no-repeat!important;
	}
	.info {
		margin-top: 4px;
		.title{
			.ell();
			font-size: 12px;
			height: 20px;
			line-height: 20px;
		}
		.price {
			text-align: left;
			color: red;
			font-size: 12px;
			font-weight: 900;
			height: 20px;
			line-height: 20px;
			span {
				display: inline-block;
				padding: 0 4px;
				color: #ccc;
				text-decoration:line-through;
				font-weight: 300;
			}
		}
	}
}
</style>