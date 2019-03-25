<template>
    <div class="container-user-profile">
        <header>
            <button class="notification-btn"></button>
            <p>Matt Thompson</p>
            <span class="dropdown"></span>
        </header>
        
        <div class="user-profile">
            <div class="photo-container">
                <button>...</button>
                <div class="photo"></div>
            </div>
            <div class="user-profile-name">
                <p class="name">Kirsten Mckellar</p>
                <p>Cape Town, RSA</p>
            </div>
        </div>

        <div class="user-details">
            <div class="user-details-field">
                <p class="field-name">Nickname:</p>
                <p>Killa Kella</p>
            </div>
            <div class="user-details-field">
                <p class="field-name">Tel:</p>
                <p>072 143 9920</p>
            </div>
            <div class="user-details-field">
                <p class="field-name">Date Of Birth:</p>
                <p>July 12, 1988</p>
            </div>
            <div class="user-details-field">
                <p class="field-name">Gender:</p>
                <p>Female</p>
            </div>
            <div class="user-details-field">
                <p class="field-name">Language:</p>
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
    .container-user-profile {
        max-width: 275px;
        flex-grow: 1;
        flex-shrink: 0;
        box-sizing: border-box;
        background-color: #ffffff;
        height: 100vh;
        overflow-y: auto;

        @media (max-width: 1370px) {
            position: fixed;
            top: 0;
            right: 0;
            transition: transform 0.25s ease-in-out;
            transform: translateX(100%);

            &.is-opened {
                transform: translateX(0%);
            }
        }

        header {
            display: flex;
            align-items: center;
            height: 79px;
            box-sizing: border-box;
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
                
                &::before {
                    content: "";
                    position: absolute;
                    left: -5px;
                    top: -5px;                
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #0084ff;
                }
            }

            .dropdown {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 3px 3px 0 3px;
                border-color: #2b80ff transparent transparent transparent;
            }
        }

        .user-profile {
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 35px;

            .photo-container {
                overflow: hidden;
            }

            .photo {
                width: 120px;
                height: 120px;
                margin: 30px auto;
                border-radius: 50%;
                background: url("../images/photo.png") no-repeat center grey;
            }

            button {
                float: right;
                width: 22px;
                height: 10px;
                margin: 10px 20px 0 0;
                font-size: 25px;
                font-weight: bold;
                color: #666666;
                background-color: transparent;
                border: none;

            }

            .user-profile-name {
                text-align: center;

                p {
                    margin: 0;
                    font-size: 14px;
                }
                .name {
                    color: #293037;
                    font-size: 20px;
                }
            }
        }

        .user-details {
            margin: 20px 30px 20px 30px;

            @media (max-width: 1054px) {
                margin: 20px 15px;
            }
            .user-details-field {
                display: flex;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 13px;
                border-bottom: 1px solid #e5e5e5;

                @media (max-width: 1024px) {
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }

            p {
                flex-basis: 50%;
                text-align: right;
                margin: 0;
                
                @media (max-width: 1024px) {
                    flex-basis: auto;
                }
            }

            .field-name {
                font-weight: bold;
                text-align: left;
            }
        }
    }
</style>


