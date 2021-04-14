<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">游戏简介</block>
		</cu-custom>
		
		<view class="comms">
			<scroll-view class="left" scroll-y>
				<view @click="leftClickHandle(index, item.id)" :class="index === active ? 'active':''"
					v-for="(item, index) in cates" :key="item.id">
					{{item.title}}
				</view>
		
			</scroll-view>
			<scroll-view class="right" scroll-y>
				<view class="item" v-for="(item, index) in imageData" :key="index">
					<image @click="previewImg(item.url)" :src="item.url"></image>
					<text>{{item.title}}</text>
				</view>
				<text v-if="imageData.length === 0"> 暂无数据 </text>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				cates: [{
						id: 1,
						title: '初春踏青'
					},
					{
						id: 2,
						title: '灰色污染'
					},
					{
						id: 3,
						title: '长命百岁'
					},
					{
						id: 4,
						title: '欠债还钱'
					},
					{
						id: 5,
						title: '五一回家'
					},
					{
						id: 6,
						title: '十四喵儿'
					},
					{
						id: 7,
						title: '动漫世界'
					}, {
						id: 8,
						title: '动物世界'
					},
					{
						id: 9,
						title: '动物世界'
					},
					{
						id: 10,
						title: '动物世界'
					},
					{
						id: 11,
						title: '动物世界'
					}
				],
				active: 0,
				imageData: [{
					id: 1,
					url: '../../static/image/icon/dao.png',
					title: 'i`m one'
				}, {
					id: 2,
					url: '../../static/image/icon/dao.png',
					title: 'i`m two'
				}, {
					id: 3,
					url: '../../static/image/icon/dao.png',
					title: 'i`m three'
				}]
			}
		},
		methods: {
			async leftClickHandle(index, id) {
				this.active = index
				// const res = await this.$myRequest({
				// 	url: '/api/getImages/' + id
				// })
			},
			previewImg(current) {
				const urls = this.imageData.map(item => {
					return item.url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.comms {
		height: 98%;
		display: flex; // 横向布局

		.left {
			width: 180rpx;
			height: 100%;
			border-right: 1rpx solid #eee; //边框

			view {
				height: 118rpx;
				line-height: 118rpx;
				color: #333;
				text-align: center;
				font-size: 32rpx;
				border-bottom: 1rpx solid #eee;
			}

			.active {
				background: $common-color;
				color: #fff;
			}
		}

		.right {
			width: 480rpx;
			height: 100%;
			margin: 10rpx auto;

			.item {
				margin-bottom: 50rpx;

				image {
					width: 480rpx;
					height: 480rpx;
					border-radius: 15rpx;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;

				}
			}
		}
	}
</style>
