<template>
    <div class="main-container">
      <img src="../assets/logo.png" alt="Logo">
      <router-link to="/login">
        <button>Login</button>
      </router-link>
      <div class="form-container">
        <div class="login-container">
          <h3>Signup</h3>
          <form @submit.prevent="handleSubmit"> <!-- Agregar el manejador de eventos submit -->
            <p>
              <label for="Nombre" class="label-estilos">Nombre</label>
              <input class="input" type="text" name="Nombre" id="Nombre" v-model="Nombre" /> <!-- Agregar v-model -->
            </p>
            <p>
              <label for="Apellido" class="label-estilos">Apellidos</label>
              <input class="input" type="text" name="Apellido" id="Apellido" v-model="Apellido" /> <!-- Agregar v-model -->
            </p>
            <p>
              <label for="Email" class="label-estilos">Email</label>
              <input class="input" type="text" name="Email" id="Email" v-model="email" /> <!-- Agregar v-model -->
            </p>
            <p>
              <label for="password" class="label-estilos">Password</label>
              <input class="input" type="text" name="password" id="password" v-model="password" /> <!-- Agregar v-model -->
            </p>
  
            <div class="options">
              <p>
                <input class="enviar btn btn-login" type="submit" value="Signup" /> <!-- Cambiar el tipo de input a submit -->
              </p>
              <span>Elige algún otro método de autenticación</span>
  
              <!-- Los elementos adicionales del formulario -->
            </div>
          </form>
        </div>
      </div>
      <div class="welcome-screen-container"></div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  // Definir las referencias para los campos del formulario
  const Nombre = ref('');
  const Apellido = ref('');
  const email = ref('');
  const password = ref('');
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user', {
        Nombre: Nombre.value,
        Apellido: Apellido.value,
        email: email.value,
        passwordU: password.value // Ajustar para que coincida con el nombre del campo en la API
      });
  
      console.log(response.data); // Aquí puedes manejar la respuesta de la API
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  </script>
  
   
  <style scoped>
  body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #B6FAF1;
  }
  
  /* Estilos para el contenedor principal */
  .main-container {
    background-color: #56F6E1;
    width: 900px;
    border-radius: 40px;
    overflow: hidden;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  /* Estilos para el contenedor el logo */
  
  .main-container img {
    margin-left: auto;
  }
  
  /* Estilos para el formulario */
  .form-container {
    background-color: #ffffff;
    width: 450px;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
  
  
  
  .login-container {
    width: 500px;
    margin: 0 auto;
  }
  
  .login-container>h3 {
    text-align: center;
    font-size: 2.5rem;
  }
  
  .login-container>p,
  .login-container>span {
    text-align: center;
    color: #555;
  }
  
  .login-container label {
    display: block;
    font-weight: bold;
    padding: 5px 0;
  }
  
  .login-container input.input {
    display: block;
    width: calc(100% - 80px);
    box-sizing: border-box;
    padding: 10px;
    border: solid 1px #ccc;
    border-radius: 20px;
    margin: 0 auto;
    background-color: #E5E2D9;
  }
  
  .label-estilos {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #555;
    padding-left: 50px;
    margin-left: 40px;
  }
  
  
  .login-container input.enviar {
    display: block;
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
    border: solid 1px #ccc;
    border-radius: 20px;
    margin: 0 auto;
    margin-left: 75px;
    background-color: #107AFF;
    color: white;
    cursor: pointer;
  
  }
  
  .login-container input.enviar:hover {
    background-color: #2EF9FF;
  }
  
  .login-container input.input:focus {
    outline: solid 2px #0099ff;
  }
  
  .form-container a {
    text-decoration: none;
    color: #0099ff;
  }
  
  .form-container a:hover {
    text-decoration: underline;
  }
  
  
  
  
  .options {
    margin-bottom: 10px;
    /* Espaciado inferior */
    font-size: 12px;
    /* Tamaño de fuente */
    line-height: 1.5;
    /* Altura de línea */
    color: #555;
    padding-left: 50px;
  }
  
  /* Estilos de iconos sociales */
  .card {
    margin-left: center;
    width: fit-content;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }
  
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
    border-radius: 50%;
  }
  
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
  
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: .3s;
  }
  
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: .3s;
  }
  
  .containerFour:hover {
    background-color: #0ded3a;
    transition-duration: .3s;
  }
  
  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }
  
  .socialSvg {
    width: 17px;
  }
  
  .socialSvg path {
    fill: rgb(255, 255, 255);
  }
  
  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }
  
  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
  
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* responsividad */
  @media screen and (max-width: 900px) {
    .login-container {
      width: 350px;
    }
  
    .welcome-screen-container {
      display: none;
    }
  
    .form-container {
      height: 90%;
    }
  }
  
  
  /* Boton*/
  
  button {
    padding: 1.3em 3em;
    font-size: 12px;
    font-weight: 500;
    color: #f9f9f9;
    background-color: #1f9aeb;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  
    position: absolute;
    bottom: 35%;
    left: 36%;
  }
  
  
  button:hover {
    background-color: #04e9f9;
    box-shadow: 0px 15px 20px rgba(46, 186, 229, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  
  button:active {
    transform: translateY(-1px);
  }
  </style>
   