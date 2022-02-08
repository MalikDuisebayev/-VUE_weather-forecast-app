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
    color: white;
    border: none;
    padding: 15px 18px;
  }
	
</style>