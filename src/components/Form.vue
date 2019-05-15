<template>
    <main class="container">
        <div class="form-group">
            <button aria-label="sandwich" class="btn waves-effect waves-light green lighten-1" @click="add"> sandwich </button>
            <button aria-label="complemento" class="btn waves-effect waves-light green lighten-1" @click="less"> complemento 1 </button>
            <button aria-label="complemento" class="btn waves-effect waves-light green lighten-1" @click="less2"> complemento 2 </button>
        </div>
        <div class="form-group">
            <button aria-label="Guardar Datos" @click="saveData" class="btn btn-primary green lighten-1">Confirmar</button>
        </div>
        <p> Orden: {{ namecounter.counter }} sandwich. {{ complementCounter.counter }} complemento1, {{ complementCounter2.counter }} complemento 2.</p>
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
            },
            complementCounter: {
                counter: 10,
            },
            complementCounter2: {
                counter: 100,
            },
        };
    },
    methods: {
        add() {
            this.namecounter.counter += 1;
        },
        less() {
            this.complementCounter.counter -= 1;
        },
        less2() {
            this.complementCounter2.counter -= 1;
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
