import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'  
import "primeflex/primeflex.css";
// import 'primevue/resources/themes/bootstrap4-light-blue/theme'

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css"                         //icons
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Editor from 'primevue/editor';
import Steps from 'primevue/steps';
import router from './vue-router'
const app=createApp(App)
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Card", Card);
app.component("Calendar", Calendar);
app.component("Dialog", Dialog);
app.component("Menubar", Menubar);
app.component("Toolbar", Toolbar);
app.component("Dropdown", Dropdown);
app.component("FileUpload", FileUpload);
app.component("Editor", Editor);
app.component("Steps", Steps);

app.use(PrimeVue);
app.use(router)
app.mount('#app')
