<template>
	<view class="all">
		<view class="head">
			修改纪念日
		</view>
		<form @submit="formSubmit">
			<input name="input" class="title" maxlength="16" confirm-type="done" type="text" placeholder="请输入标题"
				auto-blur='true' :value="ipt" />
			<textarea class="content" name="textarea" confirm-type="done" type="text"
				placeholder="今天发生了什么？纪念日详情在这里请填写吧~" auto-blur='true' :value="textarea"></textarea>
			<view class="images">
				<uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @success="success" limit="1"
					:auto-upload="false" ref="files" />
			</view>
			<view class="day">
				<view>纪念日期</view>
				<picker name="picker" mode="date" fields="day" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<button class="submit" form-type="submit">修改</button>
		</form>
	</view>
</template>
<script>
	import {
		getDate
	} from '../../untils/date.js'
	export default {
		data() {
			const currentDate = getDate({
				format: true
			})
			return {
				imageValue: [],
				images: [],
				date: currentDate,
				id: 0,
				ipt: '',
				textarea: ''
			};
		},
		onLoad(option) {
			this.id = option.id
		},
		onReady() {

			this.getContent()
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		methods: {
			success(e) {
				this.images = e.tempFilePaths
			},
			formSubmit(e) {
				let value = e.detail.value
				console.log(value)
				if (value.input == "" || value.textarea == "") {
					console.log(value)
					uni.showModal({
						title: '提示',
						content: '请完整填写内容'
					})
				} else {
					this.$refs.files.upload()
					setTimeout(() => {
						const db = uniCloud.database()
						db.collection("Home").where({
							_id: this.id
						}).update({
							input: value.input,
							textarea: value.textarea,
							image: this.images,
							date: this.date
						}).then(() => {
							console.log(value.input)
							uni.navigateBack({
								delta: 1
							})
						})
					}, 1000)
				}
			},
			bindDateChange(e) {
				this.date = e.detail.value
			},
			getContent() {
				const db = uniCloud.database()
				db.collection("Home").where({
					_id: this.id
				}).get().then((res) => {
					this.ipt = res.result.data[0].input
					this.textarea = res.result.data[0].textarea
					if (!res.result.data[0].image) return;
					let urls = res.result.data[0].image.map((item) => {
						return {
							url: item
						}
					})
					this.imageValue = urls
					this.images = [`${this.imageValue[0].url}`]
					console.log(this.images)
					this.date = res.result.data[0].date
				})
			}
		}
	}
</script>

<style lang="scss">
	.all {
		margin: auto 20rpx;

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

		.images {
			display: flex;
			width: 750rpx;
			padding-bottom: 20rpx;

			.selectImages {
				width: 150rpx;
				height: 150rpx;
				background-color: #a6a6a6;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

			.imageItem {
				image {
					position: relative;
					margin-right: 20rpx;
					width: 150rpx;
					height: 150rpx;
					pointer-events: none;

					&::before {
						color: white;
						content: '-';
						font-size: 45rpx;
						position: absolute;
						display: block;
						top: -20rpx;
						left: 120rpx;
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						background: black;
						pointer-events: auto;
					}
				}
			}
		}

		.day {
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
			display: flex;
			height: 80rpx;
			align-items: center;
			justify-content: space-between;
		}

		.submit {
			width: 350rpx;
			color: white;
			border-radius: 50rpx;
			background: #6365b7;
			margin-top: 30rpx;
		}
	}
</style>