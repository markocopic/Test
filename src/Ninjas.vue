<template>
<div>
  <h1>Ninjas</h1>
  <h2>Marko</h2>
<ul>
  <li v-for="ime in ninjas">{{ ime }}</li>
</ul>
</div>
</template>

<script>
export default {
  // name: 'app',
  data(){
    return{
      ninjas:['mile','gile','rale']
    }
  }
}
</script>

<style>

</style>
