/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
    <div>
        <h2>
            Upload a csv file
        </h2>
        <div class="p-col-6">
                <div class="p-inputgroup">
                <input type="file" accept=".csv" @change="handleFileUpload( $event )"/>
                </div>
        </div>
</div>
    
</template>
<script>
import Papa from 'papaparse';
export default {
  name: "UploadCSV",
  data(){
    return {
        file:'',
        content:[],
        parsed:false
        
    }
  },
  methods: {
    handleFileUpload(event){
        console.log('hi');
       this.file=event.target.files[0];
       this.parseFile();

    },
    parseFile(){
        Papa.parse( this.file, {
        header: false,
        skipEmptyLines: true,
        complete: function( results ){
          let numbers=[]
          const data=results.data[0]
          numbers= data.map((x)=>parseInt(x));
          // eslint-disable-next-line no-unused-vars
          const [a,b,c,d,e]=numbers; 
          const target=(b*d*e) + (b*d*d);
          const equation=`${b}*${d}*${e}+${b}*${d}*${d}`;
          console.log(equation);
          console.log("target ====",target)
        }
    } );
    },
    generateTargetNumber(){
        console.log(this.content)
        // eslint-disable-next-line no-unused-vars
        const [a,b,c,d,e]=this.content; 
        const target=(b*d*e) + (b*d*d);
        console.log("target ====",target)
    }
  },
   
}
</script>