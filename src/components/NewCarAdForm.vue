<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
const schema = yup.object().shape({
  model_year: yup.string().required().label("car model year"),
  name: yup.string().required(),
  car_make: yup.string().required().label("car make"),
  email: yup.string().required(),
});
export default {
  name: "NewCarAdForm",
  components: {
    Form,
    Field,
    // ErrorMessage
  },
  data() {
    return {
      schema,
      selectedCity: null,
      carBrand: [
        { name: "Toyota", code: "toyota" },
        { name: "Suzuki", code: "suzuki" }
      ],
      carModels: [
        { name: "alto vxr", code: "alto_vxr" },
        { name: "mehran", code: "mehran" }
      ],
      registrationType: [
        { name: "NCP Cut", code: "alto_vxr" },
        { name: "NCP Non-Cut", code: "mehran" },
        { name: "Custom Paid", code: "mehran" }
      ],
      engineTypes: [
        { name: "Petrol", code: "alto_vxr" },
        { name: "Diesel", code: "mehran" },
        { name: "CNG", code: "mehran" }
      ],
      transmissionTypes: [
        { name: "Manual", code: "alto_vxr" },
        { name: "Automatic", code: "mehran" },
        { name: "CNG", code: "mehran" }
      ],
      
    };
  },
  methods: {
    register(values) {
      console.log(values);
    },
  },
};
</script>
<template>
  <Form @submit="register" :validation-schema="schema">
    <div class="grid">
      <div class="col-6">
        <Field
          v-slot="{ field, errors }"
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
              >Name is invalid
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="car_make" name="car_model">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <Dropdown
                placeholder="Select car brand"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
                :options="carBrand"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Car Make is invalid
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="car_make" name="carModels">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <Dropdown
                placeholder="Select car model"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
                :options="carModels"
                
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Car Make is invalid
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="km_driven" name="km_drive">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <InputText
                placeholder="KM driven"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Invalid figure
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="price" name="price">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <InputText
                placeholder="8.20  means 8 Lacks and twenty thousands."
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Invalid Price
            </small>
          </div>
        </Field>
      </div>
       <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="car_make" name="carModels">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <Dropdown
                placeholder="Registration Type"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
                :options="carModels"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Car Make is invalid
            </small>
          </div>
        </Field>
      </div>
       <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="engineType" name="engineType">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <Dropdown
                placeholder="Engine Type"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
                :options="engineTypes"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Invalid Engine Type
            </small>
          </div>
        </Field>
      </div>
       <div class="col-6">
        <Field v-slot="{ field, errors }" v-model="transmissionType" name="transmissionType">
          <div class="p-col-6">
            <div class="p-inputgroup text-left">
              <Dropdown
                placeholder="Transmission Type"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
                optionLabel="name"
                :options="transmissionTypes"
              />
            </div>
            <small class="p-inputgroup p-error p-error" v-if="errors.length > 0"
              >Invalid Engine Type
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field
          v-slot="{ field, errors }"
          v-model="engineCapacity"
          name="engineCapacity"
        >
          <div class="p-col-6">
            <div class="p-inputgroup">
              <InputText
                placeholder="Pleae enter engine capacity"
                :class="{ 'p-invalid': errors.length > 0 }"
                v-bind="field"
              />
            </div>
            <small class="p-inputgroup p-error" v-if="errors.length > 0"
              >Invalid Engine Capacity
            </small>
          </div>
        </Field>
      </div>
      <div class="col-6">
        <Field
          v-slot="{errors }"
          v-model="carPics"
          name="carPics"
        >
          <div class="p-col-6">
            <div class="p-inputgroup">
               <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" chooseLabel="Upload Car Pics" />
            </div>
            <small class="p-inputgroup p-error" v-if="errors.length > 0"
              >
            </small>
          </div>
        </Field>
      </div>
      <div class="col-12">
          <div class="p-col-6">
            <Editor v-model="value" editorStyle="height: 320px" placeholder="Seller Comments">
            <template #toolbar>
              <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
              </span>
            </template>
          </Editor>
      </div>
      <div class="col-12">
        <Button label="Submit" @click="handleClick($event)"/>
      </div>
    </div>
    </div>
  </Form>
</template>