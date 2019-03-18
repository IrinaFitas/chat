<template>
	<div id="app">
		<app-inbox></app-inbox>
		<app-contact-list></app-contact-list>
		<app-chat-window></app-chat-window>
		<app-user-profile></app-user-profile>
	</div>
</template>

<script>
import Inbox from "./components/Inbox.vue";
import ContactList from "./components/ContactList.vue";
import ChatWindow from "./components/chat/ChatWindow.vue";
import UserProfile from "./components/UserProfile.vue";
export default {
	components: {
		appInbox: Inbox,
		appContactList: ContactList,
		appChatWindow: ChatWindow,
		appUserProfile: UserProfile
	}	
}
</script>
<style lang="scss">
body {
	margin: 0;
}
#app {
	display: flex;
	height: 100vh;
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
