<template>
  <div
    class="border"
    v-bind:class="[state ? notAvailableClass : availableClass]"
    v-on:click="onClick"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    xCoordenate: Number,
    yCoordenate: Number,
    value: String,
  },
  computed: {
    state: function () {
      return this.value == "O" || this.value == "X";
    },
  },
  methods: {
    onClick: function () {
      this.$emit("square-clicked", this.xCoordenate, this.yCoordenate);
    },
  },
  data() {
    return {
      availableClass: "clickable",
      notAvailableClass: "nonClickable",
    };
  },
};
</script>

<style scoped>
.border {
  border-style: solid;
  border-color: black;
  min-height: 40px;
  text-align: center;
  padding: 10px;
  font-size: 20px;
}
div.clickable:hover {
  background: gainsboro;
}

div.nonClickable:hover {
  background: rgb(177, 149, 149);
}
</style>
