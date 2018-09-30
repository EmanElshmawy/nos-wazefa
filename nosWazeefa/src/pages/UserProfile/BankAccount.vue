<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Bank Account
          <span class="float-right icon" @click="editForm = true">      
        <i class="material-icons">edit</i> 
          </span>
        </h4>
      </md-card-header>
      <md-card-content>  
        <!-- inputs -->
        <form class="md-layout" v-if="editForm" > 
         <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
           <label>Bank Name</label>
          <md-select v-model="BankName" name="Bank Name" id="country" placeholder="Bank Name">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
        </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>AccountNumber</label>
              <md-input v-model="AccountNumber" type="Tel" required></md-input>
            </md-field>
          </div>
   
             <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Ibn Number</label>
              <md-input v-model="IbnNumber" type="Tel" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="endEditMode" >Update</md-button>
          </div>
        </form>
        <!-- view -->
          <form v-else class="md-layout viewInfo">
           <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Bank Name :</label>
              <p class="text">{{BankName}} </p>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Account Number :</label>
              <p class="text">{{AccountNumber}} </p>
          </div>
                <div class="md-layout-item md-small-size-100">
              <label class="title">Ibn Number :</label>
               <p class="text">{{IbnNumber}}</p>
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
      AccountNumber: "",
      IbnNumber: "",
      BankName:"",
      editForm: false,
    };
  },

  methods: {
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
.md-list.md-theme-default .md-selected .md-list-item-content, .md-list.md-theme-default .router-link-exact-active .md-list-item-content {
    color: #209e91;
}
</style>
