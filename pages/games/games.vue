<template>
	<view class="home">
		<view class="game_list">
			<cu-custom bgColor="bg-cyan" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">游戏中心</block>
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
				to: 8,
				games: [],
				flag: false
			}
		},
		onLoad() {
			this.getAllGames()
		},
		methods: {
			// 获取所有游戏列表
			async getAllGames(callBack) {
				const res = await this.$myRequest({
					url: '/game/getAllGames/' + this.pageIndex + '/' + this.to,
					method: 'POST'
				})
				// console.log(res.data)
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
			if (this.games.length > 11) {
				this.flag = true
				return
			}
			console.log('触底');
			this.pageIndex++
			this.getAllGames()
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
