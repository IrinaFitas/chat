<template>
    <div class="container-chat">
        <div class="box incoming-message">
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">10.25</p>
            </div>
            <div class="message-box">
                <p class="text">It goes a little something like this.</p>
            </div>
        </div>
        <div class="box incoming-message">
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">10.25</p>
            </div>
            <div class="message-box">
                <p class="text">It was all a dream, I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine.</p>
            </div>
        </div>
        <div class="box outcoming-message">
            <div class="message-box">
                <p class="text">Did you ever Hang' pictures on your wall?</p>
            </div>
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">10.25</p>
            </div>
        </div>
        <div class="box incoming-message">
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">10.25</p>
            </div>
            <div class="message-box">
                <p class="text">Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I even let my tape rock 'til my tape popped. Smokin' weed and bamboo, sippin' on private stock.  But this was way back, when I had the red and black lumberjack with the hat to match.</p>
            </div>
        </div>
        <div class="box outcoming-message">
            <div class="message-box">
                <p class="text">Haha awesome,  I think I know the album your looking. for.</p>
            </div>
            <div class="photo-box">
                <div class="photo"></div>
                <p class="time">10.25</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container-chat {
        padding: 25px 25px 0 30px;

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

