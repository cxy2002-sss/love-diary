<template>
	<view>
		<view class="LikeSong" v-for="(item,index) in likeSong" :key="item._id" @click="playLike(item)">
			<image :src="item.picurl" mode=""></image>
			<view>
				<view>{{item.name}}</view>
				<view>{{item.artistsname}}</view>
			</view>
		</view>
		<uni-fab :pattern="{buttonColor:'#6365b7'}" :content="content" horizontal="left" direction="horizontal" vertical="bottom" @trigger="trigger"></uni-fab>
		<uni-fab :pattern="{buttonColor:'#6365b7'}" horizontal="right" vertical="bottom" icon="arrow-right" @fabClick="to"></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				audioAction: {
					method: 'pause'
				},
				songInfo: null,
				innerAudioContext: {},
				likeSong: [],
				content:[{
						iconPath: 'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/e6f7020b-34e3-473d-9455-72ff8a25d59f.png',
						text: '添加'
					},{
						iconPath: 'https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/c6762a0f-de08-4388-ac66-d996f2becae4.png',
						text: '列表'
					}]
			}
		},
		onLoad() {
			this.getSong()
		},
		onPullDownRefresh() {
			this.getSong()
			uni.stopPullDownRefresh()
		},
		methods: {
			getSong(){
				const db = uniCloud.database()
				db.collection("Song").get().then((res) => {
					this.likeSong = res.result.data
				})
			},
			trigger(e){
				if(e.index===0){
					uni.navigateTo({
						url:"/pages/addLikeSong/addLikeSong"
					})
				}else{
					uni.navigateTo({
						url:"/pages/addSongList/addSongList"
					})
				}
			},
			playLike(item) {
				uni.setStorage({
					key: 'songInfo',
					data: item,
					success: () => {
						uni.navigateTo({
							url: `/pages/detail/detail`
						})
					}
				})
			},
			to() {
				if (this.songInfo == null) {
					uni.request({
						url: "https://api.uomg.com/api/rand.music?sort=飙升榜&format=json",
						success: (res) => {
							if (res.statusCode == 200) {
								this.songInfo = res.data.data
								console.log(this.songInfo)
								uni.setStorage({
									key: 'songInfo',
									data: this.songInfo,
									success: () => {
										uni.navigateTo({
											url: `/pages/detail/detail`
										})
									}
								})

							}

						},
						fail: () => {
							uni.showModal({
								content: "未获取到歌曲，请重新点击！！"
							})
						}
					})
				} else {

					uni.navigateTo({
						url: `/pages/detail/detail`
					})
				}

				// uni.navigateTo({
				// 	url:"/pages/detail/detail"
				// })
			}
		}
	}
</script>

<style lang="scss">
	.LikeSong{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		display: flex;
		width: 700rpx;
		margin: 20rpx auto;
		padding: 20rpx;
		border-radius:30rpx ;
		image{
			border-radius: 50%;
			width: 100rpx;
			height: 100rpx;
		}
		view{
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	.title {
		margin-top: 500rpx;
		font-size: 40rpx;
		text-align: center;
	}
</style>