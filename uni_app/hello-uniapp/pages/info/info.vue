<template>
	<view class="info">
		<swiper 
			:current='current'
			@animationfinish="onFinish">
			<block
				v-for=" (item, index) in testArr "
				:key="index"
				v-if="index <= showIndex + 1 && index >= showIndex - 1">
				<swiper-item>
					<view
						style="background: #007AFF;display: block;border: 50rpx solid #fff; height: 500rpx;text-align: center;">{{ index }}{{ showIndex }}</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import infoItem from '../../components/infoItem.vue';
export default {
	data(){
		return{
			testArr: [1,2,3,4,5,6,7,8,9],
			isTouch: false,
			showIndex: 0,
			current: 0,
		}
	},
	computed:{
		duration(){
			return ( this.isTouch ? 500 : 0 );
		}
	},
	methods:{
		onStart() {
			this.isTouch = true;
		},
		onEnd() {
			this.isTouch = false;
		},
		onFinish(e) {
			if ( e.detail.source !== 'touch' ) return false;
			let nowCurrent = e.detail.current;
			if ( nowCurrent > 0 ) {
				this.showIndex = this.showIndex >= this.testArr.length - 1 ? this.testArr.length - 1 : this.showIndex + 1;
			} else {
				this.showIndex = this.showIndex <= 0 ? 0 : this.showIndex - 1;
			}
			this.current = this.showIndex === 0 ? 0 : 1;
		},
	},
	components:{
		infoItem
	},
	onLoad(obj) {
		console.log(obj);
	}
};
</script>

<style lang="scss" scoped>
@import '../../common/style/info';
</style>
