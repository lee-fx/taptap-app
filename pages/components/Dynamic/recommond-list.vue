<template>
	<view class="recommond">
		<block v-for="(item, index) in newRecommondData" :key="index">
			<view class="recommond_item" @tap="gotoGame" :data-index="index" :data-id="item.id">
				<view class="item_image">
					<image :src="item.img_url" mode="aspectFill"></image>
					<view class="hui" v-if="item.show"></view>
				</view>
				<view class="item_content">
					<view class="content_ft">
						<view class="title">
							<view class="name">{{ item.name }}</view>
							<view class="btn">关注</view>
						</view>
						<view class="desc">{{ item.desc }}</view>
					</view>
					<view class="content_bd">
						<view class="logo">score mana</view>
						<view class="score">{{ item.score }}</view>
						<!-- <view class="more icon icon-gengduo_huaban"></view> -->
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	name: 'recommond-list',
	props: {
		recommondData: {
			type: Array,
			default: e => {}
		},
		activeNavId: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			newRecommondData:[]
		};
	},
	mounted() {
		this.newRecommondData = this.recommondData
		// console.log(this.recommondData);
	},
	watch: {},

	methods: {
		gotoGame(e){
			var dataset = e.currentTarget.dataset
			var index = dataset.index
			var data = this.newRecommondData[index]
			data.show = true
			this.$set(this.newRecommondData,index,data)
			setTimeout(() => {
				data.show = false
				this.$set(this.newRecommondData,index,data)
				uni.navigateTo({
					url:'/pages/game-detail/game-detail',
				})
			},300)
			
		}
	},

	created: function(e) {}
};
</script>

<style lang="scss">
.recommond {
	width: 750upx;

	.recommond_item {
		width: 686upx;
		height: 528upx;
		box-shadow: 0 40upx 40upx rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		margin-top: 40upx;
		border-radius: 16upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.item_image {
			width: 686upx;
			height: 386upx;
			position: relative;
			overflow: hidden;

			.hui {
				width: 1050upx;
				height: 1000upx;
				background: #999;
				opacity: 0.5;
				border-radius: 700upx;
				position: absolute;
				right: -1050upx;
				bottom: -800upx;
				-webkit-animation: opacity .2s linear 1;
				animation-fill-mode: forwards;
			}
		}
		.item_content {
			flex: 1;
			display: flex;
			justify-content: space-between;
			padding: 0 20upx;
			box-sizing: border-box;
		}
		.content_ft {
			display: flex;
			align-items: space-between;
			flex-direction: column;
			margin-top: 10upx;
			.title {
				display: flex;
				align-items: flex-end;
				.name {
					font-size: 48upx;
					font-weight: bolder;
				}
				.btn {
					height: 40upx;
					display: inline-flex;
					padding: 4upx 12upx;
					border: 2upx solid #ebeff0;
					color: #868c92;
					font-size: 24upx;
					border-radius: 8upx;
					line-height: 40upx;
					margin-left: 10upx;
				}
			}
			.desc {
				font-size: 24upx;
				color: #868c92;
				margin-top: 10upx;
			}
		}
		.content_bd {
			height: 100%;
			position: relative;
			padding-right: 10upx;
			box-sizing: border-box;
			.logo {
				width: 186upx;
				@include height(64upx);
				color: #15c5ce;
				font-weight: bolder;
				text-align: right;
			}
			.score {
				color: #15c5ce;
				font-size: 50upx;
				text-align: right;
				font-weight: bolder;
			}
			.more {
				position: absolute;
				right: 10upx;
				bottom: 20upx;
			}
		}
		image {
			width: 686upx;
			height: 386upx;
		}
	}
}



@keyframes opacity {
	0% {
		-webkit-transform: translate(20%, 20%);
		transform: translate(0%, -40%);
	}
	50% {
		-webkit-transform: translate(-50%, -60%);
		transform: translate(-50%, -40%);
	}
	100% {
		-webkit-transform: translate(-80%, -40%);
		transform: translate(-80%, -40%);
	}
}
</style>
