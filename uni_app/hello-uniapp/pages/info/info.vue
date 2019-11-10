<template>
	<view class="info">
		<swiper @change='onChange'>
			<swiper-item 
				v-for="(item,index) in showArr" 
				:key='item'>
				<view >{{ item }}</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import infoItem from '../../components/infoItem.vue';
export default {
	data(){
		return{
			nowIndex: 0,
			testArr: [0,1,2,3,4,5,6,7,8,9],
			lastCurrent: 0,
		}
	},
	computed:{
		showArr() {
			if ( this.nowIndex == 0) {
				return this.testArr.slice(0,3);
			} else {
				console.log(this.testArr.slice( this.nowIndex - 1, this.nowIndex + 2))
				return this.testArr.slice( this.nowIndex - 1, this.nowIndex + 2);
			}
		}
	},
	methods:{
		onChange(e){
			let nowCurrent = e.detail.current;
			if ( nowCurrent - this.lastCurrent > 0 ) {
				this.nowIndex++;
			} else{
				this.nowIndex--;
			}
			this.lastCurrent = nowCurrent;
			console.log(this.nowIndex)
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
