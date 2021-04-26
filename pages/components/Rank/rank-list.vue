<template>
	<view class="rank_data">
		<scroll-view class="scroll_view">
			<block v-for="(item, index) in games" :key="index">
				<view class="rank_item">
					<view class="item_ft">
						<view class="left">{{ index + 1 }}</view>
						<view class="center">
							<image :src="item.Icon" mode=""></image>
						</view>
						<view class="right">
							<view class="name">{{ item.Name }}</view>
							<view class="score icon icon-pingfendengjiRating4">{{item.Mana}}</view>
							<view class="label">
								<view class="label_item">{{item.GameTag}}</view>
								<!-- <view class="label_item">动漫</view>
								<view class="label_item">高画质</view> -->
							</view>
						</view>
					</view>
					<view class="item_bd" @click="goGameDetail(item.Id)">
						<view class="info">详情</view>
					</view>
				</view>
			</block>
			<Loading :showLoading="showLoading" :loaded="loaded"></Loading>
		</scroll-view>
	</view>
</template>

<script>
	import Loading from '@/components/loading/loading.vue';
	
	export default {
		name: 'rank-list',
		props: {
			newActive: {
				type: String,
				default: "0"
			},
			games: {
				type: Array,
				default: e => []
			}
		},
		components: {
			Loading
		},
		data() {
			return {
				newActiceNavId: 0,
				showLoading: false, //是否显示loading
				loaded: false,
				gameData: []
			};
		},
		methods: {
			commit() {
				this.$emit('navReturnData', this.newActiceNavId);
			},
			// 跳转到游戏详情页面
			goGameDetail(id) {
				uni.navigateTo({
					url: '/pages/game-detail/game-detail?id=' + id
				})
			}
		}
	};
</script>

<style lang="scss">
	.scroll_view {
		width: 750upx;
		padding: 0 20upx;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;

		::-webkit-scrollbar {
			display: none;
		}
	}

	.rank_item {
		width: 710upx;
		height: 172upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		border-bottom: 1upx solid #eee;

		.item_ft {
			width: 650upx;

			height: 172upx;
			display: flex;
			align-items: center;

			.left {
				width: 50upx;
				@include height(28upx);
				text-align: center;
				color: #fe931b;

				font-size: 28upx;
			}

			.right {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
				flex: 1;
				padding-left: 20upx;
				margin: 0;
				font-family: PingFangSC-Medium;
				color: #333;
				letter-spacing: 0;
				height: 172upx;

				.name {
					@include height(40upx);
					margin-top: 20upx;
				}

				.score {
					color: #14b9c8;
				}

				.label {
					display: flex;
					align-items: center;
					margin-top: auto;
					margin-bottom: 20upx;

					.label_item {
						background: #f8f8f8;
						border: 1upx solid #e9e9e9;
						border-radius: 6upx;
						font-size: 20upx;
						color: #999;
						letter-spacing: 0;
						text-align: center;
						margin-right: 10upx;
						padding: 0 6upx;
						display: inline-block;
					}
				}
			}
		}

		.info {
			@include height(52upx);
			width: 120upx;
			background: #14b9c8;
			border-radius: 10upx;
			font-size: 24upx;
			color: #fff;
			letter-spacing: 0;
			text-align: center;
			border: 0;
		}

		image {
			width: 120upx;
			height: 120upx;
			display: block;
			margin-left: 10upx;
		}
	}

	.score_text {
		margin-right: 8upx;
	}
</style>
