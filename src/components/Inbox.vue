<template>
    <div class="container">
        <header>
            <p class="title">Inbox</p>
            <button type="button" class="add-contact-btn"></button>
        </header>
        <nav class="navigation">
            <ul>
                <li>All Messages<span>21</span></li>
                <li>Unread<span>10</span></li>
                <li>Important<span>25</span></li>
                <li>Drafts<span>1</span></li>
            </ul>
            
            <ul>
                <li>Teams<span>5</span></li>
                <li>Groups<span>5</span></li>
                <li>Channels<span>8</span></li>
                <li>Locations<span>6</span></li>
                <li>Media<span>4</span></li>
            </ul>

            <ul>
                <li>Settings</li>
                <li>Help</li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 230px;
		box-sizing: border-box;
        height: 100vh;
        color: #a0a4a7;
        background: linear-gradient(-45deg, #1d232a 0%, #1e242b 10%, #1f252c 20%, #20262d 30%, #21272e 40%, #222830 50%, #21282f 60%, #252c34 70%, #242b32 80%, #232a31 90%, #232931 100%);
        padding: 20px;

        header {
            display: flex;
            justify-content: space-between;
			align-items: center;
            height: 79px;
            box-sizing: border-box;
			padding-left: 10px;
			padding-right: 5px;

            .title {
                color: #ffffff;
                font-size: 22px;
            }

            .add-contact-btn {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 1px solid #a0a4a7;
                background: url("../images/Add-contact-icon.png") no-repeat center;
            }
        }

        .navigation {

            ul {
                list-style: none;				
                font-size: 14px;
				padding: 0;
				margin: 0;
				width: 190px;
				padding-bottom: 15px;

				+ ul {
                    border-top: 1px solid #363c44;
                    padding-top: 10px;
				}
			              
                li	{
                    display: flex;
                    width: 190px;
                    box-sizing: border-box;
                    padding: 10px;
                    line-height: 16px;

					&:hover {
						background-color: #333c44;
						border-radius: 5px;
					}
					
					span {
						color: #ffffff;
						margin-left: auto;
					}
				}
            }
        }
    }
</style>
