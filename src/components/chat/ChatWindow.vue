<template>
    <div class="container">
        <header>
            <p><strong>Kirsten Mckellar</strong> is typing...</p>
            <div class="buttons">
                <button class="specify-btn"></button>
                <button class="call-btn"></button>
                <button class="video-call-btn"></button>
            </div>
        </header>
        <footer>
            <div>TExt</div>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container {
        height: 100vh;
        width: 650px;
        background-image: linear-gradient(to right bottom, #f7fbfb 0%, #ecf1f5 10%, #eaeef4 20%, #e9ebf1 30%, #f0f2f4 40%, #f1f2f4 50%, #eceef2 60%, #eceef2 70%, #ebedf1 80%, #eaecf1 90%, #e7eaef 100%);

        header {
            display: flex;
            margin-bottom: -1px;
            box-sizing: border-box;
            border-bottom: 1px solid #dae0e1;

            p {
                font-size: 14px;
                color: #293037;
                align-self: center;
                padding-left: 30px;                
            }

            .buttons {
                margin-left: auto;

                button {
                    width: 80px;
                    height: 80px;
                    margin: 0;
                    border: none;
                    background-color: transparent;
                    border-left: 1px solid #dae0e1;
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
            }
        }
    }
</style>


