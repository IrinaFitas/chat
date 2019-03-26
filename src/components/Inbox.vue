<template>
    <div class="container">
        <div class="nav-buttons">
            <button type="button" @click="show = !show">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve" width="20px" height="20px">
                    <g>
                        <path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331
                            c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12
                            s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6
                            c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"/>
                        <path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z"/>
                        <path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z"/>
                        <path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473
                            C213.971,216.658,216.658,213.971,216.658,210.658z"/>
                    </g>
                </svg>
            </button>
            <button type="button" class="show-contacts-icon" @click="showContacts">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="20px" height="20px">
                    <g>
                        <g>
                            <path d="M451,122h-75V45c0-24.813-20.187-45-45-45H61C36.187,0,16,20.187,16,45v422c0,24.813,20.187,45,45,45h270
                                c24.813,0,45-20.187,45-45V362h75c24.72,0,45-20.128,45-45V167C496,142.28,475.872,122,451,122z M444.787,152l-103.18,103.18
                                c-5.849,5.849-15.364,5.849-21.213,0L217.213,152H444.787z M264.787,242L196,310.787V173.213L264.787,242z M46,45
                                c0-8.271,6.729-15,15-15h270c8.271,0,15,6.729,15,15v15H46V45z M346,467c0,8.271-6.729,15-15,15H61c-8.271,0-15-6.729-15-15v-45
                                h300V467z M346,392H46V90h300v32H211c-24.72,0-45,20.128-45,45v150c0,24.72,20.128,45,45,45h135V392z M217.213,332L286,263.213
                                l13.181,13.181c17.544,17.544,46.093,17.545,63.639,0L376,263.213L444.787,332H217.213z M466,310.787L397.213,242L466,173.213
                                V310.787z"/>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="navbar-container" :class="{'show-navbar': show}">
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
            </nav>
        </div>
    </div>
</template>

<script>

import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
    data () {
        return {
            show: false
        }
    },

    props: ["showContactList"],
    methods: {
        showContacts() {
            this.$emit("showContactList");
        }
    }
}
</script>


<style lang="scss" scoped>
    .container {
        max-width: 230px;
        flex-shrink: 0;
		box-sizing: border-box;
        height: 100vh;
        overflow-y: auto;
        color: #a0a4a7;
        background: linear-gradient(-45deg, #1d232a 0%, #1e242b 10%, #1f252c 20%, #20262d 30%, #21272e 40%, #222830 50%, #21282f 60%, #252c34 70%, #242b32 80%, #232a31 90%, #232931 100%);
        padding: 20px;

            @media (max-width: 1265px) {
                padding: 20px 10px;
            }

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
        .nav-buttons {
            display: flex;
            width: 50px;
            flex-direction: column;
            display: none;

            @media (max-width: 1200px) {
                display: flex;
            }

            button {
                font-size: 16px;
                color: #ffffff;
                padding: 5px;
                background-color: #ffffff;
                outline: none;
            }

            .show-contacts-icon {
                display: none;

                @media (max-width: 990px) {
                    display: block;
                }
            }
        }

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
            width: 100%;
            ul {
                list-style: none;				
                font-size: 14px;
				padding: 0;
				margin: 0;
				width: 190px;
				padding-bottom: 15px;

                @media (max-width: 1265px) {
                    width: 180px;
                }

                @media (max-width: 1245px) {
                    width: 170px;
                }

				+ ul {
                    border-top: 1px solid #363c44;
                    padding-top: 10px;
				}
			              
                li	{
                    display: flex;
                    flex-shrink: 1;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                    line-height: 16px;

                    @media (max-width: 1215px) {
                        padding: 10px 0px;
                    }

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
    .navbar-container {
        
        &.show-navbar {
            display: block;
        }
        @media (max-width: 1200px) {
            display: none;
        }
    }
</style>
