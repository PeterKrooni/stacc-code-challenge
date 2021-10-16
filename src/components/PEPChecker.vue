<template>
    <div id="container">
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
            this.wiki_found = false;
        },
        async setWikiImage(){
            // Search for wiki entry of persons
            const res = await fetch (`w/api.php?format=json&action=query&prop=extracts|pageimages|info&exintro&explaintext&inprop=url&generator=search&gsrsearch=intitle:${this.name}&gsrlimit=1&redirects=1`)
            const data = await res.json();
            console.log(data)
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
        }
    }
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
  margin-top: 5%;
}
#wiki-info{
    max-width: 350px;
    text-align: left;
}
</style>