<script>
import NewCarAdForm from '../components/NewCarAdForm.vue'
// import Test from '../components/Test.vue'
export default {
    name:'NewCarAd',
    components:{
        NewCarAdForm
        // Test
    }
}
</script>

<template>
    
    <Card>
        <template #title>
           New Card Ad
        </template>
        <template #content>
          <new-car-ad-form />
        </template>
    </Card>

   
</template>