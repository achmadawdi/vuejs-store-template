import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/homepage')
  },
  {
    path: '/kategori/:id',
    name: 'Kategori',
    
    component: () => import('../components/produk/Kategori')
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    
    component: () => import('../components/keranjang')
  },
  {
    path: '/produk/:id',
    name: 'Produk',
    props: true,
    component: () => import('../components/produk')
  },
  {
    path: '/customer/masuk',
    name: 'Masuk',
    
    component: () => import('../components/customer/Masuk')
  },
  {
    path: '/customer/daftar',
    name: 'Daftar',
    
    component: () => import('../components/customer/Daftar')
  },
  {
    path: '/customer/dashboard',
    name: 'Dashboard',
    
    component: () => import('../components/customer')
  },
  {
    path: '/customer/pesanan',
    name: 'Pesanan',
    
    component: () => import('../components/customer/Pesanan')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
