<template>
	<view class="nav">
		<block v-for="(item, index) in navData" :key="index">
			<view class="nav_item" :class="[{ active: item.id == newActiceNavId }]" @tap="handelNav" :data-id="item.id">{{ item.name }}</view>
		</block>
		<view class="nav_right">
			<view class="box_radius remind icon icon-sousuo"></view>
			<view class="box_radius header"><image src="/static/image/icon/header.png" mode=""></image></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'dynamic-nav',
	props: {
		navData: {
			type: Array,
			default: e => {}
		},
		activeNavId: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		if (this.activeNavId == 0) {
			// this.newActiceNavId = this.navData[0].id;
			this.newActiceNavId = 2;
			this.commit();
		}
	},
	data() {
		return {
			newActiceNavId: 0
		};
	},

	watch: {
		activeNavId: (newValue, oldValue) => {
			console.log('chufa');
		}
	},

	methods: {
		handelNav(e) {
			this.newActiceNavId = e.currentTarget.dataset.id;
			this.commit();
		},
		commit() {
			this.$emit('dynamicNavReturn', this.newActiceNavId);
		}
	},

	created: function(e) {}
};
</script>

<style lang="scss">
.nav {
	width: 750upx;
	@include height(78upx); //scss引入自定义函数。  uni.scss里uniapp会自动引入里边所有的css
	display: flex;
	align-items: center;
	background: #ffffff;
	position: relative;
	box-shadow: inset 0 1upx 0 var(--extension-divider-gray);

	.nav_item {
		@include height(64upx); //scss引入自定义函数。  uni.scss里uniapp会自动引入里边所有的css
		padding: 0 30upx;
		white-space: nowrap;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #999;
		letter-spacing: 0;
		text-align: center;
		position: relative;

		&:after {
			content: '';
			width: 0;
			height: 0;
			border-bottom: 4upx solid #15c5ce;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			transition: 0.3s;
		}
	}

	.active {
		font-size: var(--heading-m20-w22-size);
		font-weight: bolder;
		color: #333;
		&:after {
			width: 50%;
		}
	}
	.nav_right {
		width: 150upx;
		@include height(78upx);
		position: absolute;
		right: 20upx;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
}
.box_radius {
	width: 56upx;
	@include height(56upx);
	font-size: 32upx;
	text-align: center;
	border-radius: 50%;
	box-shadow: 0 6upx 12upx rgba(163, 167, 168, 0.3);
}
.search {
}
.remind {
}
.header {
	box-sizing: border-box;
	image {
		width: 56upx;
		height: 56upx;
		background: #fff;
		border-radius: 50%;
	}
}
</style>
