<template>
	<view>
		<!-- 简介 展开和收起 start-->
		<view class="introduction">
			<view class="header">
				<view class="left">
					<view class="bar"></view>
					<text>简介</text>
				</view>
			</view>
			<view class="info">
				<view :class="{hide:!isInfo}">
					{{gameData}}
				</view>
				<text @tap="showInfo" v-show="!isInfo">展开</text>
			</view>
			<text @tap="showInfo" v-show="isInfo" class="hidebtn">收起</text>
		</view>
		<!-- end  -->

		<view class="border"></view>

		<!-- 详细信息 start-->
		<view class="all_info">
			<view class="header">
				<view class="left">
					<view class="bar"></view>
					<text>详细信息</text>
				</view>
			</view>
			<view class="key_info">
				<view class="info" v-for="(item, index) in allInfo" :key="index">
					<view class="title">{{item.title}}:</view>
					<view class="val">{{item.val}}</view>
				</view>
			</view>
		</view>
		<!-- end  -->

		<view class="border"></view>

		<!-- Claim 手机要求 -->
		<view class="claim">
			<view class="info" v-for="(item, index) in claimInfo" :key="index">
				<image :src="item.url"></image>
				<text>{{item.title}}</text>
			</view>
		</view>

		<view class="border"></view>

		<!-- banner start -->
		<view class="banner">
			<view class="header">
				<view class="left">
					<view class="bar"></view>
					<text>宣传截图</text>
				</view>
			</view>

			<scroll-view class="banner_info" scroll-x scroll-with-animation>
				<view class="banner_item" v-for="(item, index) in bannerInfo" :key="index">
					<image :src="item.url" mode="aspectFit"></image>
				</view>
			</scroll-view>
		</view>
		<!-- end -->
	</view>
</template>


<script>
	export default {
		props: {
			gameData: {
				type: String,
				default: ''
			},
			allInfo: {
				type: Array,
				default: e => {}
			},
			claimInfo: {
				type: Array,
				default: e => {}
			},
			bannerInfo: {
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
	.introduction {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		position: relative; // 绝对定位（父）

		.header {
			width: 690rpx;
			height: 40rpx;
			margin-bottom: 30rpx;

			.left {
				display: flex;
				align-items: center;

				.bar {
					width: 8rpx;
					height: 40rpx;
					border-radius: 4rpx;
					background: #14B9C8;
					margin-right: 15rpx;
				}

				text {
					color: #2C405A;
					font-size: 38rpx;
				}
			}
		}

		.info {
			display: flex;
			flex-direction: column;

			view {
				text-align: justify;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400rpx;
				color: rgba(116, 116, 116, 1.0);
				word-break: break-word; //换行模式
				background-color: #fff;
			}

			text {
				width: 140rpx;
				font-size: 28rpx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%);
				color: #14B9C8;
				position: absolute; //相对定位（子）
				bottom: 30rpx;
				right: 30rpx;
			}
		}

	}

	.all_info {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding: 40rpx 30rpx;
		box-sizing: border-box;

		.header {
			width: 690rpx;
			height: 40rpx;
			margin-bottom: 30rpx;

			.left {
				display: flex;
				align-items: center;

				.bar {
					width: 8rpx;
					height: 40rpx;
					border-radius: 4rpx;
					background: #14B9C8;
					margin-right: 15rpx;
				}

				text {
					color: #2C405A;
					font-size: 38rpx;
				}
			}
		}

		.key_info {
			display: flex;
			flex-wrap: wrap;

			.info {
				width: 345rpx;
				height: 106rpx;
				margin-bottom: 20rpx;

				.title {
					color: #333;
					margin-bottom: 12rpx;
					font-weight: 580;
					font-size: 28rpx;
				}

				.val {
					color: #666;
				}
			}
		}
	}

	.claim {
		width: 750rpx;
		height: 128rpx;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		.info {
			width: 345rpx;
			height: 56rpx;
			display: flex;
			box-sizing: border-box;
			align-items: center; // 纵向居中
			justify-content: center;

			image {
				width: 56rpx;
				height: 56rpx;
				background: #14B9C8;
				border-radius: 28rpx;
				margin-right: 15rpx;
			}

			text {
				width: 168rpx;
				height: 56rpx;
				line-height: 56rpx;
				font-size: 28rpx;
			}
		}
	}

	.banner {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding: 40rpx 30rpx;
		box-sizing: border-box;

		.header {
			width: 690rpx;
			height: 40rpx;
			margin-bottom: 30rpx;

			.left {
				display: flex;
				align-items: center;

				.bar {
					width: 8rpx;
					height: 40rpx;
					border-radius: 4rpx;
					background: #14B9C8;
					margin-right: 15rpx;
				}

				text {
					color: #2C405A;
					font-size: 38rpx;
				}
			}
		}

		.banner_info {
			width: 750rpx;
			height: 334rpx;
			white-space: nowrap; // 不换行

			.banner_item {
				width: 596rpx;
				height: 334rpx;
				display: inline-block;
				margin-right: 24rpx;

				image {
					width: 596rpx;
					height: 334rpx;
					border-radius: 12rpx;
				}
			}


		}
	}

	.hidebtn {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		color: #14B9C8;
		font-size: 28rpx;
	}

	.hide {
		word-break: break-word; //换行模式 允许再单词内换行
		overflow: hidden;
		text-overflow: ellipsis; //修剪文字
		display: -webkit-box;
		-webkit-line-clamp: 5; //此处为上限行数
		-webkit-box-orient: vertical;
	}

	.border {
		border-bottom: 5rpx solid #EEEEEE;
	}
</style>
