// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES,{ path: '/', redirect: '/pages/Home/Home' }]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to.path)
	let token=false
	uni.getStorage({
		key: "token",
		success: (res) => {
			token=res.data
			console.log(token)
		}
	})
	if(token)
	{
		if(to.path=='/pages/Login/Login'){
			next('/')
		}else{
			next()
		}
		
	}else{
		if(to.path!='/pages/Login/Login'){
			next('/pages/Login/Login')
		}else{
			next()
		}
	}
	

});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}