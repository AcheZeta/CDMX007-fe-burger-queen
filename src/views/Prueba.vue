<template>
    <div class="components">
        <div class="row">
            <div class="col s12">
                <h5>Nuevo Pedido</h5>
            </div>
    
            <div class="col s12 m6 s6">
                <div class="col s6" v-for="product in itemMenu">
                    <a class="waves-effect waves-light btn green lighten-1" @click="addItem(product.item, product.price, product.schedule)">
                                                                                {{ product.item }} ${{ product.price }}</a></br>
                    </br>
                </div>
            </div>
    
            <div class="ticket col s12 m6 s6">
                <div>
                    <b>Fecha:</b> {{ ticket.timeStamp }}
                    <input aria-label="clientName" type="text" placeholder="Cliente" v-model="ticket.clientName" class="form-control">
                    <div v-model="ticket">
                        </br> <b>Cliente:</b> {{ ticket.clientName }}
                        </br> <b>Cantidad:</b> {{ ticket.productSelecc }}
                        </br> <b>Item seleccionados:</b> {{ ticket.itemSelecc }}
                        </br> <b>Total:</b> ${{ ticket.totalPrice }}
                    </div>
                    <button aria-label="Save" @click="saveTicket" class="btn green">Confirmar</button>
                    <button aria-label="Save" @click="clearTicket" class="btn red">Cancelar</button>
                </div>
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
                clientName: null,
                productSelecc: 0,
                itemSelecc: '',
                totalPrice: 0,
                timeStamp: Date(),
            },
        };
    },
    methods: {
        readData() {
            db.collection("menu").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.itemMenu.push(doc.data())
                    // const algo = this.itemMenu.filter(item => item.schedule == "meal")
                    // return algo;
                });
            });
        },
        addItem(product, price, schedule, timeStamp) {
            this.ticket.itemSelecc += '  ' + product
            this.ticket.productSelecc++
                this.ticket.totalPrice += parseInt(price)
        },
        saveTicket() {
            db.collection("ticket").add(this.ticket)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    this.reset()
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        },
        reset() {
            this.ticket.clientName = null;
            this.ticket.productSelecc = 0;
            this.ticket.itemSelecc = '';
            this.ticket.totalPrice = 0;
        },
        clearTicket() {
            if (confirm('¿CANCELAR está orden?')) {
                this.ticket.productSelecc = 0;
                this.ticket.itemSelecc = '';
                this.ticket.totalPrice = 0;
            }
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

.ticket {
    background-color: #e8f5e9;
}
</style>
