<template>
	<div id="app" :class="{'hide-nav-buttons': showInbox || showContacts}">
		<app-inbox :showMe="showInbox" @showContactList="showContactsComponent" @showInboxBar="showInboxComponent"></app-inbox>
		<app-contact-list :showMe="showContacts"></app-contact-list>
		<app-chat-window @showUser="showUserComponent"></app-chat-window>
		<app-user-profile :showMe="showUserProfile"></app-user-profile>
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
	},
	data() {
		return {
			showInbox: false,
			showContacts: false,
			showUserProfile: false
		}
	},
	
	methods: {
		showInboxComponent() {
			this.showInbox = !this.showInbox;
			let overlay = document.createElement("div");
			overlay.classList.add("overlay");
			document.body.appendChild(overlay);

			overlay.addEventListener("click", (e) => {
				e.target.remove();
				this.showInbox = !this.showInbox;
			});
		},

		showContactsComponent() {
			this.showContacts = !this.showContacts;
			let overlay = document.createElement("div");
			overlay.classList.add("overlay");
			document.body.appendChild(overlay);

			overlay.addEventListener("click", (e) => {
				e.target.remove();
				this.showContacts = !this.showContacts;
			});
		},

		showUserComponent() {
			this.showUserProfile = !this.showUserProfile;
			let overlay = document.createElement("div");
			overlay.classList.add("overlay");
			document.body.appendChild(overlay);

			overlay.addEventListener("click", (e) => {
				e.target.remove();
				this.showUserProfile = !this.showUserProfile;
			}); 
		}
	}
}
</script>
<style lang="scss">
body {
	margin: 0;
}
#app {
	display: flex;
	max-width: 1920px;
	margin: 0 auto;
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.hide-nav-buttons .nav-buttons {
	display: none !important;
}
.overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
}
</style>
