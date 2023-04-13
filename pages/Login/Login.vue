<template>
	<view class="all">
		<view class="info">
			<uni-forms ref="form" :modelValue="userInfo" :rules="rules" class="form" border>
				<view class="formitem">
					<uni-forms-item label="用户名" name="user">
						<uni-easyinput v-model="userInfo.user" :inputBorder="false"
							placeholder="请输入用户名"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label="密码" name="password">
						<uni-easyinput v-model="userInfo.password" type="password" :inputBorder="false"
							placeholder="请输入密码"></uni-easyinput>
					</uni-forms-item>
				</view>
			</uni-forms>
			<button form-type="submit" @click="submit" class="submit">登入</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userInfo: {
					user: '',
					password: '',
					token: ''
				},
				rules: {
					user: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名',
							},
							{
								minLength: 3,
								errorMessage: '用户名长度至少大于 {minLength} ',
							}
						]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}]
					}
				}
			}
		},
		onLoad() {
			uni.getStorage({
				key: "token",
				success: (res) => {
					uni.switchTab({
						url: '/pages/Home/Home'
					})
				}
			})
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('success', res);
					let user = res.user
					let password = res.password
					const db = uniCloud.database()
					db.collection("user").where({
						user: user
					}).get().then((res) => {
						if (password != res.result.data[0].password) {
							uni.showToast({
								title: "密码错误，请重新登入",
								icon: "error"
							})
						} else {
							uni.setStorage({
								key: "token",
								data: `${res.result.data[0].token}`,
								success: () => {
									uni.switchTab({
										url: '../Home/Home'
									})
								}
							})

						}
					}).catch(err => {
						uni.showToast({
							title: "你登入不了",
							icon: "error"
						})
					})
				}).catch(err => {
					console.log('err', err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.all {
		height: 1400rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.info {
			.uni-forms {
				.formitem {
					width: 700rpx;
					background: white;
					border-radius: 30rpx;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					padding: 20rpx;
					margin-bottom: 30rpx;
				}
			}

			.submit {
				background: #6365b7;
				color: white;
				width: 500rpx;
				border-radius: 30rpx;
			}
		}
	}
</style>