<template>
	<view>
		<view class="title">自定义倒数日提醒</view>
		<view class="content" @click="toSet">
			<view class="contentTitle">
				<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/ca6f5f0c-b84e-4339-8cd7-4c5986f3a39b.png" mode=""></image>
				<view>{{CountdownDay.title}}</view>
			</view>
			<view class="contentDay">
				<view>还有{{CountdownDay.content}}天</view>
				<uni-icons type="forward" style="color: #a6a6a6;" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CountdownDay: {}
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getCountdownDay()
		},
		methods: {
			toSet(){
				uni.navigateTo({
					url:'/pages/Convenience/CardFour/setCountDownDay/setCountDownDay'
				})
			},
			getCountdownDay() {
				const db = uniCloud.database()
				db.collection("countdownDay").where({
					_id: "64352e0d28064a03b73a229a"
				}).get().then((res) => {
					this.CountdownDay = res.result.data[0]
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

	.title {
		margin: 30rpx;
		color: #a6a6a6;
	}

	.content {
		padding: 20rpx;
		width: 710rpx;
		height: 50rpx;
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.contentTitle {
			display: flex;
			align-items: center;

			image {
				width: 30rpx;
				height: 30rpx;
			}
		}

		.contentDay {
			display: flex;
			align-items: center;
			color: #a6a6a6;
		}

	}
</style>