<template>
	<view class="" v-if="loaded || newShowLoading">
		<view class="loading_view" v-if="loaded"><span>没有更多了</span></view>
		<view class="loading_view" v-else-if="newShowLoading">
			<image src="/static/image/icon/loading.gif" mode="aspectFit"></image>
			<span>加载中……</span>
		</view>
	</view>
</template>

<script>
export default {
	name: 'loading',
	props: {
		showLoading: {
			type: Boolean,
			default: false
		},
		loaded: {
			type: Boolean,
			default: false
		}
	},
	mounted() {},
	watch: {
		showLoading(newValue, old) {
			this.newShowLoading = newValue;
		},
		showLoaded(newValue, old) {}
	},
	data() {
		return {
			newShowLoading: false
		};
	},
	methods: {},
	created: function(e) {}
};
</script>

<style lang="scss">
.loading_view {
	width: 750upx;
	height: 100upx;
	display: flex;
	align-items: center;
	justify-content: center;
	image {
		width: 100upx;
		height: 100upx;
	}
}
</style>
