<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
       <img class="img" :src="cardUserImage">
    </div>
     <personalInformation></personalInformation>
     <contactInformation></contactInformation>
    <Education></Education>
    <experience></experience>
    <shifts></shifts>
    <BankAccount></BankAccount>
  </md-card>
</template>
<script>
  import personalInformation from '../UserProfile/personalInformation.vue';
  import workExperience from '../UserProfile/workExperience.vue';
  import contactInformation from '../UserProfile/contactInformation.vue';
  import Education from '../UserProfile/Education.vue';
  import experience from '../UserProfile/experience.vue';
  import BankAccount from '../UserProfile/BankAccount.vue';
  import shifts from '../UserProfile/shifts.vue';
  
export default {
  name: 'user-card',
     components: {
 personalInformation,
 workExperience,
 contactInformation,
 Education,
 experience,
 BankAccount,
 shifts
    },
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/faces/marc.jpg')
    }
  },
  data () {
    return {
      username: "",
      emailadress: "",
      lastname: "",
      firstname: "",
      address: "",
      city: "",
      country: "",
      code: "",
      aboutme: ""
    }
  }
}

</script>
<style lang="scss" scoped>
.md-success{
  background-color: #209e91 !important;
}

</style>

