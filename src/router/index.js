import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import settingRouter from './modules/settings'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/clients',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/client/index'),
        name: 'clients',
        meta: { title: 'Clients', icon: 'user', noCache: true }
      }
    ]
  },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/products',
    component: Layout,
    redirect: '/products/list',
    name: 'products',
    meta: {
      title: 'Products',
      icon: 'component'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/product/create'),
        name: 'CreateProduct',
        meta: { title: 'Create Product', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/product/edit'),
        name: 'EditProduct',
        meta: { title: 'Edit Product', noCache: true, activeMenu: '/products/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/product/list'),
        name: 'ProductList',
        meta: { title: 'Product List', icon: 'list' }
      }
    ]
  },
  {
    path: '/reports',
    component: Layout,
    redirect: '/reports/export',
    name: 'Reports',
    meta: {
      title: 'Reports',
      icon: 'excel'
    },
    children: [
      {
        path: 'export',
        component: () => import('@/views/reports/export-excel'),
        name: 'Export Data',
        meta: { title: 'Export Data' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/reports/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/reports/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/reports/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },
  {
    path: '/sale',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/sales/index'),
        name: 'Sales',
        meta: { title: 'Sales', icon: 'tab' }
      }
    ]
  },
  settingRouter
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
