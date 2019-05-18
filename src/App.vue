<template>
    <div id="app">
        <nav-component/>
        <router-view/>
    </div>
</template>

<script>
import NavComponent from '@/components/Nav'


export default {
    name: 'app',
    data() {
        return {
            id: []
        }
    },
    components: {
        NavComponent,

    },
};
</script>

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

main {
    text-align: center;
    margin-top: 40px;
}

header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #ffffff;
}

header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
}

.menu {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
    width: 20%;
}

.menu:hover {
    background-color: #4CAF50;
    color: white;
}
</style>
