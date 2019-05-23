<template>
    <div id="app">
        <title>SYNO<template v-if="title && title.length > 0"> - {{title}}</template></title>
        <router-view/>
    </div>
</template>

<script>
    export default {
        computed: {
            title(){
                let vm = this;
                return vm.$route.meta.title;
            }
        },
    }
</script>

<style>

</style>
