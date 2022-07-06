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
  props:{
    model_year:String
  },
  data(){
    return {
        schema,
        step:2,
        data:{
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
  methods: {
    register(values) {
      console.log(values);
        this.$emit('add-carInfo',{...values,step:this.step})
    //    this.$emit('add-carInfo',{...values})
    },
    modelYearChange(e){
        console.log(e.target.value)
        // this.$emit('add-carInfo',e.target.value)
    }
  },
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
                        @input="modelYearChange"
                        :value=field.value
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
                <Button  label="Next" style="margin-left: .5em"/>
              <!--   <Button label="Submit" style="margin-left: .5em" /> -->
            </div>
            </div>
     </Form>
</template>
