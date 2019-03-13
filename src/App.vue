<template>
	<div id="app">
		<app-inbox></app-inbox>
		<app-contact-list></app-contact-list>
	</div>
</template>

<script>
import Inbox from "./components/Inbox.vue";
import ContactList from "./components/ContactList.vue";
export default {
	components: {
		appInbox: Inbox,
		appContactList: ContactList
	}	
}
</script>
<style lang="scss">
#app {
	display: flex;
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
