<template>
	<view class="contact">
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">开发人员</block>
		</cu-custom>
		<image class="img" src="../../static/image/swipers/lb2.jpg"></image>
		<view class="info">
			<view @click="phoneCall">联系电话：15718815231（点击拨打）</view>
			<view>开发人员：lhy、lfxpupa</view>
			<view>地图位置：</view>
		</view>
		<map :longitude="longitude" :latitude="latitude" :markers="markers" scale="20"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 116.497327, // 经度
				latitude: 39.991244, // 维度
				markers: [{
					longitude: 116.497327,
					latitude: 39.991244,
					iconPath: '../../static/image/icon/dao.png',
					width: 20,
					height: 20
				}]
			}
		},
		methods: {
			phoneCall() {
				uni.makePhoneCall({
					phoneNumber: '15718815231'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 68rpx;
				border-bottom: 5rpx solid #EEEEEE;
			}
		}

		map {
			width: 680rpx;
			height: 380rpx;
			margin: 35rpx 35rpx;
		}
	}
</style>
