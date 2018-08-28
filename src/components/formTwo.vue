<template>
  <div>
    <formHelper>
      <div slot="form-header">
        <h3>Form Two - Log in</h3>
        <p>Enter your details to log in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </formHelper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
         }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for logging in (form two)');
        }
    }
}
</script>
 <style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
