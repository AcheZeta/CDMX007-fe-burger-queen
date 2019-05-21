<template>
    <div class="container menuComponent">
        <h5>Menú</h5>
        <input aria-label="clientName" type="text" placeholder="Cliente" v-model="ticket.clientName" class="form-control">
        <div v-for="product in itemMenu">
            <button class="btn waves-effect waves-light green lighten-1" @click="addItem(product.item, product.price)"> {{ product.item }} ${{ product.price }} </button>
        </div>
        </br>
        <button aria-label="Save" @click="saveTicket" class="btn green lighten-1">Confirmar</button>
    
        <div v-model="ticket">
            <b>Cliente:</b> {{ ticket.clientName }}
            </br> <b>Cantidad:</b> {{ ticket.productSelecc }}
            </br> <b>Item seleccionados:</b> {{ ticket.itemSelecc }}
            </br> <b>Total:</b> {{ ticket.totalPrice }}
        </div>
    
    
    
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
                productSelecc: 0,
                itemSelecc: '',
                idButton: '',
                totalPrice: 0,
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
        addItem(product, price) {
            console.log(product, price)
            this.ticket.itemSelecc += " - " + product
            this.ticket.productSelecc++
            this.ticket.totalPrice += parseInt(price) 
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
