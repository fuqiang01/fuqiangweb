<template>
	<view class="content">
		<view class="item" @click="oneClick">
			<image src="../../static/index_bg1.jpg" mode="widthFix"></image>
			<text>科目一</text>
		</view>
		<view class="item">
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
			oneClick() {
				uni.navigateTo({
					url:'onepage'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/style/index'
</style>
