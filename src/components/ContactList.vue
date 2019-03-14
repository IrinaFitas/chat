<template>
	<div class="container">
		<div class="search-contact">
			<input type="search" placeholder="Search">		
		</div>

		<div class="contact-list-container">
			<ul class='contact-list'>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Matt Thompson</p>
						<p class="message">Thanks again you have been...</p>
					</div>
				</li>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Claire Sharwood</p>
						<p class="message">My selfie game is lacking can...</p>
					</div>
				</li>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Kirsten Mckellar</p>
						<p class="message">Where is the nearest place to...</p>
					</div>
				</li>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Shaun Gardner</p>
						<p class="message">Ok that sounds perfect</p>
					</div>
				</li>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Mace Windu</p>
						<p class="message">Protect the senator at all costs. </p>
					</div>
				</li>
				<li>
					<div>
						<div class="user-photo">Photo</div>
						<p class="user-name">Kayne West</p>
						<p class="message">So tell the voice inside your...</p>
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
			}
		}
	}
</style>
