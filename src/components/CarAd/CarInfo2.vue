<script>
export default {
   name:'Info',
   components: {
  }, 
  props:[
    'modelYear'
  ],
  
  data(){
    return {
        step:2,
        fields:{
            model_year:""
        }
    }
  },
//   emits:[
//     'update:model_year'
//   ],
  emits:[
    'add-carInfo'
  ],
  mounted() {
    console.log(`modelYear :`);
    // this.fields.model_year=this.modelYear;
  },
  methods: { 
    register(e) {
        console.log("event");
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
                <input type="text" v-model=fields.model_year placeholder="Add an item" />
              </div> 
             
              <div class="col-12">
              <!--    <Button  label="Previous " style="margin-left: .5em"/> -->
                  <button   style="margin-left: .5em">
                    next
                  </button>
                <!--   <Button label="Submit" style="margin-left: .5em" /> -->
              </div>
            </div>
            {{modelYear}}
     </form>
</template>
