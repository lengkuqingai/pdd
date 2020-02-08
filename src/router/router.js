const index = () => import("../view/index")
const list = () => import("../view/list")

export default [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/list',
    name: 'list',
    component: list
  }
]
