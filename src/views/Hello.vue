<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <prueba/>
  </div>
</template>

<script>
import Prueba from '@/components/Prueba'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Burger Queen'
    }
  },
  components:{
    Prueba
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
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
