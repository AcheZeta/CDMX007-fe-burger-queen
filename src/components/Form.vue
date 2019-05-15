<template>
    <main>
        <img src="../assets/burgerQueenLogo.png" alt="Vue.js PWA">
        <br>
        <div class="name-counter">
            <div class="form-group">
                <input aria-label="nombre" type="text" placeholder="¿Cómo te llamas?" v-model="namecounter.name" class="form-control">
            </div>
            <div class="form-group">
                <input aria-label="Cantidad" type="number" placeholder="Precio" v-model="namecounter.price" class="form-control">
            </div>
            <div class="form-group">
                <button aria-label="Conteo" @click="add">¿Cuántas hamburguesas quieres?</button>
            </div>
            <div class="form-group">
                <button aria-label="Guardar Datos" @click="saveData" class="btn btn-primary">Confirmar</button>
            </div>
            <p> Hola {{ namecounter.name }}, quieres {{ namecounter.counter }} hamburguesas de ${{ namecounter.price }}.</p>
        </div>
    </main>
</template>

<script>
import { fb, db } from '../../firebase'
export default {
    name: 'form.vue',
    data() {
        return {
            namecounter: {
                counter: 0,
                name: null,
                price: null,
            }
        };
    },
    methods: {
        add() {
            this.namecounter.counter += 1;
        },
        saveData() {
            db.collection("namecounter").add(this.namecounter)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.reset()
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        },
        reset() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
    },
};
</script>