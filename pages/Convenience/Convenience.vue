<template>
	<view class="all">
		<view class="heardcard">
			<view class="title">
				<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/922c58e2-1fdc-45d6-9539-a17d6f95711e.png" mode=""></image>
			<view >
				情侣必做的100件事
			</view>
			</view>
			<view class="content">
				<view class="eventNumber">
					<view>
						{{eventnum}}件
					</view>
					<view>
						已完成
					</view>
				</view>
				<view class="event">
					<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/e9cdbc91-7502-45fa-bc44-605ec9405dfa.png" mode=""></image>
					<view>
						<view class="eventItem">
							{{nowStuff[0].title}}
						</view>
						<button @click="toMilStu">去完成</button>
					</view>
				</view>
			</view>
		</view>
		<view class="cades">
			<Card @click.native="toCard(item.path)" v-for="(item,index) in cards" :key='index' :item="item"></Card>
		</view>
		<view class="floot">
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import Card from '../../components/card/card.vue'
	export default {
		data() {
			return {
				eventnum:0,
				cards:[
					{
						image:'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/aa66052b-6b44-457a-a797-fdc6650e160d.png',
						title:'经期提醒',
						setText:'点击设置',
						content:'',
						path:"CardOne/CardOne"
					},
					{
						image:'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/38046231-922a-41f3-96c2-299c88021a41.png',
						title:'距离Ta的生日',
						setText:'设置Ta的生日',
						content:'',
						path:"CardTow/CardTow"
					},
					{
						image:'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/a245d083-f5ac-4ab0-a18d-9c168121ff0c.png',
						title:'备忘录',
						setText:'设置编辑Ta的喜好',
						content:'',
						path:"CardThree/CardThree"
					},
					{
						image:'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/e9cdbc91-7502-45fa-bc44-605ec9405dfa.png',
						title:'倒数日',
						setText:'设置倒数日',
						content:'',
						path:"CardFour/CardFour"
					}
				],
				
			}
		},
		beforeMount(){
			this.getNowStuff()
			console.log(this.nowStuff)
		},
		onShow() {
			this.num()
			this.getFlowDay()
			this.getBirthDay()
			this.getMemo()
			this.getCountdownDay()
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			toCard(path){
				uni.navigateTo({
					url:path,
					fail: (e) => {
						console.log(e)
					}
				})
			},
			toMilStu(){
				uni.navigateTo({
					url:'/pages/millionStuff/millionStuff',
				})
			},
			getCountdownDay(){
				const db=uniCloud.database()
				db.collection("countdownDay").get().then((res)=>{
					this.cards[3].content=res.result.data[0].content
				})
			},
			getMemo(){
				const db=uniCloud.database()
				db.collection("Memos").get().then((res)=>{
					this.cards[2].content=res.result.data[res.result.data.length-1].content
				})
			},
			getFlowDay(){
				const db=uniCloud.database()
				db.collection("FlowDay").get().then((res)=>{
					this.cards[0].content=res.result.data[0].day
				})
			},
			getBirthDay(){
				const db=uniCloud.database()
				db.collection("Birthday").get().then((res)=>{
					this.cards[1].content=res.result.data[0].day
				})
				console.log(this.$children.$children)
			},
			getNowStuff() {
				let num = ~~(Math.random() * 100 + 1)
				this.$store.dispatch('getNowStuff',num)
				// const db = uniCloud.database()
				// db.collection("Stuff").where({
				// 	id: num
				// }).get().then((res) => {
				// 	this.nowStuff = res.result.data
				// 	console.log(this.nowStuff)
					
				// })
			},
			num(){
				const db=uniCloud.database()
				db.collection("Stuff").where({
					active:true
				}).get().then((res)=>{
					this.eventnum=res.result.data.length
				})
			}
		},
		components:{
			Card
		},
		computed:{
			...mapState({
				nowStuff:state=>state.NowStuff.nowStuff
			})
		}
	}
</script>

<style lang="scss">
@import 'Convenience.scss';
</style>
