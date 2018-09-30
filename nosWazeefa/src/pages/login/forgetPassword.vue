<template>
<div class="login">
        <!-- BEGIN  -->
 <div class="content">
       <form class="md-layout" > 
         <h4 class="subtitle text-center">Enter your Email & We will sent it as soon as Possible</h4>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="text" required></md-input>
            </md-field>
              <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success submit" @click="endEditMode" >Submit</md-button>
          </div>
          </div>
        </form>
    </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      email: "",
    };
  }
};
</script>
<style lang="scss" scoped>
  .logo {
    margin: 0 auto;
    margin-top: 60px;
    text-align: center;
     }
.md-layout[data-v-23b3be22] {
    padding: 3rem 1rem 4rem;
}
.submit{
    padding: 0rem !important;
}
  .md-layout-item{
    text-align: center;
  }
  .subtitle{
         font-size: 23px;
    font-weight: 600;
  }
  .content {
    background-color: white;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px;
      width: 35%;
      position: relative;
      top: 6rem;
      margin:0 auto;
    overflow: hidden;
    position: relative; }
  .content h3 {
    color: #4db3a5;
    text-align: center;
    font-size: 28px;
    font-weight: 400 !important; }
  
   .content h4 {
    color: #555; }
  
   .content .form-title {
    font-weight: 300;
    margin-bottom: 25px; }
  
  .content .form-actions {
    clear: both;
    border: 0px;
   }
  .content .form-actions > .btn {
      margin-top: -2px; }
  
  .login-options {
    margin-top: 30px;
    margin-bottom: 30px;
    overflow: hidden; }
  
  .login-options h4 {
    float: left;
    font-weight: 600;
    font-size: 15px;
    color: #7d91aa !important; }
    
    .login .md-success{
       background-color: #45b6af;
       color: #fff;
       padding: 1rem 3rem;
    }
   .login .btn-action{
       color: #fff;
      display: inline-block !important;
   }
  .content .form-actions .btn {
    margin-top: 1px; }
  
  .content .form-actions .btn {
    font-weight: 600;
    padding: 10px 20px !important; }
  
  .content .form-actions .btn-default {
    font-weight: 600;
    padding: 10px 25px !important;
    color: #fff;
    background-color: #45b6af;
    border: none; }
  
  .content .form-actions .btn-default:hover {
    background-color: #fafaff;
    color: #45b6af; 
    }
    a:hover, a:focus {
    color: #fff !important; 
    text-decoration: none !important;
}


</style>
