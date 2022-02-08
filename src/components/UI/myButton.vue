<template>
	<button class = 'btn'>
		<slot></slot>
	</button>
	
</template>

<script>
	export default{
		name: 'my-buttons'	
	}
	
</script>


<style scoped>
.btn{
    cursor: pointer;
    background: rgb(9, 9, 54);
    color: white;
    border: none;
    transition: all .5s ease;
    border: 1px solid white;
    border-radius: 12px;
  }
 .btn:hover{
 	background: white;
 	color: rgb(9, 9, 54);
     border: 1px solid rgb(9, 9, 54);
 }
	
</style>