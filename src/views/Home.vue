<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="searchbox">
      <Search @search="search" />
    </div>
    <div>
      <DisplayPEP v-show="show_pep" 
        :name="name"
        :score="score"
        :dataset="dataset"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import DisplayPEP from '@/components/DisplayPEP.vue'

export default {
  name: 'Home',
  components: {
    Search,
    DisplayPEP
  },
  data(){
    return {
        show_pep: false,
        name: "-",
        score: "-",
        dataset: "-",
    }
  },
  methods: {
    search(api_response){
      console.log(api_response)
      this.name = api_response['hits']['0']['name']
      this.score = api_response['hits']['0']['score']
      this.dataset = api_response['hits']['0']['dataset']
      this.show_pep = true;
    }
  }
}
</script>


<style scoped>
#searchbox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%;
}
</style>
