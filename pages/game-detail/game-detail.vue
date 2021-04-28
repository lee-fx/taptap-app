<template>
	<view class="home">
		<cu-custom bgColor="bg-cyan" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">游戏简介</block>
		</cu-custom>

		<view class="header_top">
			<view class="game_icon">
				<image :src="gameData.Icon"></image>
			</view>
			<view class="r_btn">
				<view class="gz">
					<image src="../../static/image/icon/hert.png"></image>
					<text>关注</text>
				</view>
			</view>
		</view>

		<view class="game_info">
			<view class="game_name">{{gameData.Name}}</view>
			<view class="game_company">
				<text>厂商：{{gameData.Company}}</text>
			</view>
			<view class="game_mana">
				<!-- 未选中的星星为镂空状态 -->
				<view class="mana">
					<uni-rate :readonly="true" size="16" color="#b0b0a4" activeColor="#14B9C8" :value="gameData.Mana"
						:is-fill="false" />
				</view>
				<view>
					<text>{{gameData.Mana}}</text>
				</view>
			</view>
			<view class="game_attention">
				<text>{{gameData.Attention}}人关注</text>
			</view>

			<view class="down">
				<view class="btn">
					<image src="../../static/image/icon/android.png"></image>

					<!-- #ifdef APP-PLUS-->
					<text class="table-btn" @click="dow()">下载</text>
					<!-- #endif -->

					<!-- #ifdef H5 -->
					<a class="table-btn" href="http://47.94.227.188:3344/apk/__UNI__B634BE4_0428141950.apk">下载</a>
					<!-- #endif -->
				</view>
			</view>
		</view>

		<view class="tabbar">
			<view class="bar_btn">
				<view class="bar_item" v-for="(item, index) in tabbar" :key="index"
					@click="leftClickHandle(index, item.id)" :class="index === active ? 'active':''">
					<text class="txt">{{item.text}}</text>
					<view class="bar" :class="index === active ? 'back-color':''"></view>
				</view>
			</view>
		</view>

		<game-detail v-show="active == 0" :gameData="gameData" :allInfo="allInfo" :claimInfo="claimInfo"
			:bannerInfo="bannerInfo">
		</game-detail>

		<game-comment v-show="active == 1" :scoreInfo="scoreInfo" :commentInfo="commentInfo" :gameData="gameData">
		</game-comment>

		<game-community v-show="active == 2">
		</game-community>

	</view>
</template>

<script>
	import gameDetail from '@/pages/components/GameDetail/game-detail.vue'
	import gameComment from '@/pages/components/GameDetail/game-comment.vue'
	import gameCommunity from '@/pages/components/GameDetail/game-community.vue'
	import popup from '@/components/popup/popup.vue'

	export default {
		data() {
			return {
				active: 0, // 单选框选中状态
				tabbar: [{ // 单选框元素
						id: 0,
						text: '详情',
						url: 'aaaa/bbbb.html'
					},
					{
						id: 1,
						text: '评价',
						url: 'aaaa/bbbb.html'
					},
					{
						id: 2,
						text: '社区',
						url: 'aaaa/bbbb.html'
					}
				],
				gameData: {},
				allInfo: [{
						title: '文件大小',
						val: '518.93'
					},
					{
						title: '当前版本',
						val: '1.12.1257'
					},
					{
						title: '更新时间',
						val: '2021年3月26日'
					},
					{
						title: '厂商',
						val: 'tencent'
					}
				],
				claimInfo: [ // 手机要求
					{
						url: "../../static/image/icon/android.png",
						title: "无需网络"
					},
					{
						url: "../../static/image/icon/android.png",
						title: "无系统要求"
					}
				],
				bannerInfo: [{
						id: 1,
						url: "../../static/image/banner/b1.jpg"
					},
					{
						id: 2,
						url: "../../static/image/banner/b2.jpg"
					},
					{
						id: 3,
						url: "../../static/image/banner/b3.jpg"
					},
					{
						id: 4,
						url: "../../static/image/banner/b4.jpg"
					},
					{
						id: 5,
						url: "../../static/image/banner/b5.jpg"
					}
				],
				scoreInfo: [{
						mana: 5,
						score: 65
					},
					{
						mana: 4,
						score: 20
					},
					{
						mana: 3,
						score: 13
					},
					{
						mana: 2,
						score: 5
					},
					{
						mana: 1,
						score: 12
					},
				],
				commentInfo: [{
						id: 0,
						title: '全部'
					},
					{
						id: 1,
						title: '好评'
					},
					{
						id: 2,
						title: '中评'
					},
					{
						id: 3,
						title: '差评'
					},
					{
						id: 4,
						title: '动作combo'
					},
					{
						id: 5,
						title: 'MOBA塔防'
					},
					{
						id: 6,
						title: '策略烧脑'
					},
					{
						id: 7,
						title: '家园建造'
					}
				]
			}
		},
		onLoad(option) {
			if (!option.id) {
				option.id = 1
			}
			// console.log(option.id)
			this.getGameInfoById(option.id)
		},
		onReady() {
			//打开加载动画
			this.$refs.loading
			//关闭加载动画
			// this.$refs.loading.close()
		},
		methods: {

			async leftClickHandle(index, id) {
				this.active = id
				// const res = await this.$myRequest({
				// 	url: '/api/getImages/' + id
				// })
			},
			// 跳转到游戏详情页面
			goGameDetail(id) {
				uni.navigateTo({
					url: '/pages/game-detail/game-detail?id=' + id
				})
			},
			// 初始化游戏信息
			async getGameInfoById(id) {
				const res = await this.$myRequest({
					url: '/game/getGameInfoById/' + id,
					method: 'POST'
				})
				// console.log(res.data)
				this.gameData = res.data
			},

			dow() {
				var dtask = plus.downloader.createDownload(
					"http://47.94.227.188:3344/apk/__UNI__B634BE4_0428141950.apk", {},
					function(d, status) {
						plus.nativeUI.closeWaiting();
						// this.$refs.loading.open()
						// 下载完成
						if (status == 200) {
							// this.$refs.loading.close()
							console.log("Download success: " + d.filename);
							var fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
							plus.runtime.openFile(d.filename); //选择软件打开文件
						} else {
							console.log("Download failed: " + status);
						}
					});

				dtask.start();
				var prg = 0;
				var showLoading = plus.nativeUI.showWaiting("正在下载"); //创建一个showWaiting对象 
				dtask.addEventListener('statechanged', (task) => {
					if (!dtask) {
						return;
					}
					switch (task.state) {
						case 1:
							showLoading.setTitle("正在下载");
							break;
						case 2:
							showLoading.setTitle("已连接到服务器");
							break;
						case 3:
							prg = parseInt(parseFloat(task.downloadedSize) / parseFloat(task.totalSize) * 100);
							if (prg % 10 == 0) { // 让百分比 10% 增长，如果这里不这么处理  出现 堆栈内存溢出的问题，有知道原因的大神指导一下哈
								showLoading.setTitle("　　 已下载" + prg + "%　　 ");
							}
							break;
						case 4:
							plus.nativeUI.closeWaiting();
							console.log('ok!!!');
							break;
					}

				});

			}

		},
		components: {
			"game-detail": gameDetail,
			"game-comment": gameComment,
			"game-community": gameCommunity,
			"popup": popup
		}
	}
</script>

<style lang="scss">
	// 去除a标签下划线
	a {
		text-decoration: none
	}

	a:hover {
		text-decoration: none
	}

	.header_top {
		width: 750rpx;
		height: 356rpx;
		display: flex;
		justify-content: space-around;
		position: relative; // 父级相对定位

		.game_icon {
			display: flex;
			width: 750rpx;
			height: 256rpx;
			margin: 60rpx 0 40rpx 0rpx;
			justify-content: center;
			box-sizing: border-box; // 不破坏原始盒子
			text-align: center;

			image {
				width: 256rpx;
				height: 256rpx;
			}
		}

		.r_btn {
			width: 120rpx;
			height: 40rpx;
			position: absolute; // 子类依托子类的绝对定位 另外一个是relative
			right: 20rpx; // 相对定位
			top: 60rpx;

			.gz {
				display: flex;
				align-items: center;

				image {
					width: 36rpx;
					height: 36rpx;
				}

				text {
					font-size: 30rpx;
					text-align: right;
					height: 40rpx;
					color: $common-color;
					margin-left: 10rpx;
				}
			}

		}


	}

	.game_info {
		width: 750rpx;
		height: 358rpx;

		.game_name {
			width: 750rpx;
			height: 60rpx;
			text-align: center;
			font-size: 52rpx;
			line-height: 60rpx;
		}

		.game_company {
			width: 750rpx;
			height: 40rpx;
			text-align: center;
			box-sizing: border-box;
			font-size: 24rpx;
			line-height: 40rpx;
			color: #14B9C8;
		}

		.game_mana {
			width: 750rpx;
			height: 32rpx;
			display: flex;
			justify-content: center; // flex横向布局的纵向居中

			.mana {
				margin-right: 10rpx;
			}

			text {
				display: block;
				color: #7d7d7d;
				font-size: 32rpx;
			}
		}

		.game_attention {
			font-size: 28rpx;
			width: 750rpx;
			height: 50rpx;
			margin-top: 20rpx;
			color: #9f9f9f;
			text-align: center;
		}

		.down {
			width: 750rpx;
			height: 138rpx;
			padding: 0rpx 10rpx 20rpx 10rpx;
			display: flex;
			align-items: center;

			.btn {
				width: 250rpx;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				margin: 20rpx auto;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #14B9C8;
				border-radius: 8rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 8rpx;
					display: block; // inlineblock  block
				}

				.table-btn {
					width: 80rpx;
					height: 40rpx;
					line-height: 40rpx;
					display: block;
					color: #fff;
					font-size: 30rpx;
				}
			}

		}
	}

	.tabbar {
		.bar_btn {
			background: #f1f1f1;
			display: flex;

			.bar_item {
				width: 250rpx;
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #fff;
				margin-top: 10rpx;
				border-bottom: 5rpx solid #EEEEEE;
				position: relative;
			}

			.active {
				color: #14B9C8;
			}

			.back_color {
				background: #14B9C8;
			}

			.bar {
				position: absolute;
				width: 64rpx;
				height: 6rpx;
				right: 90rpx; // 相对定位
				top: 90rpx;
			}
		}
	}
</style>
