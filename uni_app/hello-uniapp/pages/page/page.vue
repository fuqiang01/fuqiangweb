<template>
	<view class="page">
		<view class="item" @click="onClick('order')">
			<image :src="imgSrc" mode="widthFix"></image>
			<view class="text">
				<text>顺章练习</text>
				<text  class="topic-num">{{ readed }} / {{ totalNum }}</text>
			</view>
		</view>
		<view class="item" @click="onClick('test')">
			<image :src="imgSrc" mode="widthFix"></image>
			<view class="text">
				<text>考试模拟</text>
			</view>
		</view>
		<view class="item" @click="onClick('wrong')">
			<image :src="imgSrc" mode="widthFix"></image>
			<view class="text">
				<text>错题回顾</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				imgSrc: '',
				readed: 0,
				totalNum: 0
			};
		},
		onLoad( obj ) {
			this.num = obj.num;
			if ( obj.num == 1 ) {
				this.imgSrc = '../../static/index_bg1.jpg';
			} else {
				this.imgSrc = '../../static/index_bg2.jpg';
			}
		},
		methods:{
			onClick(type) {
				uni.navigateTo({
					url: `../info/info?num=${this.num}&type=${type}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/style/page';
</style>
