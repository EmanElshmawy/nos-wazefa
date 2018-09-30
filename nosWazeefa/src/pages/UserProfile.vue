<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green">

        </edit-profile-form>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <user-card>

        </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EditProfileForm,
  UserCard
} from '@/pages'

export default{
  components: {
    EditProfileForm,
    UserCard
  }
}
</script>
<style lang="scss" scoped>
.md-layout-item{
  margin: 0 auto;
}
</style>

