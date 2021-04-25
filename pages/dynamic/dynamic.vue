<template>
	<view class="home">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="content">推荐</block>
		</cu-custom>
		
		<dynamic-nav :navData="navData" :activeNavIndex="activeNavId" @dynamicNavReturn="dynamicNavReturn">
		</dynamic-nav>
		<dynamic-list v-show="activeNavId == 1" :dynamicData="dynamicData"></dynamic-list>
		<recommond-list v-show="activeNavId == 2" :recommondData="recommondData"></recommond-list>
		
	</view>
</template>

<script>
	import DynamicNav from '@/pages/components/Dynamic/dynamic-nav.vue';
	import DynamicList from '@/pages/components/Dynamic/dynamic-list.vue';
	import RecommondList from '@/pages/components/Dynamic/recommond-list.vue';
	export default {
		data() {
			return {
				activeNavId: 0,
				navData: [{
						id: 1,
						name: '关注的游戏'
					},
					{
						id: 2,
						name: '推荐'
					},
				],
				recommondData: [
					{
						name: '剑灵1', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo5.jpg',
						show:false
					},
					{
						name: '剑灵2', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo5.jpg',
						show:false
					},
					{
						name: '剑灵2', //网格图片
						desc: 'RPG · MMORPG · 高画质',
						score: '7.6',
						img_url: '/static/image/dynamic/demo5.jpg',
						show:false
					},
				],
				dynamicData: [
					{
						type: 1, //网格图片
						img_url: ['/static/image/dynamic/demo1.jpg', '/static/image/dynamic/demo1.jpg', '/static/image/dynamic/demo1.jpg'],
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
				]
			};
		},
		components: {
			DynamicNav,
			DynamicList,
			RecommondList
		},
		methods: {
			//子组件返回响应
			dynamicNavReturn(param) {
				console.log(param);
				this.activeNavId = param;
				this.newActive = param;
				this.scrollTop = 0;
				//
				uni.$emit('gotop', {
					data: 0
				});
				console.log('改变后的值' + this.newActive);
			},
		}
	};
</script>

<style lang="scss"></style>
