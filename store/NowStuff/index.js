const state={
	nowStuff:[]
}
const mutations={
	GETNOWSTUFF(state,nowStuff){
		state.nowStuff=nowStuff
	}
}
const actions={
	getNowStuff({commit},id){
		const db=uniCloud.database()
		db.collection("Stuff").where({
			id:id
		}).get().then((res)=>{
			commit("GETNOWSTUFF",res.result.data)
		})
	}
}
const getters={}
export default{
	state,
	mutations,
	actions,
	getters
}