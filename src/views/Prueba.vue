<template>
    <div class="menuComponent">
        <div class="row">
            <div class="col s12">
                <h5>Nuevo Pedido</h5>
            </div>

            <div class="col s6">
                <div class="col s6" v-for="product in itemMenu">
                    <a class="waves-effect waves-light btn green lighten-1" @click="addItem(product.item, product.price, product.schedule)">
                                            {{ product.item }} ${{ product.price }}</a></br>
                    </br>
                </div>
            </div>
    
            <div class="col s6">
                <div>
                    <input aria-label="clientName" type="text" placeholder="Cliente" v-model="ticket.clientName" class="form-control">
                    <div v-model="ticket">
                        <b>Cliente:</b> {{ ticket.clientName }}
                        </br> <b>Cantidad:</b> {{ ticket.productSelecc }}
                        </br> <b>Item seleccionados:</b> {{ ticket.itemSelecc }}
                        </br> <b>Total:</b> ${{ ticket.totalPrice }}
                    </div>
                    <button aria-label="Save" @click="saveTicket" class="btn green">Confirmar</button>
                    <button aria-label="Save" @click="reset" class="btn red">Cancelar</button>
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
                    // const algo = this.itemMenu.filter(item => item.schedule == "meal")
                    // return algo;
                });
            });
        },
        addItem(product, price, schedule) {
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
            //    Object.assign(this.ticket, this.$options.data.apply(this));
            this.ticket.clientName = null;
            this.ticket.productSelecc = 0;
            this.ticket.itemSelecc = '';
            this.ticket.idButton = '';
            this.ticket.totalPrice = 0;
        },

        toast() {
            M.toast({ html: 'I am a toast!' })
        }
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
