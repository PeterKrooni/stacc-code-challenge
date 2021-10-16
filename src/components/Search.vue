<template>
    <div class="searchBox">
        <input class="searchInput" type="text" name="" placeholder="Search" @keyup.enter="search">
        <button class="searchButton" href="#">
            <i class="fas fa-search">
                
            </i>
        </button>
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
        async search(e){
            const res = await fetch (`api/pep?name=${e.target.value}`)
            const data = await res.json();
            this.api_response = data;
            console.log(this.api_response)
            if (this.api_response['numberOfHits'] === 0){
                this.$emit('failed');
            }else{
                this.$emit('search', this.api_response);
            }
        }
    },
    emits: ['search', 'failed']
}
</script>

<style scoped>
body {
    background-image: linear-gradient(to right , #cb2d3e , #ef473a);
}

.searchBox {
    background: #e4e4e4a2;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
}

.searchBox:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
}

.searchBox:hover > .searchButton {
  background: rgba(238, 238, 238, 0.787);
  color : #bdbdbd;
}

.searchButton {
    color: rgb(41, 41, 41);
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f0ddddfd;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}

.searchInput {
    border:none;
    background: none;
    outline:none;
    float:left;
    padding: 0;
    color: rgb(0, 0, 0);
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;

}

@media screen and (max-width: 620px) {
.searchBox:hover > .searchInput {
    width: 150px;
    padding: 0 6px;
}
}
</style>