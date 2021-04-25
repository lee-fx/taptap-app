<template>
	<view class="home">
		<!-- 		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content" class="title">首页</block>
		</cu-custom> -->
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper indicator-dots circular autoplay interval="5000" indicator-active-color="#14B9C8"
				indicator-color="#F0F8FF">
				<swiper-item v-for="item in swipers" :key=item.id>
					<image :src="item.GlobalValue"></image>
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

		<!--
		    新游（最新上线或者更新的游戏）
			热游（关注最多的游戏排行）
			优质推荐（评分最高）
			尝鲜特供（类型独特游戏）
		-->
		<games-nav :games="newGames"></games-nav>
		<view class="border"></view>
		<games-nav :games="hotGames"></games-nav>
		<games-nav :games="goodGames"></games-nav>
		<games-nav :games="novelGames"></games-nav>

	</view>
</template>

<script>
	import gamesList from '../components/GameList/games-list.vue'
	import gamesNav from '../components/GameList/games-nav.vue'
	export default {
		data() {
			return {
				swipers: [],
				games: [],
				gameNum: 10,  // 每种游戏的数量（共用）
				navs: [{
						icon: '/static/image/navs/all.png',
						title: '全部游戏',
						path: '/pages/games/games'
					}, {
						icon: '/static/image/navs/auth.png',
						title: '开发简介',
						path: '/pages/contact/contact'
					}, {
						icon: '/static/image/navs/say.png',
						title: '聊天语音',
						path: '/pages/community/community'
					},
					{
						icon: '/static/image/navs/video.png',
						title: '影视大全',
						path: '/pages/video/video'
					},
					{
						icon: '/static/image/navs/storage.png',
						title: '相册存储',
						path: '/pages/games/games'
					}
				],
				newGames: {
					type: 1,
					title: '新游',
					data: [{
						id: 1,
						icon: '/static/image/icon/dao.png',
						name: '上古卷轴：刀锋4569869'
					}, {
						id: 2,
						icon: '/static/image/icon/dao.png',
						name: '救世奇asdfwe'
					}, {
						id: 3,
						icon: '/static/image/icon/dao.png',
						name: '英雄救世'
					}]
				},
				hotGames: {
					type: 2,
					title: '热游',
					data: [{
						id: 1,
						icon: '/static/image/icon/dao.png',
						name: '上古卷轴：刀锋4569869'
					}, {
						id: 2,
						icon: '/static/image/icon/dao.png',
						name: '救世奇asdfwe'
					}, {
						id: 3,
						icon: '/static/image/icon/dao.png',
						name: '英雄救世'
					}]
				},
				goodGames: {
					type: 3,
					title: '优质推荐',
					data: [{
						id: 1,
						icon: '/static/image/icon/dao.png',
						name: '上古卷轴：刀锋4569869'
					}, {
						id: 2,
						icon: '/static/image/icon/dao.png',
						name: '救世奇asdfwe'
					}, {
						id: 3,
						icon: '/static/image/icon/dao.png',
						name: '英雄救世'
					}]
				},
				novelGames: {
					type: 4,
					title: '尝鲜特供',
					data: [{
						id: 1,
						icon: '/static/image/icon/dao.png',
						name: '上古卷轴：刀锋4569869'
					}, {
						id: 2,
						icon: '/static/image/icon/dao.png',
						name: '救世奇asdfwe'
					}, {
						id: 3,
						icon: '/static/image/icon/dao.png',
						name: '英雄救世'
					}]
				}
			}
		},
		onLoad() {
			this.getSwipers()
			this.getTypeGames()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/home/getSwipers',
					method: 'POST'
				})
				console.log(res.data);
				this.swipers = res.data
			},
			// 获取热门游戏列表
			async getTypeGames() {
				const res = await this.$myRequest({
					url: '/home/getTypeGames/' + this.gameNum
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
			"games-list": gamesList,
			"games-nav": gamesNav,
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

	.border {
		border-bottom: 5rpx solid #EEEEEE;
	}
</style>
