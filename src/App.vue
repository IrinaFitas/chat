<template>
	<div id="app">
		<app-inbox></app-inbox>
	</div>
</template>

<script>
import Inbox from "./components/Inbox.vue";
export default {
	components: {
		appInbox: Inbox
	}	
}
</script>


<style lang="scss">
#app {
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
