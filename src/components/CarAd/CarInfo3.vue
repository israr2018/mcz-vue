<script>
import { useCarAdStore } from '@/stores/newadd'
const store =useCarAdStore();
export default {
   name:'Info',
   components: {
  }, 
  data(){
    return {
        store,  
        step:2,
        fields:{
          model_year:''
        },
        fieldErrors:{
          model_year:undefined
        }
        
    }
  },
  emits:[
    'add-carInfo'
  ],
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      this.fieldErrors=this.validateForm(this.fields)
      if(Object.keys(this.fieldErrors).length) return;
        this.$emit('add-carInfo',{...this.fields,step:this.step})
      store.setCarModel(this.fields.model_year)
      console.log("Forms is submitted sucessfully!")
      
    },
    validateForm(fields){
      const errors={};
      if(!fields.model_year) errors.model_year="Model Year is required field";
      return errors;
    },
  
  },
    mounted(){
      this.fields.model_year=this.store.carInfo.model_year;
  }
}
</script>
<template>
     <form @submit="submitForm">
            <div class="grid">
             <div class="col-6">
              
                <div class="p-col-6">
                    <div class="p-inputgroup">
                      <input
                          placeholder="model year"
                          :class="{ 'p-invalid': !fieldErrors.model_year=='undefined'}"
                          v-model="fields.model_year"
                        
                      />
                    </div>
                    <small class="p-inputgroup p-error" v-if="fieldErrors.model_year!==undefined" 
                    >{{fieldErrors.model_year}}
                    </small>
                </div>
            </div>
            <div class="col-12">
             <!--    <Button  label="Previous " style="margin-left: .5em"/> -->
                <!-- <Button  label="Next" style="margin-left: .5em"/> -->
                <Button  type="submit" label="Next" style="margin-left: .5em" />
            </div>
            </div>
     </Form>
</template>
