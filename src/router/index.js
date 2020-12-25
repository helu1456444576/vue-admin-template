import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },
  {
    path: '/static',
    component: Layout,
    meta: { title: '静态方法', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'static',
        component: () => import('@/views/static/index.vue'),
        meta: { title: '介绍'}
      },
      {
        path: 'config',
        name: 'static_config',
        component: () => import('@/views/static/subViews/config.vue'),
        meta: { title: '配置'}
      },
      {
        path: 'test',
        name: 'static_test',
        component: () => import('@/views/static/subViews/test.vue'),
        meta: { title: '测试'}
      }
    ]
  },
  {
    path: '/dynamic',
    component: Layout,
    meta: { title: '动态方法', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'dynamic',
        component: () => import('@/views/dynamic/index'),
        meta: { title: '介绍'}
      },
      {
        path: 'config',
        name: 'dynamic_config',
        component: () => import('@/views/dynamic/subViews/config.vue'),
        meta: { title: '配置'}
      },
      {
        path: 'test',
        name: 'dynamic_test',
        component: () => import('@/views/dynamic/subViews/test.vue'),
        meta: { title: '测试'}
      }
    ]
  },
  {
    path: '/load',
    component: Layout,
    meta: { title: '负载均衡', icon: 'nested'},
    children: [
      {
        path: 'index',
        component: () => import('@/views/load/index'),
        name: 'load',
        meta: { title: '介绍'},
      },
      {
        path: 'config',
        name: 'load_config',
        component: () => import('@/views/load/subViews/config.vue'),
        meta: { title: '配置'}
      },
      {
        path: 'test',
        name: 'load_test',
        component: () => import('@/views/load/subViews/test.vue'),
        meta: { title: '测试'}
      }

    ]
  },

  {
    path: '/reuse',
    component: Layout,
    meta: { title: '地址复用', icon: 'link' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/reuse/index'),
        name: 'reuse',
        meta: { title: '介绍'}
      },
      {
        path: 'config',
        name: 'reuse_config',
        component: () => import('@/views/reuse/subViews/config.vue'),
        meta: { title: '配置'}
      },
      {
        path: 'test',
        name: 'reuse_test',
        component: () => import('@/views/reuse/subViews/test.vue'),
        meta: { title: '测试'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
