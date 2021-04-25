<template>
	<view class="game_list">
		<view class="game_item" v-for="(item, index) in games" :key="index" @click="navigator(item.Id)">
			<image :src="item.Icon"></image>
			<view class="name">{{item.Name}}</view>
			<view class="classification">
				<text>{{item.GameTag}}</text>
				<view class="mana">
					<text>{{item.Mana}}</text>
					<image src="../../../static/image/icon/mana_333.png"></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: ['games'],
		methods: {
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

			.name {
				color: $common-color;
				padding: 0rpx 15rpx;
				font-size: 32rpx;
			}

			.classification {
				width: 280rpx;
				height: 50rpx;
				display: flex;
				justify-content: space-between;

				font-size: 28rpx;
				line-height: 50rpx; // 行高
				padding: 15rpx;

				text {
					width: 56rpx;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #666666;
				}

				.mana {
					width: 88rpx;
					height: 40rpx;
					line-height: 40rpx;
					display: flex;
					align-items: center;

					text {
						width: 40rpx;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 28rpx;
						color: #666666;
					}

					image {
						width: 28rpx;
						height: 28rpx;
						line-height: 28rpx;
						color: #999999;
					}
				}
			}
		}
	}
</style>
