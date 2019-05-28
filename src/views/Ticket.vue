<template>
    <div class="container ticketComponet">
        <h5>Historial de Pedidos</h5>
      
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Cantidad</th>
                    <th>Items</th>
                    <th>Total</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="product in savedTicket" class="itemMenu">
                    <td> {{ product.clientName }}</td>                  
                    <td> {{ product.itemSelecc }}</td>
                    <td> ${{ product.totalPrice }}</td>
                    <td> {{ product.productSelecc }}</td>
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
            savedTicket: [],
        };
    },
    methods: {
        readData() {
            db.collection("ticket").orderBy("totalPrice").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.savedTicket.push(doc.data())
                });
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
