<template>
    <div class="container menuComponent">
        <h5>Desayuno</h5>
        <input aria-label="clientName" type="text" placeholder="Cliente" v-model="ticket.clientName" class="form-control">
        <button v-for="product in itemMenu" v-bind:key="product.id" class="btn waves-effect waves-light green lighten-1" @click="addItem"> {{ product.item }} ${{ product.price }} </button>
        </br>
        <button aria-label="Save" @click="saveTicket" class="btn green lighten-1">Confirmar</button>
        <div>{{ ticket }}</div>
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
            ticket: {
                clientName: null,
                itemData: []
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
        addItem() {

        },
        saveTicket() {
            db.collection("ticket").add(this.ticket)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.readData()
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
