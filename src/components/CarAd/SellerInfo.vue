<script>
import { Form, Field } from "vee-validate";
// import * as yup from "yup";
export default {
    components:{
        Form,
        Field
    },
    setup() {
        
    },
}
</script>
<template>
    <Form v-slot="{values}" @submit="register" :validation-schema="schema" ref="step3Form">
     <div class="grid">
        <div class="col-6">
            <Field
                v-slot="{field,handleChange }"
                v-model="seller_name"
                name="seller_name"
                >
                <div class="p-col-6">
                <div class="p-inputgroup">
                    <InputText 
                    v-model="value" 
                    placeholder="Please type your name"
                    :model-value="field.value"
                    @update:model-value='handleChange'
                    
                    />
                </div>
                </div>
            </Field>
        </div>
        <div class="col-6">
            <Field
                v-slot="{field,handleChange }"
                v-model="p"
                name="mobile_number"
                
                >
            <div class="p-col-6">
             <div class="p-inputgroup">
                <InputText 
                v-model="value" 
                placeholder="Please type your mobile number"
                :model-value="field.value"
                @update:model-value='handleChange'
                
                />
             </div>
            </div>
            </Field>
        </div>
        <div class="col-12">
            <Field
                v-slot="{field,handleChange }"
                v-model="seller_address"
                name="seller_address"
                >
            <div class="p-col-12">
             <div class="p-inputgroup">
                <InputText
                    v-model="value" 
                    placeholder="Please type your address"
                    :model-value="field.value"
                    @update:model-value='handleChange'
                    />
             </div>
            </div>
            </Field>
        </div>
       <div class="col-12">
            <Field
                v-slot="{field,handleChange }"
                v-model="seller_comments"
                name="seller_comments"
                >
                <Editor 
                v-model="value" 
                placeholder="Please type your comments"
                :model-value="field.value"
                @update:model-value='handleChange'
                editorStyle="height: 300px"
                
                />
            
            </Field>
        </div>
       

    </div>
      <div class="col-12">
                <Button  type="submit" label="Next" style="margin-left: .5em" />
      </div>
    {{values}}
    </Form>
</template>