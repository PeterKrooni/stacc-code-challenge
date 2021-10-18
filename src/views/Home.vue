<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="logo">
    <div id="vs">
      <div>
        <PEPChecker class="pep-check" @score="getScore1"/>
      </div>
      <div id="vs-indicator" v-show="vs">
        <p>Score Difference:</p>
        <p id="vs-diff" :style="[(scorediff>=0) ? {'color': 'green'} : {'color': 'red'}]">{{scorediff}}</p>
      </div>
      <div v-show="vs">
        <PEPChecker class="pep-check" @score="getScore2"/>
      </div>
    </div>
    <div id="btn-container">
      <button class="plus-button plus-button--large" @click="toggleVs">Compare</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PEPChecker from '@/components/PEPChecker.vue'

export default {
  name: 'Home',
  components: {
    PEPChecker,
  },
  data() {
    return {
      vs: false,
      score1: 0,
      score2: 0,
      scorediff: 0
    }
  },
  methods: {
    toggleVs(){
      this.vs= !this.vs;
    },
    getScore1(score){
      this.score1 = score.toFixed(4);
      this.scorediff = (this.score2 - this.score1).toFixed(4);
    },
    getScore2(score){
      this.score2 = score.toFixed(4);
      this.scorediff = (this.score2 - this.score1).toFixed(4);
    }
  }
}
</script>


<style scoped>
#logo{
  width: 220px;
  height: 140px;
  margin-bottom: 1%;
}
#vs{
  display: flex;
  justify-content: center;
  flex-flow: row;
}
@media screen and (max-width: 620px){
  #vs{
    flex-flow: column;
  }
}
.plus-button {
	border: 2px solid lightgrey;
	background-color: rgb(241, 241, 241);
  color: rgb(61, 0, 0);
	font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: 7.25em;
  height: 2.25em;
}
.plus-button:hover{
  opacity: 0.5;
  transition-duration: 0.1s;
}
#btn-container{
  width: 99%;
  overflow: hidden;
	display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
}
@media screen and (max-height: 920px){
  #btn-container{
    bottom: 95%;
  }
}
@media screen and (max-height: 920px){
  .plus-button{
    font-size: 12px;
    width: 6em;
    height: 2em;
    padding: 5px;
  }
}
#versus-container{
  margin-top: 10%;
}
@media screen and (max-height: 812px) and (max-width: 400px){
  #vs-indicator{
    padding-top: 20%;
    padding-bottom: 20%;
  }
}
#vs-indicator{
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 5%;
  color: rgb(20, 20, 20);
  text-shadow: 0 0 1px rgb(119, 119, 119);
  font-family: 'Candara light'; 
  font-size: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
#vs-indicator p {
  margin: 5px;
}
#vs-diff{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
}
</style>
