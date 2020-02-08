
const user = {
  namespaced:true,
  state:{
    userInfo:{},
    taskInfo:{},
    approveList:{}
  },
  mutations: {
    setUserInfo(state,data){
      state.userInfo=data
    },
    setTaskInfo(state,data){
      state.taskInfo=data
    },
    setApproveList(state,data){
      state.approveList=data
    }
  },
  actions: {

  }
};

export default user
