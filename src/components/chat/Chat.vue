<template>
    <div class="container-chat">
        <div v-for="(message, index) in receiveMessages" :key="index" :class="['box', messageBoxClass(message.senderId)]">
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">{{ message.time }}</p>
            </div>
            <div class="message-box">
                <p class="text">{{ message.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["receiveMessages"])
    },
    methods: {
        messageBoxClass(senderId) {
            return senderId ? 'incoming-message' : 'outcoming-message';
        }
    }
}
</script>

<style lang="scss" scoped>
    .container-chat {
        height: calc(100vh - 160px);
        padding: 25px 25px 0 30px;
        box-sizing: border-box;
        overflow-y: auto;

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

        .box {
            display: flex;
            margin-bottom: 20px;
        }

        .photo-box {
            &.left { 
                margin-right: 30px;
            }
            &.right {
                margin-left: 30px;
            }
            .photo {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: grey;
            }

            .time {
                font-size: 11px;
                text-align: center;
            }
        }

        .box .message-box {
            position: relative;
            background-color: #ffffff;
            border-radius: 5px;
            padding: 15px 20px;


        }

        .box-right .message-box.right {
            background-color: #0084ff;

            &::after {
                content: "";
                display: inline-block;
                position: absolute;
                right: -10px;
                top: 25px;
                width: 0; 
                height: 0; 
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 10px solid #0084ff;
            }
        }
        .incoming-message {

            .photo-box {
                margin-right: 30px;
            }
            .message-box {

                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: -10px;
                    top: 25px;
                    width: 0; 
                    height: 0; 
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent; 
                    border-right: 10px solid #ffffff;
                }
            }
        }
        .outcoming-message {
            justify-content: flex-end;

            .photo-box {
                margin-left: 30px;
                order: 1;
            }
            .message-box {
                color: #ffffff;
                background-color: #0084ff;

                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    right: -10px;
                    top: 25px;
                    width: 0; 
                    height: 0; 
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                    border-left: 10px solid #0084ff;
                }
            }

        }
    }
</style>

