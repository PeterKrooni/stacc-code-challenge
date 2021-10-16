<template>
    <div id="container">
        <input type="text" id="search-bar" @keyup.enter="search" :v-model="query">
    </div>
</template>


<script>
export default{
    data(){
        return {
            api_response: Object,
            csv: Object,
            use_api: false
        }
    },
    methods: {
        async search(e){
            console.log(e)
            //--- Currently not using API as it is giving CORS errors ---
            const res = await fetch (`api/pep?name=${e.target.value}`)
            const data = await res.json();
            console.log("data received from API call: \n", data);
            this.api_response = data;
            this.$emit('search');
        }
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