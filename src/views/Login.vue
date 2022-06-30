<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6),
});
export default {
  name: "Login",
  props: {
    title: String,
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      schema,
    };
  },

  methods: {
    login(values) {
      console.log(values);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-2 col-md-6">
        <div class="card car-body">
          <h3 class="text-center">Account Login</h3>
          <div>
            <div class="alert alert-warning">
              {{ errMessage }}
            </div>
          </div>
          <Form @submit="login" :validation-schema="schema">
            <div class="form-group">
              <label for="username">User Name</label>
              <Field name="username" type="text" />
              <ErrorMessage class="form-text text-muted" name='username' 
               />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <Field name="password" type="password" />
              <!--  <small class="form-text text-muted">Please type password</small> -->
              <ErrorMessage class="form-text text-muted" name="password" />
            </div>

            <button class="btn btn-primary">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>