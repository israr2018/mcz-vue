<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
const schema = yup.object().shape({
  engine_type: yup.string().required().label("engine type"),

});
export default {
    name:'EngineInfo',
    components: {
    Form,
    Field,
  }, 
    data(){
        return {
            nextStep:3,
            prevStep:1,
            schema,
            engine_types:[
              {label:"Petrol",value:"petrol"},
              {label:"Diesel",value:"diesel"},
              {label:"Hybrid",value:"hybrid"},

            ],
            transmission_types:[
              {label:"Manual",value:"manual"},
              {label:"Automatic",value:"automatic"}

            ] 
        }
        
    },
    emits:[
    'add-carInfo'
    ],
    methods: {
    register(values) {
      console.log(values);
       this.$emit('add-carInfo',{...values,step:this.nextStep})
    },
    goBack() {
       this.$emit('add-carInfo',{step:this.prevStep})
    },

    modelYearChange(){
        // console.log(e)
        // console.log(e.target.value)
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
                v-slot="{ field, errors,handleChange }"
                v-model="engine_type"
                name="engine_type"
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <Dropdown
                        placeholder="Engine Type"
                        :options="engine_types"
                        optionLabel='label'
                        optionValue='value'
                        :model-value="field.value"
                        @update:modelValue="handleChange"

                        :class="{ 'p-invalid': errors.length > 0 }"
                        
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >Engine type is invalid
                    </small>
                </div>
                </Field>
            </div>
             <div class="col-6">
                <Field
                v-slot="{ field, errors,handleChange }"
                v-model="transmission_type"
                name="transmission_type"
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <Dropdown
                        placeholder="Transmission Type"
                        :options="transmission_types"
                        optionLabel='label'
                        optionValue='value'
                        :model-value="field.value"
                        @update:modelValue="handleChange"

                        :class="{ 'p-invalid': errors.length > 0 }"
                        
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >Engine type is invalid
                    </small>
                </div>
               
                </Field>
            </div>
             <div class="col-6">
                <Field
                v-slot="{ field,errors }"
                v-model="engine_capacity"
                name="engine_capacity"
                
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <InputText
                        placeholder="Engince capacity 1000cc"
                        :class="{ 'p-invalid': errors.length > 0 }"
                        v-bind="field"
                        
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >engine capacity  is invalid
                    </small>
                </div>
                </Field>
            </div>
            <div class="col-12">
                <Button  label="Previous " @click="goBack" style="margin-left: .5em"/>
                <Button type="submit" label="Next" style="margin-left: .5em"/>
              <!--   <Button label="Submit" style="margin-left: .5em" /> -->
            </div>
            </div>
     </Form>
</template>