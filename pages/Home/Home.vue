<template>
	<view class="all">
		<view class="status_bar">
			<view class="barText">
				恋爱日
			</view>
			<view class="togetherDay">
				<view class="title">
					我们在一起的日子
				</view>
				<view class="day">
					<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/4e5e5a8e-5681-448d-881f-d4cecd97fe21.png" mode=""></image>
					<image @click="cxy" src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/07ede290-9e90-4068-b326-b3f7f66cb7ce.png" mode=""></image>
					<view>{{day}}</view>
				</view>
			</view>
			<view class="commemorationDay">
				<view>发布只属于我们的秘密纪念日~</view>
				<button class="addEventDay" @click="toAdd">+ 添加纪念日</button>
			</view>
			<view class="nav">
				<view class="navItem" v-for="(item,index) in navs" :key="index">
					<image :src="item.icon"></image>
					<view class="">
						{{item.text}}
					</view>
				</view>
			</view>
			<view class="EventDay" v-if="dbNum==0">
				<view>
					暂无纪念日，赶紧记录吧 ^_^ ~
				</view>
				<view>
					恋爱日将自动计算
				</view>
				<view>
					每条纪念日距你们在一起多少天
				</view>
				<button plain="true" @click="toAdd">点击添加纪念日</button>
			</view>
			<view class="DayContent" @click="toComDay(item._id)" v-for="(item,index) in dbContent" :key="item._id">
				<view class="dayTitle">
					<view class="bigTitle">{{item.date}}</view>
					<view class="minTitle">我们在一起第{{day}}天</view>
				</view>
				<view class="content">
					<view class="contentTitle">{{item.input}}</view>
					<view>{{item.textarea}}</view>
				</view>
				<view class="images">
					<image mode="aspectFill" v-for="(image,index) in item.image" :key="index" :src="image"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs: [{
						icon: "https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/640bdaca-b1b2-49e6-b835-83a564c15d19.png",
						text: "心里话",
						path: ""
					},
					{
						icon: "https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/5d29fce9-63f0-4a3d-997c-e821918bde9b.png",
						text: "未来信件",
						path: ""
					},
					{
						icon: "https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/3f5dee91-9b0b-4171-b26b-4e5ffa89beb3.png",
						text: "宠物公寓",
						path: ""
					},
					{
						icon: "https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/f19e1fd4-a2ed-459f-ac3e-514af2626cd7.png",
						text: "恋爱答案书",
						path: ""
					},
					{
						icon: "https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/f1aa3e8f-abd0-424c-91a0-638d96b463aa.png",
						text: "情侣礼物",
						path: ""
					}
				],
				dbNum:0,
				dbContent:[]
			}
		},
		onLoad(){
			uni.getStorage({
				key:"token",
				fail: () => {
					uni.reLaunch({
						url:'/pages/Login/Login'
					})
				}
			})
		},
		onShow() {
			this.getDbNum()
			this.getDbContent()
		},
		onPullDownRefresh() {
			this.getDbContent()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			cxy(){
				uni.showModal({
					content:"为何要点程翔宇?",
					cancelText:"爱他",
					confirmText:"更爱他"
				})
			},
			getDbContent(){
				const db = uniCloud.database()
				  db.collection('Home')
				    .get()
				    .then(res => {
						this.dbContent=res.result.data
				    }).catch(err => {
				})
			},
			getDbNum(){
				const db = uniCloud.database()
				  db.collection('Home')
				    .get({
				      getCount:true
				    })
				    .then(res => {
						this.dbNum=res.result.count
				    }).catch(err => {
				      console.error(err)
				})
			},
			toAdd(){
				uni.navigateTo({
					url:'/pages/addDay/addDay?id=1',
					
				})
				// this.$Router.push('/pages/addDay/addDay?id=1')
			},
			toComDay(id){
				uni.navigateTo({
					url:`/pages/commemorationDay/commemorationDay?id=${id}`
				})
			}
		},
		computed: {
			day() {
				let time = Date.parse(new Date());
				let lasttime = Date.parse("2022-12-19");
				let day = parseInt((time - lasttime) / (1000 * 60 * 60 * 24));
				return day
			}
		}

	}
</script>

<style lang="scss">
	@import 'Home.scss';
</style>