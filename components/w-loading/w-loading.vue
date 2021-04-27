<template>
	<view class="mask" :class="mask == 'true' || mask == true ? 'mask-show' : ''" @click="Mclose" v-if="show"
		@touchmove.stop.prevent="preventTouchMove">
		<!-- 加载动画开始 -->
		<!-- loading1~loading30挑选任意一个替换下方html 且替换对应css -->
		<view class="loader loading11">
			<view class="line line1"></view>
			<view class="line line2"></view>
			<view class="line line3"></view>
		</view>
		<!-- 加载动画结束 -->
		<view class="title">{{text}}</view>
	</view>
	<!-- 遮罩层-->
</template>

<script scoped="true">
	export default {
		name: "w-loading",
		props: {
			text: String,
			mask: Boolean | String,
			click: Boolean | String,
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			preventTouchMove() {
				console.log('stop user scroll it!');
				return;
			},
			Mclose() {
				if (this.click == 'false' || this.click == false) {
					this.show = false
				}
			},
			open() {
				this.show = true
			},
			close() {
				this.show = false
			}
		}
	};
</script>

<style>
	.mask {
		/* pointer-events: none; */
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.mask.mask-show {
		background: rgba(7, 17, 27, .3);
	}

	.title {
		color: #fff;
		font-size: 28upx;
	}





	.loader {
		position: relative;
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin: 75upx;
		display: inline-block;
		vertical-align: middle;
	}

	.loading11 .line {
		width: 8upx;
		position: absolute;
		border-radius: 5upx;
		bottom: 0;
		background: -webkit-gradient(linear,
				left top,
				left bottom,
				from(#1ee95d),
				to(#5714ce));
		background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
		background: linear-gradient(to bottom, #1ee95d, #5714ce);
	}

	.loading11 .line1 {
		left: 0;
		-webkit-animation: line-grow 0.5s ease alternate infinite;
		animation: line-grow 0.5s ease alternate infinite;
	}

	.loading11 .line2 {
		left: 20upx;
		-webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
		animation: line-grow 0.5s 0.2s ease alternate infinite;
	}

	.loading11 .line3 {
		left: 40upx;
		-webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
		animation: line-grow 0.5s 0.4s ease alternate infinite;
	}

	@-webkit-keyframes line-grow {
		0% {
			height: 0;
		}

		100% {
			height: 75%;
		}
	}

	@keyframes line-grow {
		0% {
			height: 0;
		}

		100% {
			height: 75%;
		}
	}
</style>
