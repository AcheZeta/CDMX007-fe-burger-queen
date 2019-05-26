<template>
    <div class="container">
        <header class="button-menu">
            <a class="waves-effect waves-light btn red lighten-1" @click="breakfastRoute">Nuevo Pedido</a>
            <a class="waves-effect waves-light btn green lighten-1" @click="ticketRoute">Historial</a>
            <a class="waves-effect waves-light btn grey lighten-1" @click="menuRoute">Menú</a>
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

</style>