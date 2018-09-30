<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Working Shifts
        </h4>
      </md-card-header>
      <md-card-content>  
       <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="movies">Morning shift</label>
        <md-select v-model="MorningShifts"  multiple>
          <md-option value="sunday">sunday </md-option>
          <md-option value="monday">monday</md-option>
          <md-option value="tuesday">tuesday</md-option>
          <md-option value="wednesday">wednesday</md-option>
          <md-option value="thursday">thursday</md-option>
          <md-option value="friday">friday</md-option>
          <md-option value="saturday">saturday</md-option>
        </md-select>
      </md-field>
    </div>
        <div class="md-layout-item">
      <md-field>
        <label for="movies">Night shift</label>
          <md-select v-model="NightShifts"  multiple>
          <md-option value="sunday">sunday </md-option>
          <md-option value="monday">monday</md-option>
          <md-option value="tuesday">tuesday</md-option>
          <md-option value="wednesday">wednesday</md-option>
          <md-option value="thursday">thursday</md-option>
          <md-option value="friday">friday</md-option>
          <md-option value="saturday">saturday</md-option>
        </md-select>
      </md-field>
    </div>
          <div class="md-layout-item">
      <md-field>
        <label for="movies">fullday</label>
         <md-select v-model="fullday"  multiple>
          <md-option value="sunday">sunday </md-option>
          <md-option value="monday">monday</md-option>
          <md-option value="tuesday">tuesday</md-option>
          <md-option value="wednesday">wednesday</md-option>
          <md-option value="thursday">thursday</md-option>
          <md-option value="friday">friday</md-option>
          <md-option value="saturday">saturday</md-option>
        </md-select>
      </md-field>
    </div>
  </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
  export default {
    name: 'MultipleSelect',
    data: () => ({
      fullday: [],
      NightShifts: [],
      MorningShifts: [],
    })
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>