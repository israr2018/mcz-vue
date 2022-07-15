<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
const schema = yup.object().shape({
  model_year: yup.string().required().label("car model year"),

});
export default {
   name:'Info',
   components: {
    Form,
    Field,
  }, 
  data(){
    return {
        schema,
        model_year:'',
        step:2,
        form:{
          model_year:''
        }
        
    }
  },
  emits:[
    'add-carInfo'
  ],
  methods: {
    register(values) {
      console.log(values);
      this.$emit('add-carInfo',{...values,step:this.step})
    //    this.$emit('add-carInfo',{...values})
    },
    inputHandler(e){
      this.model_year=e.target.value;
    }
  
    },
    mounted(){
      // this.form.model_year=2036
      this.model_year=2036
    }
}
</script>
<template>
     <Form @submit="register" :validation-schema="schema">
            <div class="grid">
             <div class="col-6">
                <Field
                v-slot="{ field,errors }"
                name="model_year"
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <InputText
                        placeholder="model year"
                        :class="{ 'p-invalid': errors.length > 0 }"
                        v-bind="field"
                        name="field"
                        :value="model_year"
                        @input="inputHandler"
                      
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >Car model  is invalid
                    </small>
                </div>
                </Field>
            </div>
            <div class="col-12">
             <!--    <Button  label="Previous " style="margin-left: .5em"/> -->
                <!-- <Button  label="Next" style="margin-left: .5em"/> -->
                <Button  type="submit" label="Next" style="margin-left: .5em" />
            </div>
            </div>
     </Form>
</template>
