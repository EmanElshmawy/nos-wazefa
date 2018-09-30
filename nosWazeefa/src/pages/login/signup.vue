<template>
<div class="login">
        <!-- BEGIN  -->
 <div class="content">
         <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Personal Information</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step :complete="e1 > 2" step="2">More Information</v-stepper-step>
    
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card>
                 <form class="md-layout"> 
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text" required></md-input>
            </md-field>
          </div>
             <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>MidName</label>
              <md-input v-model="Midname" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text" required></md-input>
            </md-field>
          </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First Name ( بالعربي )</label>
              <md-input v-model="firstnameArb" type="text" required></md-input>
            </md-field>
          </div>
             <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>MidName ( بالعربي )</label>
              <md-input v-model="MidnameArb" type="text" required></md-input>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last Name ( بالعربي )</label>
              <md-input v-model="lastnameArb" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
              <md-datepicker  v-model="selectedDate" :md-disabled-dates="disabledDates" required>
               <label>Birthday</label>
             </md-datepicker>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text" required></md-input>
            </md-field>
          </div>
               <div class="md-layout-item md-small-size-100 md-size-50">
              <md-radio v-model="radio" value="female" >female</md-radio>
               <md-radio v-model="radio" value="male">male</md-radio>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number" required></md-input>
            </md-field>
          </div>
        </form>
          </v-card>

      <router-link to="/">  
          <v-btn
          class="md-raised md-success"
          >
            Back
          </v-btn>
</router-link>       
   <v-btn
            color="md-raised md-success right"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card>
             <form class="md-layout"> 
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="gmail" required></md-input>
            </md-field>
          </div>
             <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>passowrd</label>
              <md-input v-model="passowrd" type="passowrd" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Confirm Passowrd</label>
              <md-input v-model="confirmPassowrd" type="passowrd" required></md-input>
            </md-field>
          </div>
        </form>
          
          </v-card>
  
          <v-btn
          class="md-raised md-success"
            @click="e1 = 1"
          >
            Back
          </v-btn>

        <router-link to="/">  
          <v-btn
          class="md-raised md-success right"
          >
            submit
          </v-btn>
</router-link>

        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
 
    </div>
</div>

</template>

<script>

export default {
  data() {
      return {
      e1: 0,
      emailadress: "",
      lastname: "",
      firstname: "",
      Midname:"",
      lastnameArb: "",
      mdDate: "",
      firstnameArb: "",
      MidnameArb:"",
      address: "",
      city: "",
      country: "",
      code: "",
      selectedDate: "",
      radio:"",
      email: "",
      passowrd: "",
      confirmPassowrd:'',
      disabledDates: date => {
        const day = date.getDay()
        return day === 6 || day === 0
      }
    }
  },
  methods: {
    customFormatter(date) {
      return moment(date).format('MMMM DDDD YYYY, hh:mm:ss');
    },
  }
};
</script>
<style lang="scss" scoped>
.title{
  text-align: center;
  font-size: 25px !important;
     width: 100%;

}
.v-card{
  margin-bottom:1rem;
  padding-bottom: 2rem;
}
.title span{
    color:#45b6af;
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
      width: 65%;
      position: relative;
      top: 2rem;
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
 .md-layout-item{
  text-align: left !important;
}
  .md-field.md-has-password .md-toggle-password{
  top:2rem;
  }

</style>
