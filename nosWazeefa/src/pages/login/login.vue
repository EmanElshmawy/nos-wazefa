<template>
<div class="login">
        <!-- BEGIN  -->
 <div class="content">
       <form class="md-layout" > 
         <h1 class="title"><span>Nos</span>Wazzefa</h1>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="text" required></md-input>
            </md-field>
          </div>
             <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Password</label>
              <md-input v-model="Mobile" type="password" required></md-input>
            </md-field>
             </div>
             <div class="md-layout-item form-actions">
                 <label class="rememberme check mt-checkbox mt-checkbox-outline">
                   <input type="checkbox" name="remember" value="1" />Remember
                       <span></span>
                    </label>
                     <router-link to="/forgetPassword"  id="forget-password" class="forget-password">Forgot Password?</router-link>
                </div>
           <div class="md-layout-item md-size-100 btn-action">
              <router-link to="/dashboard/user" class="md-raised md-success" type="Tel">login</router-link>
          </div>
        </form>
       <div class="create-account">
           <router-link to="/signup" id="register-btn" class="uppercase">Create an account</router-link>
       </div>
    </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  }
};
</script>
<style lang="scss" scoped>
.title{
  text-align: center;
  font-size: 25px !important;
     width: 100%;

}
.title span{
    color:#209e91 ;
  }
  .logo {
    margin: 0 auto;
    margin-top: 60px;
    text-align: center;
     }
.md-layout[data-v-23b3be22] {
    padding: 3rem 1rem 4rem;
}
  .md-layout-item{
    text-align: center;
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
    color: #209e91 ;
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
       background-color: #209e91 ;
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
    background-color: #209e91;
    border: none; }
  
  .content .form-actions .btn-default:hover {
    background-color: #fafaff;
    color: #209e91; 
    }
    a:hover, a:focus {
    color: #fff !important; 
    text-decoration: none !important;
}

  .content .forget-password {
    font-size: 14px;
    float: right;
    display: inline-block;
    margin-bottom: 10px; 
    color: #aaa;
     &:hover,&:focus{
    color: #aaa !important; 
     }
    }
  
  .content .check {
    color: #aaa;
    }
  
  .content .rememberme {
      float:left;
  }
  
  .content .create-account {
    display: block;
    width: 100%;
    text-align: center;
    background-color: #209e91 ;
    padding:1rem;
    -webkit-border-radius: 0 0 7px 7px;
    -moz-border-radius: 0 0 7px 7px;
    -ms-border-radius: 0 0 7px 7px;
    -o-border-radius: 0 0 7px 7px;
    border-radius: 0 0 7px 7px; }
  .content .create-account p {
      margin: 0; }
  
  .content .create-account p a {
    font-weight: 600;
    font-size: 14px;
    color: #fff; }
  
   .content .create-account a {
    display: inline-block;
    margin-top: 5px; 
    color: #fff;
    }
   .content .create-account a:hover {
    color: #fff;
    }
  /* footer copyright */
  .copyright {
    text-align: center;
    margin: 0 auto 30px 0;
    padding: 10px;
    color: #aaa;
    font-size: 13px; }
  
  @media (max-width: 440px) {
    /***
    Login page
    ***/
    .login .logo {
      margin-top: 10px; }
   .content {
      width: 60%;
      margin-top: 10px; }
  .content h3 {
      font-size: 22px; }
    .forget-password {
      display: inline-block;
      margin-top: 20px;
       }
  .checkbox {
      font-size: 13px; } }
  .md-field.md-has-password .md-toggle-password{
  top:2rem;
  }

</style>
