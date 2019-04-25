<template>
    <div class="home">
        <div class="c-letters-wrapper"><letters></letters></div>
    </div>
</template>
<script>
import letters from './../components/Letters.vue'

export default {
    name: 'home',
    components: {
        letters: letters
    }
}
</script>

<style>
.c-letters-wrapper {
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
}
</style>
