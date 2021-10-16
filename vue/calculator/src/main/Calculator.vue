<template>
  <div class="calculator">
      <Display value="10000" />
      <Button label="AC" triple @meuOnClick="clearMemory" />      
      <Button label="/" operation @meuOnClick="setOperation" />      
      <Button label="7" @meuOnClick="addDigit" />      
      <Button label="8" @meuOnClick="addDigit" />      
      <Button label="9" @meuOnClick="addDigit" />      
      <Button label="*" operation @meuOnClick="setOperation" />      
      <Button label="4" @meuOnClick="addDigit" />      
      <Button label="5" @meuOnClick="addDigit" />      
      <Button label="6" @meuOnClick="addDigit" />      
      <Button label="-" operation @meuOnClick="setOperation" />      
      <Button label="1" @meuOnClick="addDigit" />      
      <Button label="2" @meuOnClick="addDigit" />      
      <Button label="3" @meuOnClick="addDigit" />      
      <Button label="+" operation @meuOnClick="setOperation" />      
      <Button label="0" double @meuOnClick="addDigit" />      
      <Button label="." @meuOnClick="addDigit" />      
      <Button label="=" operation @meuOnClick="setOperation" />    
         
    </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
    components: { Button, Display},
    methods: {
        clearMemory() {
            console.log('Limpar Memória!')
        },
        setOperation(operation) {
            console.log('Operação ' + operation)
        },
        addDigit(n) {
            console.log('Digito ' + n)
        }
    }

}
</script>

<style>
.calculator {
    height: 321px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%) ;
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>