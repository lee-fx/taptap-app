<template>
	<view class="sun-index">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content"></block>
		</cu-custom>
		<view class="sun-logo-box">
			<view class="sun-logo">
				<image class="sun-icon-img" src="@/static/image/icon/login.png" />
			</view>
		</view>
		<view class="sun-login-box">
			<view class="sun-label">
				<image style="width: 28rpx;height:39rpx;" src="@/static/image/login/mobile_icon.png" />
				<text class="label-text">手机</text>
			</view>
			<view class="sun-input-box">
				<input v-model="mobile" type="text" placeholder="请输入手机号" placeholder-class="placeholder-class" />
				<image @click="mobile=''" class="close-icon" src="@/static/image/login/close_icon.png" />
			</view>
		</view>
		<view class="sun-login-box">
			<view class="sun-label">
				<image style="width: 29rpx;height:37rpx;" src="@/static/image/login/pwd_icon.png" />
				<text class="label-text">密码</text>
			</view>
			<view class="sun-input-box">
				<input v-model="password" type="text" placeholder="请输入密码" placeholder-class="placeholder-class" />
				<image @click="password=''" class="close-icon" src="@/static/image/login/close_icon.png" />
			</view>
		</view>
		<view class="sun-tip">
			<text class="sun-tip-text" @click="goRegister">注册</text>
		</view>
		<view class="login-btn-box">
			<view class="login-btn" @click="handleSubmit">登录</view>
		</view>
	</view>
</template>

<script>
	import {
		connectWebSocket
	} from "../../store/useWebSocket.js"; //引入socket.js 重要
	export default {
		data() {
			return {
				mobile: '',
				password: ''
			}
		},
		onLoad() {

		},
		methods: {
			handleSubmit() {
				if (!this.mobile) return uni.showToast({
					title: '请输入手机号',
					icon: 'none',
					duration: 1500
				})
				if (!this.password) return uni.showToast({
					title: '请输入密码',
					icon: 'none',
					duration: 1500
				})

				var nowDate = new Date();
				// 自己发出的消息
				let myId = this.myuid // 自己的id
				let uid = this.other_partyId // 发给谁的id

				let content = {
					mobile: this.mobile, // 发给谁的id
					password: this.password
				}

				let data = {
					user: uid, // 发给谁的id
					msgType: 'login',
					msgData: content
				}

				let dataStr = JSON.stringify(data)

                connectWebSocket();
                //在跳转其他页面之前判断是否成功连接websocket
                this.$Socket.eventPatch.onOpen((msg,sk)=>{        //监听是否连接成功
                    console.log('连接成功')
                    //关闭其他页面，进入url页面
                    uni.reLaunch({
                        url:"/pages/index/index"
                    })
                    this.$Socket.nsend(dataStr)
                });
			},
			goRegister() {
				uni.redirectTo({
					url: '/pages/register/register'
				})
			}
		}
	}
</script>

<style scoped>
	.sun-logo-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 300rpx;
	}

	.sun-logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180rpx;
		height: 180rpx;
		border-radius: 15rpx;
		background-color: #12C8B9;
		box-shadow: 0rpx 0rpx 30rpx rgba(18, 200, 185, 0.5);
	}

	.close-icon {
		width: 36rpx;
		height: 34rpx;
	}

	.sun-icon-img {
		width: 120rpx;
		height: 120rpx;
	}

	.sun-login-box {
		padding: 20rpx 60rpx;
	}

	.sun-label {
		display: flex;
		align-items: center;
	}

	.label-text {
		margin-left: 16rpx;
		font-weight: 500;
		color: #272e2d;
		font-size: 30rpx;
	}

	.sun-input-box {
		display: flex;
		align-items: center;
		height: 100rpx;
		border-bottom: 1rpx solid #eee;
		padding: 0px 10rpx;
	}

	.sun-input-box input {
		flex: 1;
	}

	.placeholder-class {
		font-size: 30rpx;
		color: #C0C0C0;
	}

	.sun-tip {
		display: flex;
		justify-content: space-between;
		padding: 0rpx 68rpx;
	}

	.sun-tip-text {
		color: #30C6B3;
	}

	.login-btn-box {
		position: absolute;
		bottom: 129rpx;
		left: 0;
		width: 750rpx;
		padding: 50rpx 68rpx 0rpx;
		box-sizing: border-box;
	}

	.login-btn {
		height: 82rpx;
		border-radius: 41rpx;
		background-color: #12C8B9;
		box-shadow: -1px 12px 11px 0px rgba(16, 170, 157, 0.4);
		text-align: center;
		line-height: 82rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: #fff;
	}
</style>
