<template>
    <div class="container">
        <header>
            <p><strong>Kirsten Mckellar</strong> is typing...</p>
            <div class="buttons">
                <button class="specify-btn"></button>
                <button class="call-btn"></button>
                <button class="video-call-btn"></button>
                <button class="user-profile-btn"></button>
            </div>
        </header>
        <app-chat></app-chat>
        <footer>
            <button class="attach-btn"></button>
            <div class="type-message" contenteditable="true">Type your message...</div>
            <div class="btn-send-emojis">
                <button class="emoji-btn"></button>
                <button class="send-btn"></button>
            </div>
        </footer>
    </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
    components: {
        appChat: Chat
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-y: auto;
        max-width: 650px;
        flex-grow: 1;
        background-image: linear-gradient(to right bottom, #f7fbfb 0%, #ecf1f5 10%, #eaeef4 20%, #e9ebf1 30%, #f0f2f4 40%, #f1f2f4 50%, #eceef2 60%, #eceef2 70%, #ebedf1 80%, #eaecf1 90%, #e7eaef 100%);

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

        header {
            display: flex;
            height: 79px;
            box-sizing: border-box;
            border-bottom: 1px solid #dae0e1;

            @media (max-width: 1170px) {
                flex-wrap: wrap;
                justify-content: center;
            }

            p {
                font-size: 14px;
                color: #293037;
                align-self: center;
                padding-left: 30px;  

                @media (max-width: 1190px) {
                    padding-left: 15px;
                }  

                @media (max-width: 1170px) {
                    margin-bottom: 0;
                }            
            }

            .buttons {
                margin-left: auto;
                align-self: center;

                @media (max-width: 1170px) {
                    margin-left: 0;
                }

                button {
                    width: 80px;
                    height: 79px;
                    margin: 0;
                    border: none;
                    background-color: transparent;
                    border-left: 1px solid #dae0e1;
                    outline: none;

                    @media (max-width: 1300px) {
                        width: 60px;
                    }

                    @media (max-width: 1245px) {
                        width: 50px;
                    }

                    @media (max-width: 1215px) {
                        width: 50px;
                        height: 79px;
                    }

                    @media (max-width: 1170px) {
                        width: 50px;
                        height: 50px;
                        border: none;
                    }
                }

                .specify-btn {
                    background: url("../../images/Star-icon.png") no-repeat center;
                }

                .call-btn {
                    background: url("../../images/Call-icon.png") no-repeat center;
                }
                .video-call-btn {
                    background: url("../../images/video-call-icon.png") no-repeat center;
                }
                .user-profile-btn {
                    display: none;

                    @media (max-width: 992px) {
                        display: block;
                    }
                }
            }
        }

        footer {
            display: flex;
            align-items: center;
            margin-top: auto;
            padding-left: 30px;
            padding-right: 25px;
            height: 80px;
            box-sizing: border-box;
            background-color: #fbfcfd;
            border-top: 1px solid #dae0e1;

            button {
                outline: none;
                border: none;
            }

            .attach-btn {
                width: 22px;
                height: 30px;
                margin-right: 25px;
                background: url("../../images/attach-icon.png") no-repeat center;
            }

            .emoji-btn {
                width: 30px;
                height: 30px;
                margin-right: 20px;
                background: url("../../images/emojis.png") no-repeat center;
            }

            .send-btn {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: url("../../images/Send-icon.png") no-repeat center #616d7a;
            }

            .btn-send-emojis {
                margin-left: auto;
            }
        }
    }
</style>


