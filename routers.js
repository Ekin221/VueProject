import HomeView from './components/HomeView.vue';
import SignUp from './components/SignUp.vue';
import DataPage from './components/DataPage.vue'
import { createRouter, createWebHistory } from 'vue-router';
import LogIn from './components/LogIn.vue';
import CompanyStore from './components/CompanyStore.vue'
import Cam from './components/CamView.vue'
const routes = [
    {
        name: 'HomeView',
        component: HomeView,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/log-in',
    },
    {
        name: 'DataPage',
        component: DataPage,
        path: '/data-page',
        meta: { requiresAuth: true }, // Add this meta field to require authentication
      },
      {
        name: 'CompanyStore',
        component: CompanyStore,
        path: '/company-store',
      },
      {
        name: 'CamView',
        component: CamView,
        path: '/cam-view',
      },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is logged in
    let user = localStorage.getItem("user.info");
    if (!user) {
      // Redirect to login if not logged in
      next({ name: 'LogIn' });
    } else {
      // Allow access if logged in
      next();
    }
  } else {
    // Allow access for routes that do not require authentication
    next();
  }
});
export default router;
