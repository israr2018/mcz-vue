
<template>
   <div id="app" class="container py-4">
        <div class="row">
        <div class="col-12">
        <form @submit.prevent="onSubmit" >
            <base-input 
                label="First Name"
                type="text" 
                v-model="$v.form.firstName.$model" 
                :validator="$v.form.firstName"
                
            />
            <base-input 
                label="Last Name"
                type="text" 
                v-model="$v.form.lastName.$model" 
                :validator="$v.form.lastName"
                
            />
            <base-input 
                label="Email"
                type="text" 
                v-model="$v.form.email.$model" 
                :validator="$v.form.email"
                
            />
            <base-input 
                label="Website"
                type="text" 
                v-model="$v.form.website.$model" 
                :validator="$v.form.website"
                
            />
            <base-select
                label="Country"
                type="text" 
                v-model="$v.form.country.$model" 
                :options="countries"
                :validator="$v.form.country"
                
            />
           
            <button  type="submit"  :disabled="$v.$error" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required,url,alpha, email} from '@vuelidate/validators'
import BaseInput from '../components/BaseInput.vue'
import BaseSelect from '../components/BaseSelect.vue'
export default {
    components:{
    BaseInput,
    BaseSelect
    },
   
    setup(){
        return {
            $v:useVuelidate()
        }
    },
    data() {
        return {
            form:{
                firstName:'',
                lastName:'',
                email:'',
                country:'',
                website:'',

            },
            countries:[
                {
                    label:"Pakistan", value:"pakistan"
                },
                {
                    label:"India", value:"india"
                }
            ]
        }
    },
    validations(){
       return {
        form:{
            firstName:{alpha,required},
            lastName:{alpha,required},
            email:{required,email},
            website:{required,url},
            country:{required}
        }
       }
    },
    methods:{
        onSubmit(){
            console.log(this.form)
            // if(!this.isFormValid) return ;
            console.log("Form is submitted sucessfully!",this.form)
        },
        update1(value){
            console.log("value",value);
            this.form.firstName=value;
        }
    },
    computed:{
        isFormValid(){
            return this.form.firstName.length > 0
             && this.form.lastName.length > 0 
             && this.form.email.length > 0
             

        }
    }
    
}
</script>