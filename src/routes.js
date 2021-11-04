import { createRouter,createWebHistory} from "vue-router";

// export default {
//   '/': 'Home',
//   '/session1': 'Session1',
//   '/session2': 'Session1'
// }
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/Home") 
    },
    {
      path: "/session1",
      name: "session1",
      component:() => import("./pages/Session1") 
    },
    {
      path: "/session2",
      name: "session2",
      component:() => import("./pages/Session2")  
    }
  ]
})