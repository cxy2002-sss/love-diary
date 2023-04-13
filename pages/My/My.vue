<template>
	<view class="all">
		<view class="more" v-if="flag">
			<image
				src="https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/ff405d32-9717-46c9-92e8-580410357796.png">
			</image>
			<view>正在选择</view>
		</view>
		<view class="content">
			<view class="title">
				<view>今天想吃什么，让我来选择</view>
				<view>或者你想让宝贝给你买点啥？</view>
			</view>
			<view>
			<button @click="start">开始抽奖</button>
			</view>
			<!-- 暂时完成不了 -->
			<!-- <view>
			<button class="select" @click="select">开始点单</button>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				content: ["黄焖鸡", "烤盘饭","泡面","香锅", "再来一次", "随便吃点", "兰州拉面", "五谷鱼粉", "功夫烧菜"]
				// award:["古茗奶茶","蜜雪冰淇淋","淀粉肠"]
			};
		},
		methods: {
			start() {
				let num = ~~(Math.random() * this.content.length)
				this.flag = !this.flag
				setTimeout(() => {
					this.flag = false
					uni.showModal({
						content: `${this.content[num]}`
					})
				}, 2000)
			}
		},
		computed: {}
	}
</script>

<style lang="scss">
	page {
		.all {
			position: relative;
			height: 1450rpx;
			.more {
				width: 750rpx;
				height: 100%;

				image {
					position: absolute;
					z-index: 2;
					top: 440rpx;
					left: 290rpx;
					width: 200rpx;
					height: 200rpx;
					animation: 2s linear infinite move;
				}

				view {
					position: absolute;
					z-index: 2;
					top: 650rpx;
					left: 310rpx;
					font-size: 40rpx;
					color: white;
					width: 200rpx;
					height: 200rpx;
				}

				&::after {
					content: '';
					z-index: 1;
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					top: 0;
					background-color: rgba(0, 0, 0, .5);
				}

				@keyframes move {
					from {
						transform: rotate(0deg);
					}

					to {
						transform: rotate(360deg);
					}
				}
			}

			.content {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.title {
					width: 500rpx;
					font-size: 40rpx;
					color: #6365b7;
				}
				view:nth-child(2){
					margin: 20rpx 0;
					button{
					width: 500rpx;
					color: white;
					background: #6365b7;
					border-radius: 40rpx;
					}
				}
				
				.select{
					width: 500rpx;
					background: #6365b7;
					border-radius: 40rpx;
				}
				
			}

		}


	}
</style>