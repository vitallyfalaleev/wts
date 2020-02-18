<template>
    <div class="back-ground">
        <v-container fluid style="height: 100%;" class="first-content">
            <v-row align="center" justify-lg="start" justify="center" style="height: 100%;">
                <v-col cols="12" sm="8" lg="5" style="border: 1px solid red" class="text-center text-lg-left">
                    <img src="../assets/logo-2.svg" alt="WTS">
                    <p>Создание сайтов, лендингов и магазинов под ключ</p>
                    <v-btn rounded color="#BC1111" depressed>Оставить заявку</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <img class="scrolling_icon" src="../assets/scroll_icon.svg" alt="">
    </div>
</template>
<script>
    export default {
        name: 'FirstScreen',
    }
</script>
<style lang="sass">
    .back-ground
        width: 100%
        height: 100vh
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        background-color: #0B0D0C
        background-image: url("../assets/bg-1.png")
        position: relative
        &::before
            content: url("../assets/bubbles-4.svg")
            width: 676px
            height: 676px
            position: absolute
            top: 164px
            left: -362px
            z-index: 0
        &::after
            content: url("../assets/bubbles-1.svg")
            width: 594px
            height: 1139px
            position: absolute
            right: 0
            top: 0
        .scrolling_icon
            position: absolute
            bottom: 115px
            left: calc(50% - 97px )
        .first-content
            z-index: 10
            position: absolute
            padding-left: 50px
            p
                font-size: 1.8rem
                padding-top: 28px
                padding-bottom: 42px
                line-height: 1
                font-family: Ubuntu
        @media screen and (max-width: 1439px)
            &::before
                content: url("../assets/bubbles-5.svg")
                width: 506px
                height: 506px
                top: 165px
                left: -333px
            &::after
                content: url("../assets/bubbles-2.svg")
                width: 366px
                height: 631px
                top: auto
                bottom: -90px
            .scrolling_icon
                display: none
            .first-content
                padding-left: 15px
                p
                    font-size: 1.8rem
                    padding-top: 23px
                    padding-bottom: 29px
        @media screen and (max-width: 767px)
            &::before
                content: url("../assets/bubbles-6.svg")
                width: 305px
                height: 305px
                top: 101px
                left: -166px
            &::after
                content: url("../assets/bubbles-3.svg")
                width: 203px
                height: 381px
                bottom: -83px
            .first-content
                padding-left: 0
                img
                    max-width: 81px
                p
                    font-size: 1rem
                    padding-bottom: 16px
</style>