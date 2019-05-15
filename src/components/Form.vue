<template>
    <main class="container">
        <div class="form-group">
            <input aria-label="nombre" type="text" placeholder="¿Cómo te llamas?" v-model="namecounter.name" class="form-control">
            <button aria-label="sandwich" class="btn waves-effect waves-light green lighten-1" @click="add"> sandwich </button>
            <button aria-label="complemento" class="btn waves-effect waves-light green lighten-1" @click="less"> complemento 1 </button>
            <button aria-label="complemento" class="btn waves-effect waves-light green lighten-1" @click="less2"> complemento 2 </button>
        </div>
        <div class="form-group">
            <button aria-label="Guardar Datos" @click="saveData" class="btn btn-primary green lighten-1">Confirmar</button>
        </div>
        <p><b>Orden:</b><br>{{ namecounter.counter }} sandwich. <br> Jitomate: {{ namecounter.counter1 }} <br> Lechuga: {{ namecounter.counter2 }}</p>
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
                counter1: 10,
                counter2: 2,
            },
        };
    },
    methods: {
        add() {
            this.namecounter.counter += 1;
        },
        less() {
            this.namecounter.counter1 -= 1;
        },
        less2() {
            this.namecounter.counter2 -= 1;
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
