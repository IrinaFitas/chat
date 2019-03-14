<template>
	<div class="container">
		<div class="search-contact">
			<input type="search" placeholder="Search">		
		</div>

		<div class="contact-list-container">
			<ul class='contact-list'>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Matt Thompson</p>
							<p class="message">Thanks again you have been...</p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>						
					</div>
				</li>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Claire Sharwood</p>
							<p class="message">My selfie game is lacking can...</p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>
					</div>
				</li>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Kirsten Mckellar</p>
							<p class="message">Where is the nearest place to...</p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>
					</div>
				</li>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Shaun Gardner</p>
							<p class="message">Ok that sounds perfect</p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>
					</div>
				</li>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Mace Windu</p>
							<p class="message">Protect the senator at all costs. </p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>
					</div>
				</li>
				<li>
					<div class="content-list">
						<div class="user-photo"></div>
						<div class="user-message">
							<p class="user-name">Kayne West</p>
							<p class="message">So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...So tell the voice inside your...</p>
						</div>
						<div class="user-info">
							<button>...</button>
							<p>10 min</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		width: 360px;
		color: #ffffff;
		background: linear-gradient(-45deg, #1d232a 0%, #1e242b 10%, #1f252c 20%, #20262d 30%, #21272e 40%, #222830 50%, #21282f 60%, #252c34 70%, #242b32 80%, #232a31 90%, #232931 100%);
		
		.search-contact {
			padding: 20px;
			border-bottom: 1px solid #363c44
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
					background-color: fuchsia;
					box-sizing: border-box;

					.user-photo {
						position: relative;
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin-right: 18px;
						background-color: grey;

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

					.user-message {
						height: 36px;
						width: 200px;
						overflow: hidden;
						text-align: left;

						.user-name {
							font-size: 16px;
							font-weight: bold;
							margin: 0;
						}
						.message {
							margin: 0;
							font-size: 14px;
							color: #abacae;
						}
					}

					.user-info {
						margin-left: auto;
						align-self: flex-start;

						button {
							border: none;
							background-color: transparent;
							color: #ffffff;
							font-size: 24px;
							font-weight: bold;
							outline: none;
						}

						p {
							margin: 0;
							font-size: 11px;
							color: #363c44;
						}
					}
				}
			}
		}
	}
</style>
