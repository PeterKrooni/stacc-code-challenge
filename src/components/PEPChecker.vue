<template>
    <div id="container">

        <div id="searchbox">
            <Search  @searching="loadSearchingAnimation" @search="search" @failed="searchFail" />
        </div>
        <div>
            <div v-show="show_notfound" id="none-found-container">
                <h5>No results found.</h5>
            </div>

            <div class="loader" v-show="currently_searching">Loading...</div>

            <DisplayPEP v-show="show_pep" 
                :name="name"
                :score="score"
                :identifier="identifier"
                :dob="dob"
                :wiki_image="wiki_image"
            />
        </div>

        <div id="wiki-info" v-show="wiki_found">
            <p>{{wiki_info}} <a :href="wiki_link" target="_blank">read more</a></p>
        </div>
    </div>
</template>

<script>

import Search from '@/components/Search.vue'
import DisplayPEP from '@/components/DisplayPEP.vue'

export default{
  name: 'PEPChecker',
  components: {
    DisplayPEP,
    Search,
  },
  data() {
      return {
            show_pep: false,
            show_notfound: false,
            currently_searching: false,
            name: "-",
            score: "-",
            identifier: "-",
            dob: "-",
            wiki_image: String,
            wiki_info: "",
            wiki_link: "#",
            wiki_found: false
        }
    },
    methods: {
        async search(api_response){
            this.wiki_image = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"; // first image result of "default picture" on google images
            this.wiki_found = false;
            this.currently_searching = false;

            this.name = api_response['hits']['0']['name']
            this.score = api_response['hits']['0']['score']
            this.identifier = api_response['hits']['0']['identifiers']
            this.dob = api_response['hits']['0']['birth_date']

            // Emit score for versus 
            this.$emit('score', this.score);

            this.getWikiData();
            
            this.show_notfound = false;
            this.show_pep = true;
        },
        searchFail(){      
            this.show_notfound = true;
            this.show_pep = false;
            this.wiki_found = false;
            this.wiki_info = "";
            this.wiki_link = "#";
            this.currently_searching = false;
        },
        loadSearchingAnimation(){
            this.currently_searching = true;
            this.show_pep = false;
            this.wiki_found = false;
            this.show_notfound = false;
        },
        async getWikiData(){
            // Search for wiki entry of persons
            const res = await fetch (`w/api.php?format=json&action=query&prop=extracts|pageimages|info&exintro&explaintext&inprop=url&generator=search&gsrsearch=intitle:${this.name}&gsrlimit=1&redirects=1`)
            const data = await res.json();

            if(res.ok){
              const wiki_page_title = data['query']['pages'][Object.keys(data['query']['pages'])]['title'];
              
              // Set wiki extract
              this.wiki_info = data['query']['pages'][Object.keys(data['query']['pages'])]['extract'];
              if (this.wiki_info.length > 200){
                  this.wiki_info = this.wiki_info.substring(0, 199);
                  this.wiki_info += "...";
                  // Set link to wiki page
                  this.wiki_link = data['query']['pages'][Object.keys(data['query']['pages'])]['canonicalurl']
              }
              this.wiki_found = true;
              
              // Get thumbnail from wiki page
              const wiki_page_image = await fetch (`w/api.php?action=query&titles=${wiki_page_title}&prop=pageimages&format=json&pithumbsize=250`)
              const page_data = await wiki_page_image.json();
              // Get source URL of thumbnail
              this.wiki_image = page_data['query']['pages'][Object.keys(page_data['query']['pages'])]['thumbnail']['source'];
            }else{
              console.error("Wiki response unsuccessful ", res.data, res.code, res.message);
              this.searchFail(); 
            }
        }
    },
    emits: ['score']
}
</script>

<style scoped>
#container{
    min-width: 350px;
    box-shadow: 1px 5px 5px 1px rgb(238, 238, 238);
    padding: 30px;
    border-radius: 20px;
}
@media screen and (max-width: 620px){
  #container{
    padding: 0px;
    box-shadow: none;
  }
}
#searchbox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#wiki-info{
    max-width: 350px;
    text-align: left;
}

/* -- searching spinner, from https://projects.lukehaas.me/css-loaders/ --- */
.loader,
.loader:before,
.loader:after {
  background: #3b0000a6;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 0.7em;
  height: 1em;
}
.loader {
  color: #3b0000a6;
  text-indent: -9999em;
  margin: 88px auto;
  position: absolute;
  left: 50%;
  font-size: 8px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 2em;
  }
  40% {
    box-shadow: 0 -1em;
    height: 3em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 2em;
  }
  40% {
    box-shadow: 0 -1em;
    height: 3em;
  }
}



</style>