<template>
	<view class="app_simple">
		<view class="title">
			<view class="title_left">
				<view class="bar">
				</view>
				<view class="text">
					{{games.title}}
				</view>
			</view>

			<view class="title_right">
				更多
			</view>
		</view>
		<view></view>
		<scroll-view class="content" scroll-x scroll-with-animation>
			<view class="content_item" v-for="(item, index) in games.data" :key="index">
				<image :src="item.icon" mode="aspectFit"></image>
				<view class="content_text">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		
	</view>

</template>

<script>
	export default {
		props: {
			games: {
				type: Object,
				default: e => {}
			},
			allInfo: {
				type: Array,
				default: e => {}
			}
		},
		data() {
			return {
				isInfo: false // 展开与收起
			}
		},
		methods: {
			showInfo() {
				this.isInfo = !this.isInfo
			}
		}
	}
</script>

<style lang="scss">
	.app_simple {
		width: 750rpx;
		height: 368rpx;
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
