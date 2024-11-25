<template>
    <div>
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
      
      <nav :class="{'menu-active': isMenuActive}">
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/Clientes">Sobre nosotros</router-link></li>
          <li><router-link to="/services">Servicios</router-link></li>
          <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
      </nav>
    </div>
</template>
  
<script>
    export default {
      data() {
        return {
          isMenuActive: false, // Para controlar si el menú está abierto o cerrado
        };
      },
      methods: {
        toggleMenu() {
          this.isMenuActive = !this.isMenuActive;
        },
      },
    };
</script>
  
<style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }

  nav ul li {
    margin: 0 10px;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  .menu-toggle {
    display: none; /* Por defecto oculto en pantallas grandes */
    background-color: #333;
    color: white;
    border: none;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
  }

  /* Estilos para pantallas pequeñas (dispositivos móviles) */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block; /* Mostrar el botón de menú en pantallas pequeñas */
    }

    nav {
      display: none; /* Ocultar el menú por defecto */
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      height: 100%;
      background-color: #333;
      flex-direction: column;
      justify-content: center;
    }

    nav.menu-active {
      display: flex; /* Mostrar el menú cuando esté activo */
    }

    nav ul {
      flex-direction: column;
      align-items: center;
    }

    nav ul li {
      margin: 15px 0;
    }
  }
</style>