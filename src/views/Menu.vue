<template>
    <div class="container menuComponent">
        <h5>Menú</h5>
        <input aria-label="id" type="text" placeholder="id" v-model="menu.id" class="form-control">
        <input aria-label="item" type="text" placeholder="item" v-model="menu.item" class="form-control">
        <input aria-label="price" type="number" placeholder="price" v-model="menu.price" class="form-control">
        <input aria-label="schedule" type="text" placeholder="schedule" v-model="menu.schedule" class="form-control">
        <input aria-label="type" type="text" placeholder="type" v-model="menu.type" class="form-control">
        <button aria-label="Guardar" @click="saveMenu" class="btn btn-primary green lighten-1">Guardar</button>
    
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Item</th>
                    <th>Precio</th>
                    <th>Tipo</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in itemMenu" class="itemMenu">
                    <td> {{ product.id }}</td>
                    <td> {{ product.item }}</td>
                    <td> {{ product.price }}</td>
                    <td> {{ product.type }}</td>
                    <td> {{ product.schedule }}</td>
                </tr>
            </tbody>
        </table>
    
    </div>
</template>

<script>
import { fb, db } from '../../firebase'
import Prueba from '@/components/Prueba'

export default {
    name: 'menuComponent',
    data() {
        return {
            itemMenu: [],
            menu: {
                id: null,
                item: null,
                price: 0,
                schedule: null,
                type: null,
            },
        };
    },
    methods: {
        readData() {
            db.collection("menu").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.itemMenu.push(doc.data())
                });
            });
        },
        saveMenu() {
            db.collection("menu").add(this.menu)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.readData()
                    reset()
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        },
        reset() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
    },
    created() {
        this.readData()
    },
    components: {
        Prueba
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #35495E;
}
</style>
