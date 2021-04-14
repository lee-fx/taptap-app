<template>
	<view>
		<!-- 评分  -->
		<view class="mana">
			<view class="mana_left">
				<view class="top">
					<image src="../../../static/image/icon/mana_blue.png"></image>
					<text>5.7</text>
				</view>
				<text>1936个评价</text>
			</view>

			<view class="mana_right">
				<view class="score_item" v-for="(item, index) in scoreInfo" :key="index">

					<view class="left-info">
						<view class="left" v-for="i of item.mana" :key="i">
							<image src="../../../static/image/icon/mana_333.png"></image>
						</view>
					</view>

					<view class="right-info">
						<view class="right">
							<progress :percent="item.score" activeColor="#14B9C8" active stroke-width="6" />
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="border"></view> -->

		<!-- 评论区 -->
		<view class="comment_btn">
			<scroll-view class="nav" scroll-x>
				<view @click="clickCommentItem(index ,item.id)" v-for="(item, index) in commentInfo" :key="index"
					:class="active === index ? 'active': ''">
					<text>
						{{item.title}}
					</text>
				</view>
			</scroll-view>
		</view>

		<view class="info">
			<view class="comment_info">
				<view class="top">
					<image src="../../../static/image/icon/dao.png"></image>
					<view class="top_title">
						<view class="name">lfxpupa</view>
						<view class="time">两天前</view>
					</view>
				</view>

				<view class="manaa">
					<uni-rate :readonly="true" size="12" color="#fafaea" activeColor="#14B9C8" :value="rate"
						:is-fill="false" />
					<text v-if="rate <= 1">讨厌</text>
					<text v-if="rate <= 2 && rate > 1">不喜欢</text>
					<text v-if="rate <= 3 && rate > 2">还可以</text>
					<text v-if="rate <= 4 && rate > 3">很不错</text>
					<text v-if="rate <= 5 && rate > 4">棒极了</text>

				</view>

				<view class="info_comment">
					{{comment}}
				</view>


				<view class="bottom">
					<image src="../../../static/image/icon/cyx.png"></image>
					<image src="../../../static/image/icon/dz.png"></image>
					<image src="../../../static/image/icon/pl.png"></image>
				</view>
			</view>

			<view class="comment_info">
				<view class="top">
					<image src="../../../static/image/icon/dao.png"></image>
					<view class="top_title">
						<view class="name">lfxpupa</view>
						<view class="time">两天前</view>
					</view>
				</view>

				<view class="manaa">
					<uni-rate :readonly="true" size="12" color="#fafaea" activeColor="#14B9C8" :value="rate"
						:is-fill="false" />
					<text v-if="rate <= 1">讨厌</text>
					<text v-if="rate <= 2 && rate > 1">不喜欢</text>
					<text v-if="rate <= 3 && rate > 2">还可以</text>
					<text v-if="rate <= 4 && rate > 3">很不错</text>
					<text v-if="rate <= 5 && rate > 4">棒极了</text>

				</view>

				<view class="info_comment">
					{{comment}}
				</view>
				
				<view class="bottom">
					<image src="../../../static/image/icon/cyx.png"></image>
					<image src="../../../static/image/icon/dz.png"></image>
					<image src="../../../static/image/icon/pl.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			rate: {
				type: Number,
				default: 1
			},
			scoreInfo: {
				type: Array,
				default: e => {}
			},
			commentInfo: {
				type: Array,
				default: e => {}
			}
		},
		data() {
			return {
				active: 0,
				comment: '玩了两百天才来评下论。这游戏真的太！佛！了！到现在我也才做了140的任务。近两个星期明明仅仅只是收了收菜，偶尔才做做菜，我的玉璧却不知不觉的攒到了五千。不得不感叹，玩这个游戏真的太轻松了。'
			}
		},
		methods: {
			clickCommentItem(index, id) {
				this.active = index
			},
		}
	}
</script>

<style lang="scss">
	.mana {
		display: flex;
		width: 750rpx;
		height: 152rpx;
		margin: 15rpx 0;

		.mana_left {
			width: 292rpx;
			height: 152rpx;

			.top {
				display: flex;
				width: 292rpx;
				height: 104rpx;
				align-items: center;
				justify-content: center;


				image {
					width: 56rpx;
					height: 56rpx;
					margin-right: 4rpx;
				}

				text {
					height: 104rpx;
					line-height: 104rpx;
					font-size: 68rpx;
					font-weight: 700;
					color: #15c5ce;
				}

			}

			text {
				color: #15c5ce;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}


		.mana_right {
			width: 394rpx;
			height: 152rpx;

			.score_item {
				display: flex;
				margin-bottom: 2rpx;
				margin-top: 8rpx;

				.left-info {
					width: 120rpx;
					margin-right: 12rpx;

					.left {
						width: 20rpx;
						height: 20rpx;
						display: flex;
						float: right;

						image {
							width: 20rpx;
							height: 20rpx;
						}
					}
				}

				.right {
					width: 246rpx;
					height: 20rpx;

					progress {
						width: 246rpx;
						height: 20rpx;
					}
				}

			}
		}
	}

	.border {
		border-bottom: 5rpx solid #EEEEEE;
	}

	.comment_btn {
		width: 750rpx;
		// height: 88rpx;


		.nav {
			width: 750rpx;
			height: 80rpx;
			white-space: nowrap; // 段落中文本不进行换行

			view {
				padding: 0 10rpx; // 上 右 下 左
				height: 56rpx; // 属性设置元素的高度。
				line-height: 56rpx; // 属性设置行间的距离（行高）

				border-radius: 8rpx; // 圆角
				border-style: solid;
				border-width: 1px;
				border-color: #E7EBED;


				display: inline-block; // 让块级元素在一行内显示 
				margin-left: 20rpx; // 左侧给个宽度

				text {
					color: #14B9C8; // 字体颜色
					font-size: 28rpx;
				}
			}

			.active {
				background: #14B9C8;

				text {
					color: #fff; // 字体颜色
					font-size: 28rpx;
				}
			}

		}
	}

	.info {
		width: 750rpx;
		padding: 32rpx;
		box-sizing: border-box;

		.comment_info {
			width: 622rpx;
			height: auto;
			margin-bottom: 32rpx;
			padding: 32rpx;
			background: #f9f9f9;
			border-radius: 15rpx;

			.top {
				width: 622rpx;
				height: 82rpx;
				display: flex;
				box-sizing: border-box;
				align-items: center;

				image {
					width: 80rpx;
					height: 80rpx;
				}

				.top_title {
					width: 536rpx;
					padding: 0rpx 20rpx;

					.name {
						color: #1d2127;
						margin-right: 8rpx;
					}

					.time {
						color: #868c92;
						margin-right: 4rpx;
						font-size: 28rpx;
					}
				}
			}

			.manaa {
				display: flex;
				align-items: center;
				height: 48rpx;
				margin-top: 24rpx;

				text {
					display: flex;
					align-items: center;
					margin-left: 25rpx;
					font-size: 20rpx;
					color: #1CBBB4;
				}
			}

			.info_comment {
				margin-bottom: 10rpx;
				font-size: 28rpx;
			}

			.bottom {
				width: 622rpx;
				height: 40rpx;

				image {
					height: 32rpx;
					width: 32rpx;
					float: left;
					margin-right: 40rpx;
					float: right;
				}
			}
		}
	}
</style>
