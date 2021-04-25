<template>
	<view class="rank_data">
		<scroll-view class="scroll_view" scroll-y="true" :style="{ height: scrollHeight + 'px' }"
			:scroll-with-animation="true" :lower-threshold="tolower" @scroll="upScroll" @scrolltolower="getNextData"
			:scroll-top="newScrollTop" :enable-flex="true">
			<block v-for="(item, index) in gameData" :key="index">
				<view class="rank_item">
					<view class="item_ft">
						<view class="left">{{ index + 1 }}</view>
						<view class="center">
							<image :src="item.img_url" mode=""></image>
						</view>
						<view class="right">
							<view class="name">{{ item.name }}</view>
							<view class="score icon icon-pingfendengjiRating4">9.4</view>
							<view class="label">
								<view class="label_item">武侠</view>
								<view class="label_item">动漫</view>
								<view class="label_item">高画质</view>
							</view>
						</view>
					</view>
					<view class="item_bd">
						<view class="info">详情</view>
					</view>
				</view>
			</block>
			<Loading :showLoading="showLoading" :loaded="loaded"></Loading>
		</scroll-view>
	</view>
</template>

<script>
	import {
		debounce,
		throttle
	} from '@/util/debounceThrottle.js';
	import Loading from '@/components/loading/loading.vue';

	let _this = this;
	export default {
		name: 'rank-list',
		props: {
			newActive: {
				type: Number,
				default: 0
			}
		},
		components: {
			Loading
		},
		mounted() {
			let _this = this;
			uni.$on('gotop', this.eventGoTop);
			uni.getSystemInfo({
				//调用uni-app接口获取屏幕高度
				success(res) {
					//成功回调函数
					let wHeight = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
					let titleH = uni.createSelectorQuery().select('.scroll_view'); //想要获取高度的元素名（class/id）
					titleH
						.boundingClientRect(data => {
							_this.scrollHeight = wHeight - data.top; //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						})
						.exec();
				}
			});
		},
		watch: {
			newActive: function(newValue, oldValue) {
				console.log('每个导航首次触发获取数据chufa');
				this.page = 1;
				this.getGameData();
			}
		},

		data() {
			return {
				newActiceNavId: 0,
				newScrollTop: 0,
				oldScrollTop: 0,
				tolower: 200, //距离200px的时候触底上拉加载
				page: 0,
				size: 3,
				showLoading: false, //是否显示loading
				loaded: false,
				scrollHeight: 0,
				gameData: [],
				gamePushData: [{
						id: 1,
						name: '摩尔庄园1',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 2,
						name: '摩尔庄园2',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 3,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 1,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 2,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 3,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 1,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 2,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 3,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					},
					{
						id: 1,
						name: '摩尔庄园',
						img_url: '/static/image/rank/game_demo.png'
					}
				]
			};
		},
		onShow() {
			console.log(this.page);
			console.log(this.gameData);
		},
		methods: {
			loadingReturnData(param) {},
			upScroll(e) {
				console.log(e);
				this.oldScrollTop = e.detail.scrollTop;
			},
			handelNav(e) {
				this.newActiceNavId = e.currentTarget.dataset.id;
				this.commit();
			},
			getGameData() {
				this.showLoading = true;
				if (this.gameData.length >= 20) {
					this.loaded = true;
					return false;
				}
				if (this.page == 1) {
					this.gameData = this.gamePushData;
				} else {
					this.gameData = this.gameData.concat(this.gamePushData);
				}
				setTimeout(() => {
					this.showLoading = false;
				}, 1000);

				console.log('当前页码' + this.page);
				console.log(this.gameData);
				if (this.gamePushData.length > 0) {
					this.page++;
				}
			},
			getNextData: throttle(
				function(e) {
					this.getGameData();
				},
				1000,
				true
			),
			eventGoTop(e) {
				this.showLoading = false;
				this.loaded = false;
				this.newScrollTop = this.oldScrollTop;
				console.log('接收的值' + e.data);
				if (e.data) {
					this.gameData = [];
				}
				//当视图渲染结束 重新设置为0
				this.$nextTick(() => {
					this.newScrollTop = 0;
				});
			},
			commit() {
				this.$emit('navReturnData', this.newActiceNavId);
			}
		},
		onUnload() {
			//页面卸载，卸载掉函数
			uni.$off('gotop', this.eventGoTop);
		},
		created: function(e) {}
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
