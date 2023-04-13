<template>
	<view class="all">
		<view class="memos" @longpress="longpress(item)" @touchend="touchend" @click="changeItem(item,index)"
			v-for="(item,index) in momes" :key="item._id">
			<view class="title">{{item.title}}</view>
			<view class="content">{{item.content}}</view>

		</view>
		<uni-fab @fabClick="fabClick" vertical="bottom" horizontal="right" :popMenu="false"></uni-fab>
		<changeItem v-if="showChange" :item="momes[index]"></changeItem>
		<addItem v-if="showAdd"></addItem>
	</view>
</template>

<script>
	import changeItem from './component/changeItem.vue'
	import addItem from './component/addItem.vue'
	export default {
		components: {
			changeItem,
			addItem
		},
		data() {
			return {
				showChange: false,
				showAdd: false,
				momes: [],
				index: -1,
				title: '',
				content: '',
				islongPress: false, //长按记录变量
			}
		},
		onLoad() {
			this.getMemoItem()
		},
		methods: {
			longpress(item) {
				this.islongPress = true;
				uni.showModal({
					content: "是否删除该备忘录",
					success: (res) => {
						if (res.confirm) {
							const db=uniCloud.database()
							db.collection('Memos').where({
								_id:item._id
							}).remove().then(()=>{
								this.getMemoItem()
							})
						}
					}
				})
			},
			touchend() {
				//延时执行为了防止 click() 还未判断 islongPress 的值就被置为 fasle
				setTimeout(() => {
					this.islongPress = false
				}, 200)
			},
			fabClick() {
				this.showAdd = true
			},
			changeItem(item, index) {
				if (this.islongPress == false) {
					this.index = index
					this.showChange = true
					console.log(this.momes[index])
				}

			},
			getMemoItem() {
				const db = uniCloud.database()
				db.collection("Memos").get().then((res) => {
					this.momes = res.result.data
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		overflow: hidden;
	}

	.all {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		.memos {
			width: 700rpx;
			background-color: white;
			margin-bottom: 30rpx;
			border-radius: 30rpx;
			color: #6365b7;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

			.title {
				text-align: center;
			}

			.content {
				margin-left: 20rpx;
			}
		}

	}
</style>