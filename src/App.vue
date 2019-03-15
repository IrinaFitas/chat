<template>
	<div id="app">
		<app-inbox></app-inbox>
		<app-contact-list></app-contact-list>
		<app-chat-window></app-chat-window>
	</div>
</template>

<script>
import Inbox from "./components/Inbox.vue";
import ContactList from "./components/ContactList.vue";
import ChatWindow from "./components/chat/ChatWindow.vue";
export default {
	components: {
		appInbox: Inbox,
		appContactList: ContactList,
		appChatWindow: ChatWindow
	}	
}
</script>
<style lang="scss">
#app {
	display: flex;
	height: 100vh;
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
