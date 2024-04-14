<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <div>
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div>
          <RouterLink to="/tpagos">pagos</RouterLink>
        </div>
        <div>
          <RouterLink to="/register">Registro</RouterLink>
        </div>
        <div>
          <RouterLink to="/register">crear pagos</RouterLink>
        </div>
        <div>
          <RouterLink to="/login"> Login </RouterLink>
        </div>
        <div>
          <RouterLink to="/Gpago"> Generar pagos </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
