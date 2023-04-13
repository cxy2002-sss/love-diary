<template>
	<view class="all">
		<view class="now">
			<view class="content">
				<view class="title">
					当前编号NO.{{nowStuff[0].id}}
				</view>
				<view>
					<image src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/922c58e2-1fdc-45d6-9539-a17d6f95711e.png" mode=""></image>
					<view class="contentItem">
						<view>{{nowStuff[0].title}}</view>
						<view>{{date}}</view>
						<button v-if="nowStuff[0].active" @click="changeNowStuff">已完成</button>
						<button v-else @click="changeActive(nowStuff[0].id)">点击完成</button>
					</view>
				</view>
			</view>
			<view class="update">
				<image @click="changeNowStuff" src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/7f2cd6ea-be2f-4609-9c2a-cc03faed90d9.png" mode=""></image>
			</view>
		</view>
		<view class="undone">
			<view class="activeNum">
				<view>
					我们已经完成
				</view>
				<view>
					{{num}}/100件
				</view>
			</view>
			<view class="stuffs">
				<view @click="toPar(item)" class="stuffItem" :class="{active:item.active}" v-for="(item,index) in stuff" :key="index">
					<view class="title">
						<view>
							编号NO.{{index+1}}
						</view>
						<view v-if="item.active">
							已完成
						</view>
						<view v-else>
							未完成
						</view>
					</view>
					<image lazy-load="true" src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/922c58e2-1fdc-45d6-9539-a17d6f95711e.png" mode=""></image>
					<view>
						点击查看详情
					</view>
				</view>
				<view @tap="toTop">
					<uni-fab v-if="scrollTop>100" icon="arrow-up" horizontal="right" vertical="bottom"
						:popMenu="false"></uni-fab>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {getDate} from '../../untils/date.js'
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				date: currentDate,
				// nowStuff: [{
				// 	id: '',
				// 	title: '',
				// 	active:false
				// }],
				scrollTop: 0,
				stuff: []
			};
		},
		onLoad() {
			this.getStuff()
			//this.getNowStuff()
		},
		onShow() {
			this.getStuff()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			toPar(item) {
				uni.navigateTo({
					url: `/pages/stuffItem/stuffItem?id=${item.id}`
				})
			},
			changeActive(id) {
				const db = uniCloud.database()
				db.collection("Stuff").where({
					id: id
				}).update({
					active: true,
					date: getDate()
				}).then(() => {
					this.getNowStuff()
				})
				this.stuff.forEach((item) => {
					if (id === item.id) {
						item.active = true
					}
				})
			},
			changeNowStuff() {
				this.getNowStuff()
			},
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100,
				});
			},
			getNowStuff() {
				let num = ~~(Math.random() * 100 + 1)
				this.$store.dispatch('getNowStuff', num)
			},
			getStuff() {
				const db = uniCloud.database()
				db.collection("Stuff").get().then((res) => {
					this.stuff = res.result.data
				})
			}
		},
		computed: {
			num() {
				let num = 0
				this.stuff.forEach((item) => {
					if (item.active) {
						num++
					}
				})
				return num
			},
			...mapState({
				nowStuff: state => state.NowStuff.nowStuff
			})
		}
	}
</script>

<style lang="scss">
	.all {
		.now {
			background: white;
			margin-bottom: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.update {
				width: 150rpx;
				height: 150rpx;

				image {
					width: 100%;
					height: 100%;
				}

			}

			.content {

				margin-left: 20rpx;

				.title {
					color: #a8a8a8;
					margin-left: 20rpx;
				}

				view:nth-child(2) {
					display: flex;

					image {
						width: 150rpx;
						height: 150rpx;
					}

					.contentItem {
						float: left;
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						view:nth-child(1) {
							font-size: 40rpx;
							color: #6365b7;
							width: 350rpx;
							overflow: hidden; 
							white-space: nowrap; 
							text-overflow: ellipsis;
						}

						view:nth-child(2) {
							font-size: 20rpx;
						}

						button {
							font-size: 20rpx;
							height: 40rpx;
							line-height: 40rpx;
							color: white;
							background: #6365b7;
							margin-left: 0;
							width: 200rpx;
						}
					}
				}


			}

		}

		.undone {
			background: white;
			padding-top: 10rpx;

			.activeNum {
				width: 70%;
				height: 150rpx;
				color: #6365b7;
				border: 8rpx dashed #6365b7;
				border-radius: 30rpx;
				margin: 20rpx auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
			}

			.stuffs {
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				.stuffItem {
					margin: 12rpx;
					width: 210rpx;
					height: 300rpx;
					background: #e8eaeb;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					border-radius: 30rpx;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					&.active{
						background: white !important;
					}
					.title {
						width: 200rpx;
						color: #a8a8a8;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 20rpx;
					}

					image {
						width: 100rpx;
						height: 100rpx;
					}
				}
			}
		}
	}
</style>