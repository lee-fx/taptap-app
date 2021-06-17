<template>
	<view class="home">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">排行</block>
		</cu-custom>
		<view class="head_top">
			<view class="search icon icon-sousuo">
				<text class="search_text" space="nbsp">&nbsp;&nbsp;&nbsp;&nbsp;
					搜索
				</text>
			</view>
			<view class="header icon icon-tixing"></view>
			<view class="header">
				<image src="/static/image/icon/header.png" mode=""></image>
			</view>
		</view>
		<view class="top">
			<image src="/static/image/rank/rank_head.png" class="head_img"></image>
			<view class="head_title">Top Ten</view>
			<view class="head_desc">排行榜</view>
		</view>

		<rank-nav :navData="navData" :activeNavId="activeNavId" @navReturnData="navReturnData"></rank-nav>

		<w-loading text="加载中.." mask="true" click="false" ref="loading"></w-loading>

		<rank-list :games="games" :newActive="newActive"></rank-list>
		<view class="is_over" v-if="flag"> 没有更多了 </view>
	</view>
</template>

<script>
	import RankNav from '@/pages/components/Rank/rank-nav.vue';
	import RankList from '@/pages/components/Rank/rank-list.vue';
	export default {
		data() {
			return {
				val: 0,
				activeNavId: "1", // 点击标记
				newActive: "1", // 老的标记
				pageIndex: 1,
				to: 8,
				// 新游（最新上线或者更新的游戏）
				// 热游（关注最多的游戏排行）
				// 优质推荐（评分最高）
				// 尝鲜特供（类型独特游戏）
				navData: [],
				games: [],
				flag: false, // false 为未到底 true为已到底
				tag: false // false 为初始化数据 true为添加数据
			};
		},
		components: {
			RankNav,
			RankList
		},
		onReachBottom() {
			if (this.games.length >= 10) {
				console.log(this.games.length)
				this.flag = true
				return
			}
			this.pageIndex++
			this.tag = true
			this.getAllGames()
		},
		onReady() {
			//打开加载动画
			this.$refs.loading
			//关闭加载动画
			// this.$refs.loading.close()
		},
		onLoad() {
			this.getNavs()
			this.getAllGames()
		},
		methods: {
			// 获取navs
			async getNavs() {
				const res = await this.$myRequest({
					url: '/home/getConfigs/RANK_NAV',
					method: 'POST'
				})
				// console.log(res.data)
				this.navData = res.data
			},

			//子组件返回响应
			navReturnData(param) {
				this.activeNavId = param;

				if (this.newActive != param) {
					this.tag = false
				}

				this.$refs.loading.open()
				setTimeout(() => {
					this.getAllGames()
					this.$refs.loading.close()
				}, 500)

				this.newActive = param
			},

			// 获取所有游戏列表
			async getAllGames() {
				// console.log(sign)
				var type = this.activeNavId

				if (!this.tag) {
					this.pageIndex = 1
				}

				const res = await this.$myRequest({
					url: '/game/getAllGames/' + type + '/' + this.pageIndex + '/' + this.to,
					method: 'POST'
				})
				// console.log(res.data)
				if (!res) {
					// this.$refs.loading.open()
					this.flag = true
					return
				}
				if (!this.tag) {
					// 初始化
					this.games = res.data
					console.log(res)
				} else {
					this.games = [...this.games, ...res.data]
				}
			}
		}
	};
</script>

<style lang="scss">
	.head_top {
		// position: fixed;
		width: 750upx;
		height: 78upx;
		z-index: 2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
		padding: 0 0 10upx 0;
		box-sizing: border-box;

		.search {
			width: 526upx;
			height: 64upx;
			display: flex;
			align-items: center;

			padding: 16upx 25upx;
			background: #f5f7f8;
			box-sizing: border-box;
			border-radius: 32upx;
			font-size: 38upx;

			.search_text {
				display: block;
				height: 64upx;
				line-height: 64upx;
				font-size: 28upx;
				margin-left: 20upx;
				color: #999;
			}
		}

		.header {
			width: 56upx;
			@include height(56upx);
			text-align: center;
			background: #fff;
			border-radius: 50%;
			box-shadow: 0 6upx 12upx rgba(163, 167, 168, 0.3);
			box-sizing: border-box;

			image {
				width: 56upx;
				height: 56upx;
				background: #fff;
				border-radius: 50%;
			}
		}
	}

	.home {
		min-height: 0;
	}

	.top {
		width: 750upx;
		height: 250upx;
		position: relative;
		// margin-top: 128up·x;

		image {
			width: 374upx;
			height: 194upx;
			position: absolute;
			top: 20upx;
			left: 50%;
			margin-left: -186upx;
		}

		.head_title {
			width: 750upx;
			position: absolute;
			left: 50%;
			top: 80upx;
			margin-left: -375upx;
			text-align: center;
			font-size: 64upx;
			font-weight: 700;
			color: #45576b;
			text-align: center;
			text-shadow: 0 1upx 0 #fff;
		}

		.head_desc {
			width: 750upx;
			position: absolute;
			left: 50%;
			top: 165upx;
			margin-left: -375upx;
			text-align: center;
			@include height(42upx);
			text-align: center;
			font-size: 36upx;
			color: #fff;
		}
	}

	.is_over {
		width: 750upx;
		height: 75upx;
		line-height: 75upx;
		text-align: center;
		/* background: #FFFFFF; */
		font-size: 32upx;
	}
</style>
