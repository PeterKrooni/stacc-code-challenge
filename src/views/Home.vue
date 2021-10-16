<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="logo">
    <div id="searchbox">
      <Search @search="search" @failed="searchFail" />
    </div>
    <div>
      <div v-show="show_notfound" id="none-found-container">
          <h5>No results found.</h5>
      </div>
      <DisplayPEP v-show="show_pep" 
        :name="name"
        :score="score"
        :identifier="identifier"
        :dob="dob"
        :wiki_image="wiki_image"
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
        show_notfound: false,
        name: "-",
        score: "-",
        identifier: "-",
        dob: "-",
        wiki_image: String,
    }
  },
  methods: {
    async search(api_response){
      this.wiki_image = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"; // first image result of "default picture" on google images

      this.name = api_response['hits']['0']['name']
      this.score = api_response['hits']['0']['score']
      this.identifier = api_response['hits']['0']['identifiers']
      this.dob = api_response['hits']['0']['birth_date']

      this.setWikiImage();
      
      this.show_notfound = false;
      this.show_pep = true;
    },
    searchFail(){      
      this.show_notfound = true;
      this.show_pep = false;
    },
    async setWikiImage(){
      // Search for wiki entry of persons
      const res = await fetch (`w/api.php?format=json&action=query&prop=extracts|pageimages&exintro&explaintext&generator=search&gsrsearch=intitle:${this.name}&gsrlimit=1&redirects=1`)
      const data = await res.json();
      const wiki_page_title = data['query']['pages'][Object.keys(data['query']['pages'])]['title'];
      
      // Get thumbnail from wiki page
      const wiki_page_image = await fetch (`w/api.php?action=query&titles=${wiki_page_title}&prop=pageimages&format=json&pithumbsize=250`)
      const page_data = await wiki_page_image.json();
      console.log(page_data);
      // Get source URL of thumbnail
      this.wiki_image = page_data['query']['pages'][Object.keys(page_data['query']['pages'])]['thumbnail']['source'];
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
#logo{
  width: 220px;
  height: 140px;
}
</style>
