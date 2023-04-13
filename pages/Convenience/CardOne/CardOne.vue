<template>
	<view class="all">
		<view class="title">
			<view class="content">
				<view>每月经期</view>
				<view class="day">
					<view>{{flowDay.day}}</view>
					<view>号</view>
				</view>
			</view>
		</view>
		<view class="set">经期设置</view>
		<view class="setContent">
			<view class="updateDay">
				<view>经期调整</view>
				<button @click="()=>flag=true">修改日期</button>
			</view>
			<view class="setFlow">
				<view>当前经期流量</view>
				<view class="images">
					<image @click="changeLoveNum(index)"
						:src="item.active ? 'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/8fa36de6-26e4-400d-be0f-2749f38bfeec.png':'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/4e77b86d-0cbd-4daa-8751-62c731df56ad.png'" mode=""
						v-for="(item,index) in loves" :key="index"></image>
				</view>
			</view>
			<view class="setAche">
				<view>当前痛经程度</view>
				<view class="images">
					<image @click="changeAcheNum(index)"
						:src="item.active ? 'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/aa669c9f-2c89-42c7-bda5-b233452d08a7.png':'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/1c43bae2-8bcc-43fe-b31b-d86029a8f74e.png'" mode=""
						v-for="(item,index) in aches" :key="index"></image>
				</view>
			</view>
		</view>
		<view class="SetDay" v-if="flag">
		<view class="setDay" >
			<view>
				<view>经期开始时间</view>
				<picker name="picker" mode="date" fields="day" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<view>可根据上次开始时间估计</view>
			<button @click="()=>flag=false">保存日期</button>
		</view>
		</view>
	</view>
</template>

<script>
	import {
		getDate
	} from '../../../untils/date.js'
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				flowDay:{
					day:'',
					flowNum:0,
					acheNum:0
				},
				date: currentDate,
				flag: false,
				loves: [{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					}
				],
				aches: [{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					},
					{
						active: false
					}
				]
			}
		},
		onLoad() {
			const db=uniCloud.database()
			db.collection("FlowDay").where({
				_id:"6432d48f819ce8bdcfad3f68"
			}).get().then((res)=>{
				this.flowDay.day=res.result.data[0].day
				this.flowDay.flowNum=res.result.data[0].flowNum
				this.flowDay.acheNum=res.result.data[0].acheNum
				this.loves.forEach((value,index)=>{
					if(index<=this.flowDay.flowNum){
						value.active = true
					}
				})
				this.aches.forEach((value,index)=>{
					if(index<=this.flowDay.acheNum){
						value.active = true
					}
				})
			})
		},
		onUnload() {
			const db=uniCloud.database()
			db.collection("FlowDay").where({
				_id:"6432d48f819ce8bdcfad3f68"
			}).update({
				day:this.flowDay.day,
				flowNum:this.flowDay.flowNum,
				acheNum:this.flowDay.acheNum
			}).then(()=>{
				console.log("成功了")
			})
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.emit('someEvent', {content: this.flowDay.day});
		},
		methods: {
			bindDateChange(e) {
				this.date = e.detail.value
				this.flowDay.day=this.date.split('-')[2]
			},
			changeLoveNum(num) {
				this.loves.forEach((value) => {
					value.active = false
				})
				this.loves.forEach((value, index) => {
					if (index <= num) {
						value.active = true
					}
				})
				this.flowDay.flowNum=num
			},
			changeAcheNum(num) {
				this.aches.forEach((value) => {
					value.active = false
				})
				this.aches.forEach((value, index) => {
					if (index <= num) {
						value.active = true
					}

				})
				this.flowDay.acheNum=num
			}
		}
	}
</script>

<style lang="scss">
	
.all{
	position: relative;
	.title {
		width: 750rpx;
		height: 340rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.content {
			width: 600rpx;
			height: 300rpx;
			border: 1px solid #6365b7;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			color: #6365b7;
			align-items: center;
			border-radius: 30rpx;

			.day {
				display: flex;

				view:nth-child(1) {
					font-size: 40rpx;
				}
			}
		}
	}

	.set {
		margin-left: 20rpx;
		color: #a6a6a6;
	}

	.setContent {
		background: white;
		padding: 0 20rpx;

		.updateDay {
			height: 100rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			button {

				width: 200rpx;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 20rpx;
				background: #6365b7;
				color: white;
				margin-right: 0 !important;
			}
		}

		.setFlow {
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.images {
				image {
					width: 50rpx;
					height: 50rpx;
				}

			}
		}

		.setAche {
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.images {
				image {
					width: 50rpx;
					height: 50rpx;
				}

			}
		}
	}
	.SetDay{
		position: absolute;
		width: 750rpx;
		height: 1540rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		.setDay {
		width: 600rpx;
		height: 200rpx;
		background: white;
		border: 1px solid #6365b7;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius:30rpx;
		view:nth-child(1){
			display: flex;
			justify-content: space-between;
			picker{
				color: #a6a6a6;
			}
		}
		view:nth-child(2){
			color: #a6a6a6;
		}
		button{
			width: 100%;
			background: #6365b7;
			color: white;
		}
	}
	}
	
}
</style>