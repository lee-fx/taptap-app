<template>
	<view class="home">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">排行</block>
		</cu-custom>
		<view class="head_top">
			<view class="search icon icon-sousuo"><text class="search_text" space="nbsp">&nbsp;&nbsp;&nbsp;&nbsp; 搜索</text></view>
			<!-- <view class="header icon icon-tixing"></view> -->
			<view class="header"><image src="/static/image/icon/header.png" mode=""></image></view>
		</view>
		<view class="top">
			<image src="/static/image/rank/rank_head.png" class="head_img"></image>
			<view class="head_title">Top 20</view>
			<view class="head_desc">排行榜</view>
		</view>

		<rank-nav :navData="navData" :activeNavIndex="activeNavId" @navReturnData="navReturnData"></rank-nav>
		<rank-list :newActive="newActive" @rankReturnData="rankReturnData" :scrollTop="scrollTop"></rank-list>
	</view>
</template>

<script>
import RankNav from '@/pages/components/Rank/rank-nav.vue';
import RankList from '@/pages/components/Rank/rank-list.vue';
export default {
	data() {
		return {
			val: 0,
			activeNavId: '',
			newActive: 0,
			scrollTop: 0,
			navData: [
				{
					id: 1,
					name: '热玩榜'
				},
				{
					id: 2,
					name: '新品榜'
				},
				{
					id: 3,
					name: '下载榜'
				},
				{
					id: 4,
					name: '热评榜'
				}
			]
		};
	},
	components: {
		RankNav,
		RankList
	},
	onLoad() {},
	onShow() {
		console.log('触发onshow');
	},
	methods: {
		//子组件返回响应
		navReturnData(param) {
			console.log(param);
			this.activeNavId = param;
			let data = false;
			if (this.newActive != param) {
				data = true;
			}
			this.newActive = param;
			this.scrollTop = 0;
			//
			uni.$emit('gotop', {
				data: data
			});
			console.log('改变后的值' + this.newActive);
		},
		rankReturnData(param) {}
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
</style>
