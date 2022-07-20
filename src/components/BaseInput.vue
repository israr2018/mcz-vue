<template>
<div class="form-group">
    <label>{{label}}</label>
   <input
    :value="modelValue"
    :type="type"
    class="form-control" 
    :class="{
        'is-valid': validator && !validator.$error && validator.$dirty,
        'is-invalid': validator && validator.$error
        }"
    @input="$emit('update:modelValue', $event.target.value)"
    />
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
            type: {
                type: String,
            default: 'text',
            validator(value) {
                return ['text', 'email', 'password'].includes(value);
            }
            },
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