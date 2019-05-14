<template>
    <div id="app">
        <main>
  
            <img src="./assets/burgerQueenLogo.png" alt="Vue.js PWA">
            <br>
            <router-view></router-view>
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
    </div>
</template>

<script>
import { fb, db } from '../firebase'
export default {
    name: 'app',
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

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

main {
    text-align: center;
    margin-top: 40px;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #ffffff;
}

header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}

.menu {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
  width: 20%;
}

.menu:hover {
  background-color: #4CAF50;
  color: white;
}

</style>
