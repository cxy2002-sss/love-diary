<template>
	<view class="cardItem">
		<view class="cardTitle">
			<image :src='item.image' mode=""></image>
			<view>
				{{item.title}}
			</view>
		</view>
		<view class="set">
			{{item.content=='' ? "点击设置":item.content}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{item:Object}
	}
</script>

<style lang="scss">
	.cardItem{
		opacity: 0.8;
		width: 330rpx;
		height: 330rpx;
		background: white;
		margin: 20rpx;
		border-radius: 30rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		.cardTitle{
			height: 30%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 0 30rpx;
			image{
				width: 50rpx;
				height: 50rpx;
			}
			view{
				color: #a8a8a8;
				font-size: 28rpx;
			}
		}
		.set{
			height: 45%;
			color: #6365b7;
			font-size: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
	}
</style>