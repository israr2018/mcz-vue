<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import { useCarAdStore } from '../../stores/newad_store'
// eslint-disable-next-line no-unused-vars

const schema = yup.object().shape({
  model_year: yup.string().required().label("car model year"),
  model_name: yup.string().required()

  
});
export default {
   name:'Info', 
   components: {
    Form,
    Field,
  }, 
  data(){
    const store=useCarAdStore();
    return {
        store,
        schema,
        nextStep:2,
        brand_name:'',
        model_name:'',
        model_year:'',
        km_driven:'',
        registration_type:"",
        photoFile:null,
        selectedFile: [],
        grouped_models:[
              {
                label:"Toyota" ,code:'Toyota',
                items:[
                  {label:'Vitz',value:'Vitz'},
                  {label:'Passo',value:'Passo'},
                  {label:'Corrola',value:'Corrola'}
                ]
              },
              {
              label:"Suzuki" ,code:'Suzuki',
              items:[
              {label:'Mehran',value:'Mehran'},
              {label:'Cultuz',value:'Passo'},
              {label:'Alto',value:'Alto Vxr'}
            ]
           },
         
         
         ],
      registration_types:[
         {label:'Registered',value:'registerd'},
         {label:'NCP',value:'NCP'},
         {label:'NCP-Cut',value:'NCP-Cut'},
      ]
    }
  },
  emits:[
    'add-carInfo'
  ],
  methods: {
    register(values) {
      console.log(values);
      console.log(this.model_year)
      this.store.carInfo.model_year=values.model_year;
      this.store.carInfo.brand_name=values.brand_name;
      this.$emit('add-carInfo',{...values,step:this.nextStep})
    //    this.$emit('add-carInfo',{...values})
    },
    changeHandler(e){
      console.log(e)
      // this.brand_name=e.target;
    },
    onSelectPics(evt){
      console.log("onChange");
      const reader = new FileReader();
      reader.readAsDataURL(evt.target.files[0]);
      reader.onload = () => {
      this.photoFile = reader.result;
      };
    }
  
    },
    mounted(){
      this.$refs.step1Form.setValues({
        model_year:this.store.carInfo.model_year,
        brand_name:this.store.carInfo.brand_name
      })

    }
}
</script>
<template>
     <Form v-slot="{values}" @submit="register" :validation-schema="schema" ref="step1Form">
            <div class="grid">
             <div class="col-6">
                <Field
                v-slot="{ field,errors }"
                v-model="model_year"
                name="model_year"
                
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <InputText
                        placeholder="model year"
                        :class="{ 'p-invalid': errors.length > 0 }"
                        v-bind="field"
                        
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >Car model  is invalid
                    </small>
                </div>
                </Field>
            </div>
             <div class="col-6">
              <Field
                v-slot="{ field,handleChange,errors }"
                v-model="brand_name"
                name="model_name">

                <div class="p-col-6">
                    <div class="p-inputgroup">
                      <Dropdown
                          :class="{ 'p-invalid': errors.length > 0 }"
                          :options="grouped_models"
                          optionValue="label"
                          optionLabel="label" 
                          optionGroupLabel="label" 
                          optionGroupChildren="items"
                          :model-value="field.value"
                          placeholder="Select brand and model "
                          @update:modelValue="handleChange"
                          
                      />
                  
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0">
                    Car model name  is invalid
                    </small>
                  
                </div>
                 </Field>
              </div>
            <div class="col-6">
              <Field
                v-slot="{ field,handleChange,errors }"
                v-model="registration_type"
                name="registration_type">

                <div class="p-col-6">
                    <div class="p-inputgroup">
                      <Dropdown
                          :class="{ 'p-invalid': errors.length > 0 }"
                          :options="registration_types"
                          optionValue="label"
                          optionLabel="label" 
                          :model-value="field.value"
                          placeholder="Select registration type "
                          @update:modelValue="handleChange"
                          
                      />
                  
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0">
                    Car model name  is invalid
                    </small>
                  
                </div>
                 </Field>
            </div>
            <div class="col-6">
                <Field
                v-slot="{ field,errors }"
                v-model="km_driven"
                name="km_driven"
                
                >
                <div class="p-col-6">
                    <div class="p-inputgroup">
                    <InputText
                        placeholder="KM driven"
                        :class="{ 'p-invalid': errors.length > 0 }"
                        v-bind="field"
                        
                    />
                    </div>
                    <small class="p-inputgroup p-error" v-if="errors.length > 0"
                    >KM driven  is invalid
                    </small>
                </div>
                </Field>
            </div>
            <div class="col-6">
              <FileUpload name="demo[]" url="./upload" previewWidth="300" multiple="true" uploader>
              <template #empty>
              <p>Drag and drop files to here to upload.</p>
              </template>
              </FileUpload>
            </div>
            
            <div class="col-12">
                <Button  type="submit" label="Next" style="margin-left: .5em" />
            </div>
            {{values}}
            </div>
     </Form>
</template>
