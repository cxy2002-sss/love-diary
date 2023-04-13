<template>
	<view class="detail">
		<view class="flexbg" :style="{backgroundImage:`url(${songInfo.picurl})`}">
			<view @click="stop" class="detail-play">
				<image :class="{ 'detail-play-run' : isplayrotate }" :src="songInfo.picurl" mode=""></image>
				<view class="play_bar" :class="{ 'detail-play-run' : isplayrotate }"></view>
			</view>
		</view>
		<view class="songTitle">
			<view class="songName">
				{{songInfo.name}}
			</view>
			<view class="songArtistsname">
				{{songInfo.artistsname}}
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				isplayrotate: true,
				innerAudioContext: uni.createInnerAudioContext(),
				songInfo: {}
			}
		},
		onLoad() {
			uni.getStorage({
				key:"songInfo",
				success: (res) => {
					this.songInfo=res.data
					this.innerAudioContext.autoplay=true
					this.innerAudioContext.src = `${this.songInfo.url}`;
				}
			})
			
		},
		onPullDownRefresh() {
			uni.request({
				url: "https://api.uomg.com/api/rand.music?format=json",
				success: (res) => {
					if (res.statusCode == 200) {
						this.isplayrotate=true
						this.songInfo = res.data.data
						uni.setStorage({
							key: 'songInfo',
							data: this.songInfo,
						})
						this.innerAudioContext.src = `${this.songInfo.url}`
						uni.stopPullDownRefresh()
					}
				},
				fail: () => {
					uni.showModal({
						content: "未获取到歌曲，请重新点击！！"
					})
				}
			})

		},
		onUnload(){
			this.innerAudioContext.destroy()
		},
		methods: {
			stop() {
				this.isplayrotate = !this.isplayrotate
				if (this.isplayrotate) {
					this.innerAudioContext.play()
				} else {
					this.innerAudioContext.pause()
				}

			}
		}
	}
</script>

<style lang="scss">
	page{
		background: black;
	}
	.flexbg {
		border-radius: 30rpx;
		background-size: 100%;
	}

	.flexbg::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .8);
	}

	.detail {
		overflow: hidden;
	}
	
	.detail-play {
		width: 580rpx;
		height: 580rpx;
		background: url("https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/b53be6bb-091d-437d-b169-6fb7090a0cc5.png");
		background-size: cover;
		margin: 210rpx auto 44rpx auto;
		position: relative;
	}

	.detail-play image {
		width: 380rpx;
		height: 380rpx;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		animation: 10s linear infinite move;
		animation-play-state: paused;
	}

	@keyframes move {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.detail-play text {
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		color: white;
	}

	.detail-play view {
		position: absolute;
		width: 170rpx;
		height: 266rpx;
		position: absolute;
		left: 90rpx;
		right: 0;
		margin: auto;
		top: -170rpx;
		background: url("https://mp-ef64b579-45c7-4be3-847a-226e71feacf0.cdn.bspapp.com/cloudstorage/7ef10add-c4f0-4e19-b3fd-2b09a2b62899.png");
		background-size: cover;
		animation-name: Rotate;
		animation-iteration-count: infinite;
		animation-play-state: paused;
		animation-timing-function: linear;
		animation-duration: 1s;
	}

	/* 杆子旋转 */
	.play_bar {
		position: absolute;
		left: 200px;
		top: -10px;
		z-index: 10;
		transform: rotate(-25deg);
		transform-origin: 12px 12px;
		transition: 1s;
	}

	/* 转盘停止 和 播放杆 转回去 */
	.detail-play .detail-play-run {
		animation-play-state: running;
		transform: rotate(0)
	}

	.songTitle {
		position: absolute;
		width: 100%;
		z-index: 100;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.songName {
			font-size: 40rpx;
		}
	}
</style>