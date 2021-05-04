import Layout from '@/layout'

const settingRouter = {
  path: '/settings',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Settings',
  meta: {
    title: 'Settings',
    icon: 'tree'
  },
  children: [
    {
      path: 'users',
      component: () => import('@/views/settings/users/index'), // Parent router-view
      name: 'Users',
      meta: { title: 'Users', icon: 'peoples' },
      redirect: '/settings/users/add',
      children: [
        {
          path: 'add',
          component: () => import('@/views/settings/users/add'),
          name: 'Add User',
          meta: { title: 'Add User' }
        },
        {
          path: 'update',
          component: () => import('@/views/settings/users/update'),
          name: 'Update User',
          meta: { title: 'Update User' }
        },
        {
          path: 'remove',
          component: () => import('@/views/settings/users/remove'),
          name: 'Remove User',
          meta: { title: 'Remove User' }
        }
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: { title: 'Profile' }
    }
  ]
}

export default settingRouter
