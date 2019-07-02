const menuList =  [
  {
    title: '首页',
    path: '/home',
    icon: 'user'
  },
  {
    title: '商品',
    path: '/products',
    icon: 'user',
    children: [
      {
        title: '商品分类',
        path: '/product',
        icon: 'user'
      }
    ]
  }
]

export default menuList