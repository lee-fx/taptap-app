<template>
	<view>
		<view class="header">
			<text>暂未开放</text>
		</view>
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
			return {}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.header {
		width: 750rpx;
		height: 375rpx;
		line-height: 375rpx;
		text-align: center;
		text {
			color: #14B9C8;
			font-size: 36rpx;
			font-weight: 480;
		}
	}
</style>
