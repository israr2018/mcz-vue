<template>
<div class="form-group">
    <label>{{label}}</label>
   <select
    class="form-control" 
    :class="{
        'is-valid': validator && !validator.$error && validator.$dirty,
        'is-invalid': validator && validator.$error
        }"
    @change="$emit('update:modelValue', $event.target.value)"
    
    >
    <option
        v-for="opt in options"
        :key="opt.value"
        :selected="modelValue===opt.value"
    >
    {{opt.label||'No label ' }}
    </option>
   </select>

</div>
</template>

<script>
export default {
    emits:['update:modelValue'],
    props:{
        label: {
            type: String,
            required: true
            },
        options: {
            type: Array,
            required: true
            },
            
            // Add this new prop
            modelValue: {
                type: String,
            },
         validator:{
                type:Object,
                required:false,
                validator($v){
                    return $v['$model']!==undefined;
                }
            }
        },
        computed:{
            value:{
               get(){
                return this.modelValue;
               },
               set(value){
                this.$emit('update:modelValue', value)
               }
            }
        },
      
        methods:{
            emitHandler(event){
                console.log("test",event.target.value);
                this.$emit('update:modelValue',event.target.value)

            }
        }
        }
        
</script>

<style>

</style>