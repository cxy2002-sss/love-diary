<template>
	<view class="all">
		<view class="form">
			<uni-forms ref="form" :rules="rules" :modelValue="LikeSongData">
				<uni-forms-item label="音乐" name="name">
					<uni-easyinput style="width: 400rpx;" v-model="LikeSongData.name" placeholder="请输入音乐" />
				</uni-forms-item>
				<uni-forms-item label="作者" name="artistsname">
					<uni-easyinput style="width: 400rpx;" v-model="LikeSongData.artistsname" placeholder="请输入作者" />
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="buttons">
			<button form-type="submit" type="default" class="submit" @click="cancel">取消</button>
			<button form-type="submit" type="primary" class="submit" @click="submit">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				LikeSongData: {
					name: '',
					artistsname: ''
				},
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '音乐不能为空'
						}]
					},
					artistsname: {
						rules: [{
							required: false,
						}]
					}
				}
			}
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('success', this.LikeSongData);
					uni.showToast({
						title: `提交成功`
					})
					const db=uniCloud.database()
					db.collection("AddLickSong").add(this.LikeSongData)
				}).catch(err => {
					console.log('err', err);
				})
			},
			cancel(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.all {
		height: 1200rpx;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.form {
			background: white;
			border-radius: 30rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			width: 700rpx;
			height: 300rpx;
		}
		.buttons {
			display: flex;
			.submit {
				margin: 30rpx;
				width: 300rpx;
			}
		}

	}
</style>