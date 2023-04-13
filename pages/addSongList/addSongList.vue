<template>
	<view>
		<view class="SongInfo" v-for="(item,index) in addSongInfo" :key="item._id">
			<view>音乐:{{item.name}}</view>
			<view>作者:{{item.artistsname}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addSongInfo:{}
			}
		},
		onLoad() {
			const db=uniCloud.database()
			db.collection("AddLickSong").get().then(res=>{
				console.log(res.result.data)
					this.addSongInfo=res.result.data
			})	
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.SongInfo{
	width: 700rpx;
	margin: auto;
	margin-bottom: 20rpx;
	border-radius: 30rpx;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	display: flex;
	justify-content: center;
	view{
		margin: 20rpx;
	}
}
</style>
