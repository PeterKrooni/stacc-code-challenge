<template>
    <div id="container">
        <input type="text" id="search-bar" @keyup.enter="search()">
    </div>
</template>


<script>
export default{
    data(){
        return {
            api_response: Object
        }
    },
    methods: {
        async search(pep){
            //https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=Knut Arild Hareide
            //`/api/pep?name=${pep}`
            pep
            const res = await fetch ("https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=Knut%20Arild%20Hareide")
            const data = await res.json();
            this.api_response = data;
            this.$emit('search');
        },
    },
    emits: ['search']
}
</script>

<style scoped>
#container{
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width: 50%;
    font-size: 3em;
    color: rgb(125, 125, 125);
    background-color: rgb(235, 235, 235);
    border: none;
}
</style>