<template>
  <div class='border' v-on:click="onClick">
   {{ value }}    
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    xCoordenate : Number,
    yCoordenate : Number,
    value : String
  },

  methods: {
    onClick: function () {
        this.$emit('square-clicked', this.xCoordenate, this.yCoordenate )
    } ,
  }
}
</script>

<style scoped>
  .border {
    border-style: solid;
    border-color:black;
    min-height:40px;
    text-align: center;
    padding: 10px;
    font-size : 20px
  }
</style>
