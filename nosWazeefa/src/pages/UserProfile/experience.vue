<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Experience 
          <span class="float-right icon" @click="editForm = true">      
        <i class="material-icons">add_box
</i> 
          </span>
        </h4>
      </md-card-header>
      <md-card-content>  
        <!-- inputs -->
        <form class="md-layout" v-if="editForm" > 
               <div class="md-layout-item md-small-size-100 md-size-50">
              <md-datepicker  v-model="selectedDate" :md-disabled-dates="disabledDates" required>
               <label>Birthday</label>
             </md-datepicker>
          </div>
            <div class="md-layout-item md-small-size-100 md-size-50">
              <div class="form-group">
             <select   class="custom-select form-control" v-model="selected">
               <option disabled value="">Please select one</option>
               <option>A</option>
               <option>B</option>
               <option>C</option>
            </select>
            </div>
          </div> 
           
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="addValue()" >Update</md-button>
          </div>
        </form>
        <!-- view -->
          <form v-else class="md-layout viewInfo">
              <div class="card" v-for="(item, index) in values">
              <button class="btn btn-delete" @click="deleteValue(index)">
                <i class="material-icons">delete_forever</i></button>
             <div class="md-layout-item md-small-size-100 md-size-100">
              <label class="title">Email :</label>
              <p class="text">{{selected}} </p>
              </div>
                <div class="md-layout-item md-small-size-100">
              <label class="title">Date :</label>
               <p class="text">{{selectedDate}}</p>
          </div>
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
    values:[],
        selected:'',
      lastnameArb: "",
      selectedDate: "",
      firstnameArb: "",
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
    deleteValue: function(index) {
      this.values.splice(index, 1);
      console.debug(JSON.stringify(this.values));
      this.$emit('input', this.values);
    },
    addValue: function() {
      this.values.push({});
      this.$emit('input', this.values);
      this.editForm = !this.editForm;
    } 
  }
};


</script>
<style lang="scss" scoped>
.card{
    width: 100%;
    border: 1px solid #eee;
    padding: 1rem;
    position: relative;
    margin-bottom: 1rem;
}
.btn-delete{
    float: right;
    position: absolute;
    right: 1rem;
    color:#999;
    font-size: 25px;
}
.custom-select{
      width: 100%;
    margin-top: 1.5rem;
}
</style>
