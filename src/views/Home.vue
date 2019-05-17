<template>
    <div class="container hello">
        <h5>componente de home</h5>
        <figure>
        </figure>
    <prueba/>

        <form-component/>
    </div>
</template>


<script>
import FormComponent from '@/components/Form'
import Prueba from '@/components/Prueba'

export default {
    components: {
        FormComponent,
        Prueba
    }
}
</script>

