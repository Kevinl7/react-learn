import Login from '../pages/login'
import Product from '../pages/products'
import Error from '../pages/error'
import Dashboards from '../pages/dashboard'
import ProductForm from '../pages/products/components/form';
export const mainRoutes = [

  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: Error
  }
]


export const adminRoutes = [

  {
    path: '/admin/dashboard',
    component: Dashboards,
    exact: true,
    title: '看板',
    hidden: false
  },
  {
    path: '/admin/product',
    component: Product,
    exact: true,
    title: '商品',
    hidden: false
  },
  {
    path: '/admin/product/form/:id?',
    component: ProductForm,
    hidden: true
  }
]