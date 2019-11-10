<template>
	<view class="info-item">
		<view class="title">
			<text class="title-type">{{ topicData.titleType }}</text>
			<text class="title-text">{{ topicData.titleText }}</text>
		</view>
		<view class="options">
			<view
				class="item"
				v-for="(item, index) in topicData.options"
				:key="index"
				:class="{ active: optionsClass[index] == 'active', wrong: optionsClass[index] == 'wrong', green: optionsClass[index] == 'green' }"
				@click="itemClick(index)"
				ref="item"
			>
				<text class="option-item">{{ optionsItem[index] }}</text>
				<text class="option-text">{{ item }}</text>
			</view>
		</view>
		<view class="submit-btn" v-if="this.topicData.titleType === '多选题'" @click="submitClick">确认提交</view>
		<view class="explain" v-if="explainShow">
			<text class="explain-title">试题详解</text>
			<text class="explain-info">{{ topicData.explain }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			topicData: {
				id: 1,
				titleType: '多选题',
				titleText: '这是题目这是题目这是题目这是题目这是题目这是题目',
				options: ['这是第一个选项这是第一个选项这是第一个选项这是第一个选项', '这是第二个选项', '这是第三个选项'],
				answer: [1, 2],
				explain: '这是解释这是解释这世界是'
			},
			optionsClass: new Array(10),
			explainShow: false,
			isWrong: ''
		};
	},
	computed: {
		optionsItem() {
			let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			let len = this.topicData.options.length;
			return arr.slice(0, len);
		}
	},
	methods: {
		itemClick(index) {
			if (this.topicData.titleType === '多选题') {
				let tempNum = this.optionsClass[index] == 'active' ? '' : 'active';
				this.$set(this.optionsClass, index, tempNum);
				return;
			}
			if (index == this.topicData.answer) {
				console.log('下一题');
			} else {
				this.explainShow = true;
				this.isWrong = index;
			}
		},
		submitClick() {
			let lock = true;
			for (let i = 0; i < this.topicData.options.length; i++) {
				this.topicData.answer.forEach(ele => {
					if (i === ele && this.optionsClass[i] != 'active') {
						this.explainShow = true;
						this.$set(this.optionsClass, i, 'green');
						lock = false;
					}
				});
				if (!this.topicData.answer.includes(i) && this.optionsClass[i] == 'active') {
					this.explainShow = true;
					this.$set(this.optionsClass, i, 'wrong');
					lock = false;
				}
			}
			if (lock) {
				console.log('下一题');
			}
		}
	},
	onLoad(obj) {
		console.log(obj);
	}
};
</script>

<style lang="scss" scoped>
@import '../common/style/infoItem';
</style>
