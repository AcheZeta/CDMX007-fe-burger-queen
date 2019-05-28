<template>
    <div class="container">
        <header class="button-menu navSpace">
            <a class="waves-effect waves-light btn-large black-text amber" @click="breakfastRoute">Nuevo Pedido</a>
            <a class="waves-effect waves-light btn-large black-text lime darken-1" @click="ticketRoute">Historial</a>
            <a class="waves-effect waves-light btn-large black-text purple accent-4" @click="menuRoute">Menú</a>
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
.container {
    background-color: #e8f5e9;
}

 header {
    margin-bottom: 2%;
}   
</style>