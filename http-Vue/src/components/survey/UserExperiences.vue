<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurveys()">Load Submitted Experiences</base-button>
      </div>
      <!-- loading  -->
      <p v-if="loading">still loading...</p>
      <!-- gagal koneksi -->
      <p v-else-if="!loading && errorCondition">{{errorCondition}}</p>
      <!-- kondisi ketika tidak ada data -->
      <p v-else-if="!loading && (!results || results.length===0)"> no store data record on database</p>
      <!-- ada data -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      loading:false,
      errorCondition: null
    }  
  },
  // ketika diklik maka akan muncul data , tapi saat refres akan hilang 
  methods:{
    loadSurveys(){
      // Get bawaaan javascript  (DEFAULT is method GET)
      this.loading=true;
      this.errorCondition=null;
      fetch('https://loginauthentication-e6def.firebaseio.com/Surveys.json',{})
        .then(Response=>{
          if(Response.ok){
            return Response.json();
          }
        })
        .then(data=>{
          this.loading=false
          const result = [];  
          for (const id in data){
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            })
          }
          this.results = result;
        })
        .catch((error)=>{
          console.log(error);
          this.loading=false;
          this.errorCondition ="Failed to fetch data - please try again"
        })
    }
  },
  // load tanpa perlu clik lagi, bahkan saat di refresh
  mounted(){
    this.loadSurveys(); 
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>