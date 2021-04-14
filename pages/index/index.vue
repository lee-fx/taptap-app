<template>
	<view class="home">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content" class="title">游戏大全</block>
		</cu-custom>
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper indicator-dots circular indicator-active-color="#14B9C8" indicator-color="#F0F8FF">
				<swiper-item v-for="item in swipers" :key=item.id>
					<image :src="item.image_url"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 导航区域 -->
		<view class="nav_game">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<!-- <view :class="item.icon"></view> -->
				<view>
					<image :src="item.icon"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<!-- 推荐游戏 -->
		<!-- 		<view class="hot_game">
			<view class="title">推荐游戏</view>
			<games-list @gameItemClick="goGameDetail" :games="games"></games-list>
		</view> -->

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
						上古卷轴：刀锋4569869
					</view>
				</view>
				<view class="content_item">
					<image src="../../static/image/icon/dao.png" mode="aspectFit"></image>
					<view class="content_text">
						救世奇asdfwe
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

	</view>
</template>

<script>
	import gamesList from '../components/GameList/games-list.vue'
	export default {
		data() {
			return {
				swipers: [{
						id: 1,
						image_url: '/static/image/swipers/lb1.jpeg'
					},
					{
						id: 2,
						image_url: '/static/image/swipers/lb2.jpg'
					}, {
						id: 3,
						image_url: '/static/image/swipers/lb3.jpeg'
					}
				],
				games: [],
				navs: [{
						icon: '/static/image/navs/say.png',
						title: '聊天语音',
						path: '/pages/community/community'
					},
					{
						icon: '/static/image/navs/video.png',
						title: '影视大全',
						path: '/pages/video/video'
					}, {
						icon: '/static/image/navs/all.png',
						title: '全部游戏',
						path: '/pages/games/games'
					},
					{
						icon: '/static/image/navs/auth.png',
						title: '开发简介',
						path: '/pages/contact/contact'
					},

					{
						icon: '/static/image/navs/storage.png',
						title: '相册存储',
						path: '/pages/games/games'
					}
				]
			}
		},
		onLoad() {
			// this.getSwipers()
			// this.getHotGames()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/getSwipers'
				})
				console.log(res.data);
				this.swipers = res.data
			},
			// 获取热门游戏列表
			async getHotGames() {
				const res = await this.$myRequest({
					url: '/getHotGames?page=1'
				})
				this.games = res.data
			},
			// 导航点击处理函数
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			// 跳转到游戏详情页面
			goGameDetail(id) {
				uni.navigateTo({
					url: '/pages/game-detail/game-detail?id' + id
				})
			}
		},
		components: {
			"games-list": gamesList
		}
	}
</script>

<style lang="scss">
	page {
		min-height: 0;

		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;

		::-webkit-scrollbar {
			display: none;
		}

	}

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

	.nav_game {
		width: 750rpx;
		display: flex;
		// flex-direction: row;
		margin-bottom: 20rpx;

		.nav_item {
			width: 100rpx;
			margin-left: 40rpx;

			view {
				width: 88rpx;
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 68rpx;
					height: 68rpx;
					background: #e5e5e5;
					border-radius: 60rpx; // 圆角
					line-height: 88rpx;
				}
			}

			text {
				font-size: 24rpx;
			}
		}
	}

	.hot_game {
		background: #eee;
		overflow: hidden;

		.title {
			width: 750rpx;
			height: 78rpx;
			color: #DD524D;
			letter-spacing: 20rpx;
			line-height: 78rpx; // 行高
			text-align: center; //居中
			background: #FFFFFF;
			margin: 10rpx 0rpx;
		}


	}

	.app_simple {
		width: 750rpx;
		height: 386rpx;
		background: #FFFFFF; // 背景色

		.title {
			width: 750rpx;
			height: 100rpx;

			display: flex; // 使用flex布局
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
					font-size: 24rpx;
					line-height: 32rpx;
					overflow: hidden;
					white-space: pre-line;
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
