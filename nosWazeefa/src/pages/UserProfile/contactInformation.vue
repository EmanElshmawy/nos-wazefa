<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Contact Information 
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
              <label>Email</label>
              <md-input v-model="email" type="text" required></md-input>
            </md-field>
          </div>
             <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Mobile</label>
              <md-input v-model="Mobile" type="Tel" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="endEditMode" >Update</md-button>
          </div>
        </form>
        <!-- view -->
          <form v-else class="md-layout viewInfo">
          <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Email :</label>
              <p class="text">{{email}} </p>
          </div>
                <div class="md-layout-item md-small-size-100">
              <label class="title">Mobile :</label>
               <p class="text">{{Mobile}}</p>
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
      email: "",
      Mobile: "",
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

</style>
