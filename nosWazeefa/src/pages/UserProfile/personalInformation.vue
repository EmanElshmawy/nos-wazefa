<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Personal Information 
          <span class="float-right icon" @click="editForm = true">      
        <i class="material-icons">edit</i> 
          </span>
        </h4>
      </md-card-header>
      <md-card-content>  
        <!-- inputs -->
        <form class="md-layout" v-if="editForm"> 
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
          <div class="md-layout-item md-small-size-100 md-size-33">
              <md-datepicker  v-model="selectedDate" :md-disabled-dates="disabledDates" required>
               <label>Birthday</label>
             </md-datepicker>
          </div>
               <div class="md-layout-item md-small-size-100 md-size-33">
              <md-radio v-model="radio" value="female" >female</md-radio>
               <md-radio v-model="radio" value="male">male</md-radio>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="endEditMode" >Update</md-button>
          </div>
        </form>
        <!-- view -->
          <form v-else class="md-layout viewInfo">
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Full Name :</label>
              <p class="text">{{firstname}} {{Midname}} {{lastname}}</p>
          </div>
                <div class="md-layout-item md-small-size-100">
              <label class="title">Full Name ( بالعربي ) :</label>
               <p class="text">{{firstnameArb}} {{MidnameArb}} {{lastnameArb}}</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Adress :</label>
                <p class="text">{{address}}</p>
          </div>
          <div class="md-layout-item md-small-size-100  md-size-100">
               <label class="title">BirthDate :</label>
               <p class="text" >{{selectedDate}}</p>
          </div>
               <div class="md-layout-item md-small-size-100 md-size-100">
          <label class="title">Gender :</label>
               <p class="text">{{radio}}</p>
          </div>

          <div class="md-layout-item md-small-size-100  md-size-100">
              <label class="title">Country :</label>
               <p class="text">{{country}}</p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Postal Code :</label>
               <p class="text">{{code}}</p>
          </div>
   
        </form>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
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
        editForm: false,
      disabledDates: date => {
        const day = date.getDay()
        return day === 6 || day === 0
      }
    };
  },
      computed: {
      messageClass () {
        return {
          'md-invalid': this.hasMessages
        }
      }
    },
  methods: {
    customFormatter(date) {
      return moment(date).format('MMMM DDDD YYYY, hh:mm:ss');
    },
 endEditMode(){
  this.editForm = !this.editForm
}
  }
};
</script>
<style lang="scss">
.icon{
  width:4rem;
  height: 3rem;
  float: right;
  cursor: pointer;
}
.md-datepicker-dialog.md-theme-default .md-datepicker-header {
    background-color: #209e91 !important;
}
.viewInfo{
  text-align: left;
  .title{
    font-size: 16px !important;
    margin-bottom: 15px;
    color:#7d7d7d;
    display: inline-block;
    margin-right:10px;
  }
.text{
  display: inline-block;
}
.md-layout-item{
  padding-right: 15px;
  padding-left: 15px;
  overflow: hidden;
  word-break: break-word;
}
}
.md-card{
     box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.14)!important;
}
</style>
