<template>
	<view class="nav">
		<block v-for="(item, index) in navData" :key="index">
			<view class="nav_item" :class="[{ active: item.GlobalValue == newActiceNavId }]" @tap="clickNav" :data-id="item.GlobalValue">
				{{ item.Name }} 
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'rank-nav',
		props: {
			navData: {
				type: Array,
				default: e => []
			},
			activeNavId: {
				type: String,
				default: "1"
			}
		},
		onReady() {
			//打开加载动画
			this.$refs.loading
			//关闭加载动画
			// this.$refs.loading.close()
		},
		data() {
			return {
				newActiceNavId: "1"
			};
		},
		methods: {
			clickNav(e) {
				this.newActiceNavId = e.currentTarget.dataset.id
				this.commit()
			},
			commit() {
				this.$emit('navReturnData', this.newActiceNavId)
			}
		},

		created: function(e) {}
	};
</script>

<style lang="scss">
	.nav {
		width: 750upx;
		@include height(72upx); //scss引入自定义函数。  uni.scss里uniapp会自动引入里边所有的css
		display: flex;
		align-items: center;
		background: #ffffff;
		border: 1upx solid #f4f5f6;

		.nav_item {
			@include height(18upx); //scss引入自定义函数。  uni.scss里uniapp会自动引入里边所有的css
			padding: 0 30upx;
			white-space: nowrap;
			font-family: PingFangSC-Regular;
			font-size: 24upx;
			color: #999;
			letter-spacing: 0;
			text-align: center;
		}

		.nav_item:last-child {
			border-right: 0;
		}

		.active {
			color: #14b9c8;
		}
	}
</style>
