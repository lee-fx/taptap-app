<template>
	<scroll-view class="dynamic scroll_view" @scroll="upScroll" :scroll-y="true" :style="{ height: scrollHeight + 'px' }">
		<block v-for="(item, index) in dynamicData" :key="index">
			<view class="dynamic_item" :scroll-into-view="'content_' + index">
				<view class="title">
					<view class="title_ft"><image src="/static/image/dynamic/demo_dy.png" mode=""></image></view>
					<view class="title_bd">
						<view class="name">王者荣耀</view>
						<view class="desc">4小时前</view>
					</view>
				</view>
				<view class="content" :class="{ show: item.show == 2, hide: item.show == 3 }">
					<text :decode="true">
						“结光阴为礼，趣峡谷过节”，荣耀中国节四款新皮肤英雄揭晓\n 昨天发布的悬念海报中的4位英雄，召唤师们都猜出来了吗？小妲己来公布答案了 ——李元芳邀你清明共踏青——
						清明节又称踏青节，春意盎然，万物萌动之时，迎春郊游于野外，放飞风筝寄希望。快来和元芳一起迎接春日。 ——蒙犽邀你端午赛龙舟——
						端午节习俗甚多，形式多样，内容丰富，赛龙舟与食粽两大习俗自古传承，至今不辍。让人期待，这次蒙犽将怎么过端午呢？ ——王昭君邀你七夕祈美好——
						七夕节又称乞巧节，祈福祈愿
					</text>
					<view class="fulltext" v-if="item.show != 2" @tap="handelFull" :data-index="index">全文</view>
					<view class="fulltext" v-if="item.show == 2" @tap="handelFull" :data-index="index">收起</view>
				</view>

				<view class="content_image" v-if="item.type == 1">
					<block v-for="(image, kimage) in item.img_url" :key="kimage"><image class="grid3" :src="image" mode="aspectFill"></image></block>
				</view>

				<view class="content_image" v-if="item.type == 2"><image class="grid1" :src="item.img_url" mode="aspectFill"></image></view>
				<view class="content_image" v-if="item.type == 3">
					<view class="grid2_view">
						<image class="grid2" :src="item.img_url" mode="widthFix"></image>
						<view class="icon_long">长图</view>
					</view>
				</view>
				<view class="content_image" v-if="item.type == 4">
					<video
						class="video"
						:id="'myVideo' + index"
						:src="item.video_url"
						poster="/static/image/dynamic/demo4.jpg"
						:show-play-btn="false"
						@error="videoErrorCallback"
						controls
					></video>
				</view>
				<view class="handle_view">
					<view class="handle_ft">
						<view class="share icon icon-fenxiang"></view>
						<view class="comment icon icon-pinglun"><span>67</span></view>
						<view class="like icon icon-dianzan" :class="{ active: item.like }" @tap="handelLike(index)">
							<span>{{ item.like_num }}</span>
						</view>
					</view>
					<view class="handel_more icon icon-gengduo_huaban"></view>
				</view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
import { debounce, throttle } from '@/util/debounceThrottle.js';
let observeron = null;
let observerout = null;
export default {
	name: 'dymanic-list',
	props: {
		activeNavId: {
			type: Number,
			default: 0
		},
		dynamicData: {
			type: Array,
			default: e => {}
		}
	},
	mounted() {
		// if (this.activeNavId == 0) {
		// 	this.newActiceNavId = this.navData[0].id;
		// 	this.commit();
		// }
		let _this = this;
		var data = this.dynamicData;
		for (var k in data) {
			console.log(k);
			data[k].show = 1; //初始状态
			data[k].like = false;
		}
		this.dynamicData = data;
		console.log(this.dynamicData);
		observeron = uni.createIntersectionObserver(this, { thresholds: [0], initialRatio: 0, observeAll: true });
		observeron.relativeTo('.scroll_view', { top: 0, bottom: 200 }).observe('.video', res => {
			console.log('触发相交');
			console.log(res);
			if (res.intersectionRect.top != 0) {
				if (this.videoContext) {
					this.videoContext.pause(); //暂停
				}
				// res.id 视频id
				this.videoContext = uni.createVideoContext(res.id, this);
				setTimeout(() => {
					this.videoContext.play(); //播放
				});
			}
		});

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
		activeNavId: (newValue, oldValue) => {
			console.log('导航chufa');
		}
	},
	onUnload() {
		if (observer) {
			observer.disconnect();
		}
	},
	data() {
		return {
			newActiceNavId: 0,
			oldScrollTop: 0,
			scrollHeight: 0,
			tolower: 200, //距离200px的时候触底上拉加载
			videoContext: null,
			
		};
	},
	watch: {
		activeNavId: (newValue, oldValue) => {
			console.log('chufa');
		}
	},
	methods: {
		handelLike(index) {
			var data = this.dynamicData[index];
			console.log(data.like);
			console.log(!data.like);

			data.like = !data.like;
			if (data.like) {
				data.like_num = data.like_num + 1;
			} else {
				data.like_num = data.like_num - 1;
			}
			this.dynamicData[index] = data;
			console.log(data);
			this.$set(this.dynamicData, index, data);
		},
		handelFull(e) {
			let index = e.currentTarget.dataset.index;
			var data = this.dynamicData[index];
			data.show = data.show == 2 ? 3 : 2;
			this.dynamicData[index] = data;
			this.$set(this.dynamicData, index, data);
		},
		upScroll(e) {},
		handelNav(e) {
			this.newActiceNavId = e.currentTarget.dataset.id;
			this.commit();
		},
		commit() {
			this.$emit('dynamicListReturn', this.newActiceNavId);
		},
		videoErrorCallback() {
			console.log('播放失败');
		}
	},

	created: function(e) {}
};
</script>

<style lang="scss">
.dynamic {
	width: 750upx;
	height: 100vh;

	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;

	::-webkit-scrollbar {
		display: none;
	}

	.dynamic_item {
		width: 750upx;
		padding: 32upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #d2d7d9;
		box-shadow: inset 0 -2upx 0 var(--extension-divider-gray);

		&:first-child {
			border-top: 1upx solid #d2d7d9;
		}
	}

	.title {
		width: 678upx;
		display: flex;

		.title_ft {
			image {
				width: 96upx;
				height: 96upx;
				display: block;
			}
		}
		.title_bd {
			flex: 1;
			padding-left: 20upx;
			box-sizing: border-box;
			word-break: break-word;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.name {
				font-size: 36upx;
				color: #333;
				font-weight: 500;
			}
			.desc {
				font-size: 28upx;
				color: #999;
			}
		}
	}
	.content {
		width: 678upx;
		margin-top: 10upx;
		max-height: 200upx;
		overflow: hidden;
		// text-overflow: ellipsis;
		// display: -webkit-box;
		// -webkit-line-clamp: 4;
		// -webkit-box-orient: vertical;
		line-height: 48upx;
		font-size: 30upx;
		color: #333;
		position: relative;

		.fulltext {
			position: absolute;
			right: 0;
			bottom: 0;
			display: inline-block;
			width: auto;
			margin: 0;
			line-height: 22px;
			font-size: 28upx;
			padding: 0 6upx 0 48upx;
			background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 30%);
			color: #14b9c8;
			cursor: pointer;
		}
	}

	.show {
		animation: showall 2s ease 0s 1;
		-webkit-animation: showall 2s ease 0s 1;
		animation-fill-mode: forwards;
	}
	@keyframes showall {
		0% {
			max-height: 200upx;
		}
		100% {
			max-height: 1400upx;
		}
	}
	.hide {
		animation: hideall 0.3s ease 0s 1;
		-webkit-animation: hideall 0.3s ease 0s 1;
		animation-fill-mode: forwards;
	}
	@keyframes hideall {
		0% {
			max-height: 1200upx;
		}
		100% {
			max-height: 200upx;
		}
	}
}

.content_image {
	width: 689upx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 20upx 0;

	.grid3 {
		width: 222upx;
		height: 222upx;
		margin-left: 10upx;

		&:nth-child(1) {
			margin-left: 0;
		}
	}

	.grid1 {
		max-width: 100%;
		height: 254upx;
	}

	.grid2_view {
		width: 454upx;
		height: 604upx;
		overflow: hidden;
		position: relative;
		.grid2 {
			width: 454upx;
			height: 604upx;
		}
		.icon_long {
			position: absolute;
			right: 8upx;
			bottom: 8upx;
			border-radius: 40upx;
			color: #fff;
			text-align: center;
			padding: 4upx 12upx;
			font-weight: 700;
			font-size: 16upx;
			background: rgba(0, 0, 0, 0.4);
		}
	}

	.video {
		width: 686upx;
		height: 386upx;
	}
}
.handle_view {
	width: 689upx;
	height: 80upx;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.handle_ft {
		display: flex;
		align-items: center;
		width: 320upx;
		justify-content: space-around;
		.icon {
			font-size: 36upx;
			@include height(40upx);
		}
		.active:before {
			color: rgb(20, 185, 200);
		}
		span {
			color: #666;
			font-size: 24upx;
		}
	}
}
</style>
