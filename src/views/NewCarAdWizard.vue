<script>
// import CarInfo from '../components/CarAd/CarInfo.vue'
import CarInfo2 from '../components/CarAd/CarInfo2.vue'
import EngineInfo from '../components/CarAd/EngineInfo.vue'
export default {
    name:'NewCarAd',
    components:{
        'car-info2':CarInfo2,
        'engine-info':EngineInfo
    },
    
       data(){
        return {
            title:"",
            step:1,
            next:false,
            carInfo:{
                brand_name:"",
                model_name:"",
                model_year:""
            },
            engineInfo:{
                engineType:""
            },
            registrationInfo:{
                registraionType:""
            },
            transmissionInfo:{
                transmissionType:""
            },
            carPics:{

            },
            sellerInfo:{
                name:"",
                address:"",
                comments:"",
                demand:""
            }

        }
    },
     methods:{
        addCarInfo(payload){
            console.log("value",payload)
            this.step=payload.step;
        }

    }

}
</script>
<template>
    <Card>
        <template #title>
        New Car Ad
        </template>
        <template #content>
          
            <car-info2  v-if="step==1"  :car-data="this.carInfo" @add-carInfo="addCarInfo"  />
             <engine-info v-if="step==2"   @add-carInfo="addCarInfo"  />
           
        </template>
       
    </Card>
</template>