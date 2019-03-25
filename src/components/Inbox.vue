<template>
    <div class="container">
        <div class="nav-buttons">
            <button type="button" @click="change">IB</button>
            <button type="button">CL</button>
            <button type="button">CW</button>
            <button type="button">UP</button>
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

                <ul>
                    <li>Settings</li>
                    <li>Help</li>
                    <li @click="asyncIncrement({by: 20, duration: 500})">Click me</li>
                    <li> {{ plus }} </li>
                    <li> {{ minus }} </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
    methods: {
        // toggleNavbar () {
        //     this.$refs.container.classList.toggle("show-navbar");
        // },
        // ...mapActions([ "asyncIncrement"])
        // ...mapMutations(['increment'])
        // incrementNumber() {
        //     this.$store.commit("increment");
        // }
        change() {
            this.$store.commit("changeShow");
        }
    },
    data () {
        return {
            show: false
        }
    },

    computed: {
        ...mapGetters([
            "show",
            "plus",
            "minus"
        ])
    }
}
</script>


<style lang="scss" scoped>
    .container {
        max-width: 230px;
		box-sizing: border-box;
        height: 100vh;
        overflow-y: auto;
        color: #a0a4a7;
        background: linear-gradient(-45deg, #1d232a 0%, #1e242b 10%, #1f252c 20%, #20262d 30%, #21272e 40%, #222830 50%, #21282f 60%, #252c34 70%, #242b32 80%, #232a31 90%, #232931 100%);
        padding: 20px;

            @media (max-width: 1265px) {
                padding: 20px 10px;
            }

            @media (max-width: 990px) {
                width: 100%;
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

            button {
                font-size: 16px;
                color: #ffffff;
                padding: 5px;
                background-color: #333c44;
                outline: none;
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
    // .navbar-container {

    //     @media (max-width: 1200px) {
    //         display: none;
    //     }
    // }
</style>
