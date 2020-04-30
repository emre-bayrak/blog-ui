<template>
  <a-row>
    <a-col :span="8"></a-col>
    <a-col :span="8">
      <a-alert v-if="alert.status" :message="alert.message" :type="alert.type"></a-alert>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: 'Please input your username!' }] },
            ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: 'Please input your Password!' }] },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Create
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="8"></a-col>
  </a-row>

</template>

<script>
import Vue from 'vue';
import { Alert, Form, Row, Col, Input, Icon } from 'ant-design-vue';

Vue.use(Alert);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Icon);

export default {
  data() {
    return {
      alert: { status: false, },
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const url = 'http://localhost:8080/register'
          this.$http.post(url, values )
          .then((res) => {
            if( values.username === res.data.username) {
              this.showAlert('success', 'User has been created');
              this.form.resetFields();
            }
            else {
              this.showAlert('error', res.data.errmsg);
            }

          })
          .catch((error) => {
            console.log('Error:' + error);
          });
        }
      });
    },
    showAlert(type, message) {
      this.alert.status = true;
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.status = false;
      }, 3000);
    }
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>