<template>
	<view class="game_list">
		<view class="game_item" v-for="(item, index) in games" :key="index" @click="navigator(item.id)">
			<image :src="item.img_url" src="../../../static/image/icon/dao.png"></image>
			<view class="price">
				<text>{{item.sell_price}}</text>
				<text>{{item.market_price}}</text>
			</view>
			<view class="name">{{item.game_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['games'],
		methods:{
			navigator(id) {
				this.$emit('gameItemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.game_list {
		padding: 0 15rpx;
		display: flex; // 不换行
		flex-wrap: wrap; // 到头换行
		justify-content: space-between; // 靠左靠右排布

		.game_item {
			background: #fff;
			width: 350rpx;
			margin: 15rpx 0;
			padding: 15rpx;
			box-sizing: border-box; // 盒子不会撑大

			image {
				width: 280rpx;
				height: 280rpx;
				display: block; // 行内元素变为块级元素
				margin: 15rpx auto;
			}

			.price {
				color: $common-color;
				font-size: 32rpx;

				text:nth-child(2) {
					//第二个单独设置颜色
					color: #ccc;
					font-size: 28rpx;
					margin-left: 18rpx;
					text-decoration: line-through; //中分线
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx; // 行高
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
