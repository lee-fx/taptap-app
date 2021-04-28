<template>
	<view class="home">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">推荐</block>
		</cu-custom>

		<dynamic-nav :navData="navData" :activeNavId="activeNavId" @dynamicNavReturn="dynamicNavReturn">
		</dynamic-nav>

		<!-- <dynamic-list v-show="activeNavId == 1" :dynamicData="dynamicData"></dynamic-list> -->
		<view v-show="activeNavId == 1"> </view>

		<recommond-list v-show="activeNavId == 2" :recommondData="recommondData"></recommond-list>

	</view>
</template>

<script>
	import DynamicNav from '@/pages/components/Dynamic/dynamic-nav.vue';
	// import DynamicList from '@/pages/components/Dynamic/dynamic-list.vue';
	import RecommondList from '@/pages/components/Dynamic/recommond-list.vue';
	export default {
		data() {
			return {
				activeNavId: 2,
				pageIndex: 1,
				to: 6,
				navData: [],
				recommondData: [{
						name: '剑灵1', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo1.jpg',
						show: false
					},
					{
						name: '剑灵2', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo2.jpg',
						show: false
					},
					{
						name: '剑灵3', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo4.jpg',
						show: false
					},
				],
				dynamicData: [{
						type: 1, //网格图片
						img_url: ['/static/image/dynamic/demo1.jpg', '/static/image/dynamic/demo1.jpg',
							'/static/image/dynamic/demo1.jpg'
						],
						like_num: 104
					},
					{
						type: 2, //宽图
						img_url: '/static/image/dynamic/demo2.jpg',
						like_num: 103
					},
					{
						type: 3, //长图
						img_url: '/static/image/dynamic/demo3.jpg',
						like_num: 101
					},
					{
						type: 4, //视频
						img_url: 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/8c2eb53e5285890807999880271/v.f42906.mp4',
						video_url: 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/8c2eb53e5285890807999880271/v.f42906.mp4',
						like_num: 107
					},
					{
						type: 5, //纯文字
						like_num: 109
					}
				],
				recommondData1: []
			}
		},
		onLoad() {
			this.getNavs()
			this.getAllGames(1)
		},
		components: {
			DynamicNav,
			// DynamicList,
			RecommondList
		},
		methods: {

			// 获取navs
			async getNavs() {
				const res = await this.$myRequest({
					url: '/home/getConfigs/RECOMMOND_NAV',
					method: 'POST'
				})
				// console.log(res.data)
				this.navData = res.data
			},

			//子组件返回响应
			dynamicNavReturn(param) {
				console.log(param);
				this.activeNavId = param;
				this.newActive = param;
				// console.log('改变后的值' + this.newActive);
			},

			// 推荐游戏列表
			async getAllGames(type) {
				const res = await this.$myRequest({
					url: '/game/getAllGames/' + type + '/' + this.pageIndex + '/' + this.to,
					method: 'POST'
				})
				console.log(res.data)
				this.recommondData = [...this.recommondData, ...res.data]
			},
		}
	};
</script>

<style lang="scss"></style>
