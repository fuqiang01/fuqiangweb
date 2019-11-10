<template>
	<view class="content">
		<view class="item" @click="onClick('1')">
			<image src="../../static/index_bg1.jpg" mode="widthFix"></image>
			<text>科目一</text>
		</view>
		<view class="item" @click="onClick('4')">>
			<image src="../../static/index_bg2.jpg" mode="widthFix"></image>
			<text>科目四</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			onClick( num ) {
				uni.navigateTo({
					url:`../page/page?num=${num}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/style/index';
</style>
