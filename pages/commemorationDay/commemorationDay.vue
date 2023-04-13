<template>
	<view class="all">
		<view class="head">
			<view class="contentTitle">{{contents[0].input}}</view>
			<view class="day">
				第{{contents[0].day}}天
			</view>
			<view class="date">
				{{contents[0].date}}
			</view>
		</view>
		<view>
			纪念日描述
		</view>
		<view class="content">
			<view>
				{{contents[0].textarea}}
			</view>
			<view class="images">
				<image @click="previewImage(item)" v-for="(item,index) in contents[0].image" :key="index" :src="item"
					mode="aspectFill"></image>
			</view>
		</view>
		<uni-fab icon="more" @fabClick="fabClick" :pattern="pattern" vertical="bottom" horizontal="right" :popMenu="false"></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contents: [],
				id:0,
				pattern: {
					buttonColor: "#6365b7"
				}
			}
		},
		onLoad(option) {
			this.id=option.id
			this.getContent(option.id)
		},
		onShow() {
			this.getContent(this.id)
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		methods: {
			getContent(id) {
				const db = uniCloud.database()
				db.collection('Home').where({
					_id: id
				}).get().then((res) => {
					this.contents = res.result.data
					console.log(this.contents)
				})
			},
			previewImage(url) {
				uni.previewImage({
					current: url,
					urls: this.contents[0].image,
					indicator: 'number'
				})
			},
			fabClick(){
				uni.showActionSheet({
					itemList: ["编辑","删除"],
					itemColor:"red",
					success:(res)=> {
						const db=uniCloud.database()
						if(res.tapIndex==1){
							db.collection("Home").where({
								_id:this.id
							}).remove().then(()=>{
								console.log("删除成功")
								uni.switchTab({
									url: '../Home/Home'
								})
							})
						}else{
							uni.navigateTo({
								url:`/pages/updateDay/updateDay?id=${this.id}`
							})
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});

			}
		}
	}
</script>

<style lang="scss">
	.all {
		margin: 20rpx;

		.head {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			background: white;
			border-radius: 30rpx;
			height: 250rpx;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

			.contentTitle {
				color: #6365b7;
			}

			.day {
				color: #6365b7;
				font-size: 50rpx;
			}

			.date {
				color: #a6a6a6;
			}
		}

		view:nth-child(2) {
			margin: 20rpx;
			color: #a6a6a6
		}

		.content {
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			background: white;
			border-radius: 30rpx;
			view:nth-child(1) {
				padding: 30rpx;
			}
			.images {
				display: flex;
				flex-wrap: wrap;
				image {
					margin: 10rpx;
				}
			}
		}
	}
</style>