<template>
	<view>
		<view class="title">
			<view>你的心事</view>
			<view></view>
		</view>
		<view class="zeroEvent" v-if="dbContent.length==0">
			<view>你的宝贝在这希望你没有心事，开开心心~</view>
			<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/d5262da9-755d-4721-a909-b94e526236e4.png" mode=""></image>
		</view>
		<view class="DayContent" @click="toEvent(item._id)" v-for="(item,index) in dbContent" :key="item._id">
			<view class="dayTitle">
				<view class="bigTitle">{{item.date}}</view>
			</view>
			<view class="content">
				<view class="contentTitle">{{item.input}}</view>
				<view>{{item.textarea}}</view>
			</view>
			<view class="images">
				<image mode="aspectFill" v-for="(image,index) in item.image" :key="index" :src="image"></image>
			</view>
		</view>
		<uni-fab ref="fab" :pattern="pattern" :horizontal="horizontal" :vertical="vertical" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dbContent:[],
				horizontal: 'right',
				vertical: 'bottom',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#6365b7',
					iconColor: '#fff'
				},
				data:{}
			};
		},
		onShow() {
			this.getDbContent()
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			fabClick() {
				uni.navigateTo({
					url:'/pages/addEvent/addEvent?id=2',
					events:{
						someEvent: (data) =>{
						    this.data=data
						}
					}
				})
			},
			getDbContent(){
				const db = uniCloud.database()
				  db.collection('HeardEvent')
				    .get()
				    .then(res => {
						this.dbContent=res.result.data
				    }).catch(err => {
				})
			},
			toEvent(id){
				uni.navigateTo({
					url:`/pages/eventItem/eventItem?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	@import 'HeardEvent.scss';
</style>