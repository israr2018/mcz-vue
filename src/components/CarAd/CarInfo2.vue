<script>

export default {
   name:'Info',
   components: {
    
  }, 
  props:{
   carData:{
    model_year:""
   }
  },
  data(){
    return {
        step:2,
        fields:{
            model_year:""
        }
    }
  },
  created(){
    this.fields.model_year=this.carData.model_year;
  },
//   emits:[
//     'update:model_year'
//   ],
  emits:[
    'add-carInfo'
  ],
  methods: { 
    register(e) {
        console.log("event");
        console.log(this.fields)
        this.$emit('add-carInfo',{ ...this.fields,step:this.step})
        // this.$emit('add-carInfo',{...values})
       e.preventDefault();
    },
  },
}
</script>
<template>
     <form @submit="register">
            <div class="grid">
              <div>
                <input v-model="fields.model_year" type="text" placeholder="Add an item" />
              </div>
             
              <div class="col-12">
              <!--    <Button  label="Previous " style="margin-left: .5em"/> -->
                  <button   style="margin-left: .5em">
                    next
                  </button>
                <!--   <Button label="Submit" style="margin-left: .5em" /> -->
              </div>
              {{this.carInfo.model_year}}
            </div>
     </form>
</template>
