<template>
    <div class="hello">
        <h5>Menú</h5>
        <div v-for="item in msg" class="item">
        {{ item.item }} ${{ item.price }}
        </div>
    </div>
</template>div

<script>
import Prueba from '@/components/Prueba'
import axios from 'axios'
export default {
    name: 'hello',
    data() {
        return {
            msg: null
        }
    },
    mounted() {
        axios
            .get('https://raw.githubusercontent.com/AcheZeta/CDMX007-fe-burger-queen/master/menu.json')
            .then(response => (this.msg = response.data))
            .catch(error => console.log(error))
    }
};
components: {
    Prueba
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
