import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicio from '../components/Home/PaginaInicio.vue';
import ClientesPage from '../components/About/ClientesPage.vue';


const routes = [
  {
    path: '/',
    name: 'PaginaInicio',
    component: PaginaInicio 
  },
  {
    path: '/Clientes', 
    name: 'ClientesPage',
    component: ClientesPage
  }
];

const router = createRouter({
  history: createWebHistory(""), 
  routes 
});

export default router;