<template>
	<view class="home">
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper indicator-dots circular indicator-active-color="#14B9C8" indicator-color="#F0F8FF">
				<swiper-item v-for="item in swipers" :key=item.id>
					<image :src="item.image_url"></image>
				</swiper-item>
			</swiper>
		</view>

		<scroll-view class="nav" scroll-x>
			<view class="nav_item">往期推荐</view>
			<view class="nav_item">taptap独家</view>
			<view class="nav_item">单机</view>
			<view class="nav_item">角色扮演</view>
			<view class="nav_item">动作</view>
			<view class="nav_item">MOBA</view>
			<view class="nav_item">策略</view>
		</scroll-view>


		<view class="app_simple">
			<view class="title">
				<view class="title_left">
					<view class="bar">
					</view>
					<view class="text">
						每日新发现
					</view>
				</view>

				<view class="title_right">
					更多
				</view>
			</view>
			<scroll-view class="content" scroll-x scroll-with-animation>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						上古卷轴：刀锋
					</view>
				</view>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						救世奇缘
					</view>
				</view>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						非缘：缘起缘灭
					</view>
				</view>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						非常英雄
					</view>
				</view>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						英雄救世
					</view>
				</view>
			</scroll-view>
		</view>
		
		<progress percent="100%">111</progress>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			async getSwipers() {
				// 获取轮播图的数据
				const res = await this.$myRequest({
					url: '/getSwipers'
				})
				this.swipers = res.data
			}
		}
	}
</script>

<style lang="scss">
	
	// .home { // 页面级别设置
	// 	width: 750rpx;
	// 	height: 11290rpx;
	// }
	
	.swiper {
		swiper {
			width: 750rpx;
			height: 290rpx;
			margin-bottom: 20rpx; // 下面留空

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.nav {
		width: 750rpx;
		height: 84rpx;
		white-space: nowrap; // 段落中文本不进行换行

		.nav_item {
			padding: 0 30rpx; // 上 右 下 左
			height: 64rpx; // 属性设置元素的高度。
			line-height: 64rpx; // 属性设置行间的距离（行高）
			background: #14B9C8; // 背景色
			color: #FFFFFF; // 字体颜色
			border-radius: 32rpx; // 圆角
			display: inline-block; // 让块级元素在一行内显示 
			margin-left: 20rpx; // 左侧给个宽度
		}
	}

	.app_simple {
		width: 750rpx;
		height: 386rpx;
		background: #FFFFFF;  // 背景色

		.title {
			width: 750rpx;
			height: 100rpx;
			
			display: flex;  // 使用flex布局
			justify-content: space-between; // 元素左右拉开
			align-items: center;
			box-sizing: border-box;
			
			padding: 0 30rpx; // 上下0 左右30
			font-size: 28rpx; 

			.title_left {
				display: flex;
				align-items: center;
				.bar {
					width: 8rpx;
					height: 40rpx;
					background: #14B9C8;
					margin-right: 12rpx;
				}
				.text {
					font-size: 32rpx;
					margin-right: 12rpx;
				}
			}

			.title_right {
				font-size: 24rpx;
				color: #14B9C8;
			}
		}

		.content {
			width: 750rpx;
			height: 256rpx;
			margin-left: 30rpx;
			white-space: nowrap; // 不换行

			.content_item {
				width: 168rpx;
				height: 256rpx;
				display: inline-block;
				margin-right: 24rpx;

				.content_text {
					width: 168rpx;
					height: 80rpx;
					word-wrap: normal;
					font-size: 24rpx;
					line-height: 32rpx;
					white-space: pre-wrap; //文字换行
					margin-top: 15rpx;
				}
			}

			image {
				width: 168rpx;
				height: 168rpx;
				border-radius: 12rpx;
			}


		}
	}
</style>
