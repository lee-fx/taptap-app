<template>
	<view class="home">
		<view class="game_list">
			<cu-custom bgColor="bg-cyan" :isBack="true">
				<block slot="backText">返回主页</block>
				<block slot="content">游戏大全</block>
			</cu-custom>
			<games-list :games="games" @gameItemClick="goGameDetail"> </games-list>
			<view class="is_over" v-if="flag">-----我是有底线的-----</view>
		</view>
	</view>
</template>

<script>
	import gamesList from '../components/GameList/games-list.vue'
	export default {
		data() {
			return {
				pageIndex: 1,
				games: [{
					id: 1,
					game_name: '111',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 2,
					game_name: '222',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 3,
					game_name: '333',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 4,
					game_name: '444',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 5,
					game_name: '555',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 6,
					game_name: '666',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 7,
					game_name: '777',
					sell_price: 1212,
					market_price: 1888
				},{
					id: 8,
					game_name: '888',
					sell_price: 1212,
					market_price: 1888
				}, ],
				flag: false
			}
		},
		onLoad() {
			// this.getHotGames()
		},
		methods: {
			// 获取热门游戏列表
			async getHotGames(callBack) {
				const res = await this.$myRequest({
					url: '/getHotGames?page=' + this.pageIndex
				})
				this.games = [...this.games, ...res.data]
				callBack && callBack()
			},
			// 跳转到游戏详情页面
			goGameDetail(id) {
				uni.navigateTo({
					url: '/pages/game-detail/game-detail?id=' + id
				})
			}
		},
		components: {
			"games-list": gamesList
		},
		onReachBottom() {
			if (this.games.length < 11) {
				this.flag = true
				return
			}
			// console.log('触底');
			this.pageIndex++
			this.getHotGames()
		},
		onPullDownRefresh() {
			console.log('下拉刷新了');
			this.pageIndex = 1
			this.games = []
			this.flag = false
			setTimeout(() => {
				this.getHotGames(() => {
					uni.stopPullDownRefresh()
				})
			}, 500)
		}
	}
</script>

<style>
	.game_list {
		background: #f8f8f8;
	}

	.is_over {
		width: 750rpx;
		height: 75rpx;
		line-height: 75rpx;
		text-align: center;
		/* background: #FFFFFF; */
		font-size: 32rpx;
	}
</style>
