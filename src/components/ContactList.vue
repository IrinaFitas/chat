<template>
	<div class="container-contact-list" :class="{'show': showMe}">
		<div class="search-contact">
			<input type="search" placeholder="Search" v-model="searchUser">		
		</div>

		<div class="contact-list-container">
			<ul class='contact-list'>
				<li v-for="(message, index) in filteredListOfLastMessage" :key="index">
					<div class="content-list">
						<div class="user-photo" :style="`background-image: url(${message.avatarImg})`"></div>
						<div class="user-message">
							<p class="user-name">{{ message.firstName }} {{ message.lastName }} <button>...</button></p>
							<p class="message">
								<span class="message-text"> {{ message.msg }} </span>
								<span class="message-time"> {{ message.msgDate }} </span>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	props: ["showMe"],
	data() {
		return {
			listOfLastMessages: [
				{
					user_id: 1,
					avatarImg: "https://randomuser.me/api/portraits/lego/0.jpg",
					firstName: "Matt",
					lastName: "Thompson",
					msg: "Thanks again you have been",
					msgDate: "2019-04-12T07:00:00Z"
				},

				{
					user_id: 2,
					avatarImg: "https://randomuser.me/api/portraits/lego/1.jpg",
					firstName: "Claire",
					lastName: "Sharwood",
					msg: "My selfie game is lacking canMy selfie game is lacking canMy selfie game is lacking canMy selfie game is lacking can",
					msgDate: "2019-02-02T23:46:00Z"	
				},

				{
					user_id: 3,
					avatarImg: "https://randomuser.me/api/portraits/lego/2.jpg",
					firstName: "Kirsten",
					lastName: "Mckellar",
					msg: "Where is the nearest place to",
					msgDate: "2019-01-25T12:00:00Z"	
				},

				{
					user_id: 4,
					avatarImg: "https://randomuser.me/api/portraits/lego/3.jpg",
					firstName: "Shaun",
					lastName: "Gardner",
					msg: "Ok that sounds perfect",
					msgDate: "2018-12-06T13:45:00Z"	
				},

				{
					user_id: 5,
					avatarImg: "https://randomuser.me/api/portraits/lego/4.jpg",
					firstName: "Mace",
					lastName: "Windu",
					msg: "Protect the senator at all costs.",
					msgDate: "2019-02-25T00:02:00Z"	
				},

				{
					user_id: 6,
					avatarImg: "https://randomuser.me/api/portraits/lego/5.jpg",
					firstName: "Kayne",
					lastName: "West",
					msg: "So tell the voice inside your So tell the voice inside your",
					msgDate: "2019-03-18T12:50:00Z"	
				}
			],

			searchUser: ""
		}
	},

	created() {
		this.formatDate();
	},

	computed: {
		filteredListOfLastMessage() {
			if (this.searchUser) {
				return this.listOfLastMessages.filter(elem =>
					elem.firstName.toLowerCase().includes(this.searchUser.toLowerCase()) ||
					elem.lastName.toLowerCase().includes(this.searchUser.toLowerCase()));
			}
			return this.listOfLastMessages;
		}
	},
	methods: {
		formatDate() {
			this.listOfLastMessages = this.listOfLastMessages.map( elem => {
				let time = new Date(Date.parse(elem.msgDate)).toLocaleString();
				return {
					...elem,
					msgDate: `${time.slice(0, 5)}${time.slice(11, -3)}`
				};
			});
		}
	}
}
</script>


<style lang="scss" scoped>
	.container-contact-list {
		width: 360px;
		flex-shrink: 0;
		height: 100vh;
        overflow-y: auto;
		color: #ffffff;
		background: linear-gradient(-45deg, #1d232a 0%, #1e242b 10%, #1f252c 20%, #20262d 30%, #21272e 40%, #222830 50%, #21282f 60%, #252c34 70%, #242b32 80%, #232a31 90%, #232931 100%);

		&::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px grey;
	        background-color: #b3cccc;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: grey;
	        border: 1px solid #555555;
            border-radius: 5px;
        }


		@media (max-width: 990px) {
            position: fixed;
            top: 0;
            left: 0;
            transition: transform 0.25s ease-in-out;
            transform: translateX(-100%);
			z-index: 10;
		}

		@media (max-width: 450px) {
			width: 80%;
		}
		
		&.show {
			position: fixed;
            top: 0;
			left: 0;
			z-index: 10;
			transform: translateX(0%);
		}
		.search-contact {
			height: 79px;
            box-sizing: border-box;
			padding: 20px;
			text-align: center;
			border-bottom: 1px solid #363c44;

			@media (max-width: 1385px) {
				padding: 10px;
			}
		}

		input {
			width: 300px;
			background: url("../images/Search.png") no-repeat 20px / 15px #363d45;
			color: #868b8e;
			font-size: 14px;
			font-weight: bold;
			border-radius: 30px;
			border: none;
			padding: 15px;
			padding-left: 50px;
			outline: none;

			@media (max-width: 1375px) {
				width: 250px;
			}
		}

		.contact-list-container {
			.contact-list {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			li {
				padding: 0;
				margin: 0;

				.content-list {
					display: flex;
					align-items: center;
					padding: 24px 20px 24px 15px;
					box-sizing: border-box;

					.user-photo {
						position: relative;
						flex-shrink: 0;
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin-right: 18px;
						background-color: grey;
						background-position: center;
						background-size: 50px 50px;
						background-repeat: no-repeat;

						&::before {
							display: block;
							content: "";
							position: absolute;
							left: -4px;
							width: 6px;
							height: 6px;
							background-color: #2dc100;
							border-radius: 50%;
						}

						&::after {
							display: block;
							content: "";
							position: absolute;
							bottom: -24px;
							width: 50px;
							height: 1px;
							background-color: #363c44;
						}
					}
				}
			}
		}
	}
	.user-message {
		flex: 1 0 auto;
		height: 36px;
		text-align: left;

		button {
			float: right;
			padding: 0;
			border: none;
			background-color: transparent;
			color: #ffffff;
			font-size: 24px;
			line-height: 7px;
			font-weight: bold;
			outline: none;
			cursor: pointer;
		}
	}
	.user-name {
		font-size: 16px;
		font-weight: bold;
		margin: 0;
	}
	.message {
		margin: 5px 0 0;
		font-size: 14px;
		color: #abacae;

		&-text {
			display: inline-block;
			width: 190px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;

			@media (max-width: 1375px) {
				width: 140px;
			}
		}
		&-time {
			float: right;
			display: inline-block;
			margin-top: 2px;
			font-size: 11px;
			color: #363c44;
			vertical-align: top;
		}
	}
</style>
