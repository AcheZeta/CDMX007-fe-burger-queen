<template>
    <div class="container">
        <header class="button-menu">
            <button aria-label="Desayuno" @click="breakfastRoute" class="menu btn green lighten-1">Desayuno</button>
            <button aria-label="Comida" @click="mealRoute" class="btn menu green lighten-1">Comida</button>
            <button aria-label="Menú" @click="menuRoute" class="btn menu green lighten-1">Menú</button>
            <button aria-label="Historial de Pedidos" @click="ticketRoute" class="btn menu green lighten-1">Historial</button>
        </header>
    </div>
</template>

<script>
export default {
    name: 'menuComponent',

    methods: {
        ticketRoute() {
            this.$router.push('/ticket')
        },
        menuRoute() {
            this.$router.push('/menu')
        },
        mealRoute() {
            this.$router.push('/')
        },
        breakfastRoute() {
            this.$router.push('/')
        }
    },

}
</script>

<style>
.menu {
    background-color: white;
    color: black;
}

.menu:hover {
    background-color: #4CAF50;
    color: white;
}
</style>