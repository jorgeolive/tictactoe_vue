<template>
  <div class="container">
    <div v-for="(row, rowIndex) in table" v-bind:key="rowIndex">
      <div v-for="(square, squareIndex) in row" v-bind:key="squareIndex">
        <Square
          @square-clicked="onSquareClick"
          :xCoordenate="rowIndex"
          :yCoordenate="squareIndex"
          :value="table[rowIndex][squareIndex]"
        >
        </Square>
      </div>
    </div>
  </div>
</template>

<script>
import Square from "./Square.vue"
import miniMax from "../logic/miniMax"

export default {
  name: "Board",
  components: {
    Square,
  },
  methods: {
    onSquareClick : function(xCoordenate, yCoordenate) {

      console.log(`click coming from ${xCoordenate} , ${yCoordenate}`)

      if(this.table[xCoordenate][yCoordenate] === ' ' && !this.isGameFinished) {

        this.table[xCoordenate][yCoordenate] = 'X'
        const { table, isEndGame } = miniMax(this.table, 'O')
        this.table = table
        this.isGameFinished  = isEndGame     
      }
    }
  } ,
  data() {
    return {
      table: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ],
      isGameFinished : false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  grid-template-rows: 10rem 10rem 10rem;
}
</style>
