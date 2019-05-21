<template>
    <div class="container menuComponent">
        <h5>Desayuno</h5>
        <div>
            <input aria-label="clientName" type="text" placeholder="Cliente" v-model="ticket.clientName" class="form-control">
            <button v-for="product in itemMenu" :value="product.item" v-model="ticket" class="btn waves-effect waves-light green lighten-1" @click="addItem"> {{ product.name }} ${{ product.price }} </button>
            </br>
            <button aria-label="Save" @click="saveTicket" class="btn green lighten-1">Confirmar</button>
    
            <div v-model="ticket">
                <b>Cliente:</b> {{ ticket.clientName }}
                </br>
                <b>Productos seleccionados:</b> {{ ticket.productSelecc }}
            </div>
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
                clientName: "",
                productSelecc: 0,
                itemSelecc: "",
                time: "",
            }
        };
    },
    methods: {
        readData() {
            db.collection("desayuno").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.itemMenu.push(doc.data())
                });
            });
        },
        addItem() {
            this.ticket.productSelecc += 1;
            
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
    mounted() {
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
