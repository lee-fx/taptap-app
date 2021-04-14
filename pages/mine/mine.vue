<template>
	<view class="home">
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="content">我的</block>
		</cu-custom>
		<view class="main">
			<view class="header" @tap="handelGotoLogin">
				<image src="/static/image/icon/header.png" mode=""></image>
			</view>
			<view class="user_all_info" @tap="handelGotoLogin">
				<view class="name">未登录</view>
				<view class="user">ID:#######</view>
				<view class="btn">礼仪</view>
			</view>
			<view class="btn_all">
				<view class="btn_item" @tap="handelEditInfo">编辑资料</view>
				<view class="btn_item">用户设置</view>
				<view class="btn_item">用户认证</view>
			</view>

			<view class="info_view">
				<view class="info_item">
					<view class="num">0</view>
					<view class="text">粉丝</view>
				</view>
				<view class="info_item">
					<view class="num">3</view>
					<view class="text">关注</view>
				</view>
				<view class="info_item">
					<view class="num">0</view>
					<view class="text">收藏</view>
				</view>
			</view>
		</view>
		<image src="/static/image/icon/bolang.gif" class="back_gif"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			handelGotoLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			handelEditInfo() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	};
</script>

<style lang="scss">	
	.home {
		background: #FFFFFF;
	}

	.main {
		width: 750upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));

		.header {
			width: 280upx;
			height: 280upx;
			margin: 0 auto;
			border-radius: 50%;
			background: #FFFFFF;

			image {
				@extend .header;
			}
		}

		.user_all_info {
			@include height(60upx);
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 40upx;

			.name {
				font-size: 46upx;
				color: #666;
			}

			.user {
				margin-left: 12upx;
				font-size: 24upx;
				line-height: 40upx;
				color: #999;
			}

			.btn {
				background-color: #ccc;
				color: #fff;
				display: inline-block;
				padding: 0 12upx;
				border-radius: 8upx;
				margin-left: 12upx;
				font-size: 24upx;
				line-height: 40upx;
			}
		}

		.btn_all {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 40upx;

			.btn_item {
				border-color: #12a7b4;
				background: #12a7b4;
				color: #fff;
				border-radius: 6upx;

				padding: 12upx 24upx;
				margin-bottom: 0;
				font-size: 28upx;
				font-weight: 400;
				line-height: 40upx;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				margin-left: 8upx;

				&:first-child {
					margin-left: 0;
				}
			}
		}

		.info_view {
			height: 140upx;
			display: flex;
			justify-content: space-around; //均等散列
			margin-top: 80upx;

			.info_item {
				display: flex;
				height: 140upx;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				text-align: center;
				color: #000;
				font-weight: 500;
				border-right: 1upx solid #ddd;

				&:last-child {
					border-right: 0;
				}

				.num {
					line-height: 60upx;
					font-size: 52upx;
				}

				.text {
					line-height: 40upx;
					font-size: 28upx;
				}
			}
		}
	}

	.back_gif {
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
