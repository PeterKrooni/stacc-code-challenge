<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="logo">
    <div id="vs">
      <div>
        <PEPChecker class="pep-check" />
      </div>
      <div id="vs-indicator" v-show="vs">
        <p>VS</p>
      </div>
      <div v-show="vs">
        <PEPChecker class="pep-check" />
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
    }
  },
  methods: {
    toggleVs(){
      this.vs= !this.vs;
    }
  }
}
</script>


<style scoped>
#logo{
  width: 220px;
  height: 140px;
  margin-bottom: 5%;
}
#vs{
  display: flex;
  justify-content: space-evenly;
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
@media screen and (max-width: 620px){
  #btn-container{
    bottom: 90%;
  }
}
#versus-container{
  margin-top: 10%;
}
#vs-indicator{
  color: rgb(85, 0, 0);
  text-shadow: 0 0 4px rgb(119, 119, 119);
  font-family: 'Brush Script MT', 'Brush Script Std', 'cursive';
  margin-top: 10%;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
