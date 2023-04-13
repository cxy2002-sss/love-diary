<template>
	<view class="changeItem">
		<view class="head">
			<view @click="end">取消</view>
			<view @click="success">保存</view>
		</view>
		<view class="item">
			<input name="input"  class="title" maxlength="16" confirm-type="done" type="text" placeholder="请输入标题"
				auto-blur='true' @blur="ipt"/>
			<textarea class="content" @blur="text"  name="textarea" confirm-type="done" type="text" placeholder="请输入内容"
				auto-blur='true'></textarea>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title:"",
				content:""
			}
		},
		onLoad() {
			console.log(this.item)
		},
		methods:{
			end(){
				// #ifdef MP-WEIXIN
				this.$parent.showAdd=false
				// #endif
				// #ifdef H5
				this.$parent.$parent.showAdd=false
				// #endif
				
			},
			ipt(e){
				this.title=e.detail.value
			},
			text(e){
				this.content=e.detail.value
			},
			success(){
				const db=uniCloud.database()
				db.collection("Memos").add({
					title:this.title,
					content:this.content
				}).then(()=>{
					
					// #ifdef MP-WEIXIN
					this.$parent.getMemoItem()
					this.$parent.showAdd=false
					// #endif
					// #ifdef H5
					this.$parent.$parent.getMemoItem()
					this.$parent.$parent.showAdd=false
					// #endif
				})
			}
		}
	}
</script>

<style lang="scss">
	.changeItem{
		position: absolute;
		top: 1700rpx;
		left: 0rpx;
		width: 750rpx;
		height: 1000rpx;
		border-radius: 30rpx 30rpx 0 0;
		background-color: white;
		animation:.3s  start linear 1 forwards;
		.head{
			width: 700rpx;
			margin: 20rpx auto;
			display: flex;
			justify-content: space-between;
		}
		.item{
			width: 100%;
			height: 500rpx;
			.title {
				width: 750rpx;
				margin: 20rpx auto;
				padding-bottom: 20rpx;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}
			.content {
				width: 750rpx;
				margin: 20rpx auto;
				font-size: 30rpx;
			}
		}
	}
	@keyframes start{
		from{
			transform:translateY(0);
		}
		to{
			transform:translateY(-1000rpx);
		}
	}
</style>