<template>
    <div class="container">
        <header>
            <button class="notification-btn"></button>
            <p>Matt Thompson</p>
            <span class="dropdown"></span>
        </header>
        
        <div class="user-profile">
            <button>btn</button>
            <div>
                <div class="photo"></div>
                <p>Kirsten Mckellar</p>
                <p>Cape Town, RSA</p>
            </div>
            <button>...</button>
        </div>

        <div class="user-details">
            <div>
                <p>Nickname:</p>
                <p>Killa Kella</p>
            </div>
            <div>
                <p>Tel</p>
                <p>072 143 9920</p>
            </div>
            <div>
                <p>Date Of Birth:</p>
                <p>July 12, 1988</p>
            </div>
            <div>
                <p>Gender:</p>
                <p>Female</p>
            </div>
            <div>
                <p>Language:</p>
                <p>English</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container {
        width: 275px;
        background-color: #ffffff;

        header {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #e5e5e5;

            p {
                font-size: 14px;
                margin-right: 18px;
            }

            .notification-btn {
                position: relative;
                width: 20px;
                height: 20px;
                border: none;
                background: url("../images/Notifications-icon.png") no-repeat center;
                outline: none;
                margin-right: auto;
            }

            &::before {
                content: "";
                position: absolute;
                
            
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #0084ff;
            }

            .dropdown {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 3px 3px 0 3px;
                border-color: #2b80ff transparent transparent transparent;
            }
        }
    }
</style>


