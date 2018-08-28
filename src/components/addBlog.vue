<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submited">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" v-model="blog.categories" value="ninjas">
        <label>Wizards</label>
        <input type="checkbox" v-model="blog.categories" value="wizards">
        <label>Mario</label>
        <input type="checkbox" v-model="blog.categories" value="mario">
        <label>Yoshi</label>
        <input type="checkbox" v-model="blog.categories" value="yoshi">
  </div>
  <label>Author:</label>
    <select v-model="blog.author">
      <option v-for="author in authors">{{ author }}</option>
    </select>
    <button v-on:click.prevent="newPost">Add blog</button>
    </form>
    <div v-if="submited">
        <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author}}</p>
    </div>
  </div>
</template>

<script>

export default {
   components:{

   },
  data(){
    return{
      blog:{
        title:'',
        content:'',
        categories:[],
        author:""
      },
      authors:['The net ninja','The angular avenger','The Vue vindicator'],
      submited:false
    }
  },
  methods:{
    newPost(){
      console.log('OK');
    axios.get("http://739k121.mars-e1.mars-hosting.com/zadatak/js/komentari")
                 .then(response => {
                    console.log(response.data[0][0].kom_user_name);
                 });
    },
    post(){
      this.$http.get('http://739k121.mars-e1.mars-hosting.com/zadatak/js/komentari'
      //  title:this.blog.title,
      //  body:this.blog.content,

      ).then(function(data){
        console.log(data);
        //this.submited = true;
      });
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;

}
</style>
