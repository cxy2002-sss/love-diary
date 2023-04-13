<template>
	<view>
		<view class="title">
			<view>标题</view>
			<input type="text" @blur="ipt" :value="countdownDay.title" />
		</view>
		<view class="setDay">
			<view>请选择日期</view>
			<view class="day">
				<picker style="color: #a8a8a8;" mode="date" fields="day" @change="changeDay">
					<view>{{date}}</view>
				</picker>
				<uni-icons style="color: #a8a8a8" type="bottom" size="20"></uni-icons>
			</view>
		</view>
		<button type="submit" @click="submit" class="submit">保存</button>
	</view>
</template>

<script>
	import {
		getDate
	} from "../../../../untils/date.js"
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				countdownDay: {},
				date: currentDate
			}
		},
		onLoad() {
			this.getSetday()
		},
		methods: {
			submit(){
				const db=uniCloud.database()
				db.collection("countdownDay").where({
					_id:"64352e0d28064a03b73a229a"
				}).update({
					title:this.countdownDay.title,
					content:this.day(this.date.split('-')[1],this.date.split('-')[2])+'',
					day:this.date
				}).then((res)=>{
					uni.navigateBack({
						delta:1
					})
				})
			},
			day(m,d) {
				let time = Date.parse(new Date());
				let month = new Date().getMonth() + 1;
				let year = new Date().getFullYear();
				let futuretime = Date.parse(`${m>month ? year:year+1}-${m}-${d}`);
				let day = parseInt((futuretime-time) / (1000 * 60 * 60 * 24));
				return day
			},
			ipt(e) {
				this.countdownDay.title=e.detail.value
			},
			changeDay(e) {
				this.date = e.detail.value
				this.countdownDay.day=e.detail.value
			},
			getSetday() {
				const db = uniCloud.database()
				db.collection("countdownDay").where({
					_id: "64352e0d28064a03b73a229a"
				}).get().then((res) => {
					this.countdownDay = res.result.data[0]
					this.date = res.result.data[0].day
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
		display: flex;
		align-items: center;
		border-bottom: 1px solid #a8a8a8;
		background: white;

		view {
			margin: 20rpx;
			width: 150rpx;
		}
	}

	.setDay {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;

		view:nth-child(1) {
			margin: 20rpx;
			width: 150rpx;
		}

		.day {
			display: flex;
			align-items: center;
		}
	}
	.submit{
		background-color: #6365b7;
		color: white;
		margin-top: 30rpx;
	}
</style>