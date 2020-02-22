<template>
    <div id="PortfolioScreen">
        <v-container class="fill-height">
            <h3>Наши работы</h3>
            <div class="slider_container">
                <slick
                        ref="slick"
                        :options="slickOptions" >
                    <div v-for="i in 5" :key="i">
                        <v-row align="center" justify="center" class="slider_height">
                            <v-col cols="11" md="6">
                                <div class="image">
                                    <v-img :max-width="imageHeight()" src="@/assets/img-2.png"></v-img>
                                </div>
                            </v-col>
                            <v-col cols="11" md="5">
                                <div class="portfolio-title">Photer</div>
                                <p>Цель нашей команды - создать мир, в котором технологии помогают людям понимать друг друга и общаться на более глубоком уровне; мир, где машины, забирая на себя всю рутинную работу, предоставляют людям возможность отдавать ещё больше ресурсов созиданию и творчеству; мир, в котором технологии вдохновляют и помогают развиваться. Компания SKY corporation была основана в 2010 году,</p>
                            </v-col>
                        </v-row>
                    </div>
                </slick>
            </div>
            <v-row>
                <v-col class="text-center all_works">
                    <v-btn rounded color="#BC1111" depressed :x-small="$vuetify.breakpoint.xsOnly" :large="$vuetify.breakpoint.smAndUp">Посмотреть все работы</v-btn>
                </v-col>
            </v-row>
        </v-container>


    </div>
</template>
<script>
    import '../../node_modules/slick-carousel/slick/slick.css';
    import Slick from 'vue-slick';
    export default {
        name: 'PortfolioScreen',
        components: {
            Slick,
        },
        data: () => ({
            slickOptions: {
                dots: true,
                slidesToShow: 1,
                arrows: true,
                infinite: true,
                vertical: true,
                adaptiveHeight: true,
            },
        }),
        methods: {
            imageHeight () {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '173'
                    case 'sm': return '424'
                    case 'md': return '464'
                    case 'lg': return '464'
                    case 'xl': return '465'
                }
            },
        }
    }
</script>
<style lang="sass">
    @import '~vuetify/src/styles/settings/_variables'
    #PortfolioScreen
        height: 100vh
        padding-top: 28px
        padding-left: 40px
        h3
            z-index: 1
            font-size: 2.2rem
            display: block
            position: relative
            &::before
                content: url("../assets/line.svg")
                position: absolute
                left: -39px
                top: -20%
        .slider_container
            position: relative
            &::before
                background: url(../assets/bubbles-10.svg)
                background-size: 100%
                background-repeat: no-repeat
                content: ''
                z-index: 0
                position: absolute
                width: 804px
                height: 650px
                top: -18vh
                left: -15vh
        .slider_height
            min-height: 350px
        .slick-slider
            position: relative
            .slick-dots
                position: absolute
                top: 50%
                transform: translate(0, -50%)
                right: 0
                list-style-type: none
                display: grid
                grid-template-columns: 30px
                grid-auto-rows: 30px
                justify-items: center
                align-items: center
                li
                    background: #BC1111
                    opacity: 0.5
                    width: 10px
                    height: 10px
                    border-radius: 50%
                    button
                        display: none
                    &.slick-active
                        background-color: transparent
                        background-image: url("../assets/star-4.svg")
                        width: 31px
                        height: 31px
            .slick-next, .slick-prev
                color: transparent
                font-size: 0
                line-height: 0
                position: absolute
                right: 10px
                left: auto

                &:before
                    font-size: 20px
                    line-height: 1
                    opacity: .75
                    color: white
            .slick-prev
                top: 70px
                z-index: 10
                &:before
                    content: url("../assets/arrow-1.svg")
            .slick-next
                bottom: 70px
                &:before
                    content: url("../assets/arrow-2.svg")
            .portfolio-title
                font-size: 4.7rem
            p
                font-size: 1.1rem
                font-weight: 300
        .all_works
            button
                position: relative
                z-index: 10
                .v-btn__content
                    z-index: 1
                &:after
                    content: url("../assets/btn.svg")
                    position: absolute
                    z-index: -1
        @media #{map-get($display-breakpoints, 'sm-and-down')}
            padding-top: 0
            h3
                font-size: 1.8rem
            .slider_height
                height: 641px
            .slider_container
                padding-right: 15px
                &::before
                    width: 100vw
                    height: 70vh
                    top: -120px
                    left: -135px
            .slick-slider
                .portfolio-title
                    font-size: 2.8rem
                p
                    display: block
                    padding-right: 5px
                    font-size: 1.2rem
                    font-weight: 300
        @media #{map-get($display-breakpoints, 'xs-only')}
            height: 100%
            padding-left: 14px
            padding-right: 14px
            h3
                font-size: 1rem
                &::before
                    content: url("../assets/line-1.svg")
                    left: -20px
            .slider_container
                &::before
                    top: -20px
                    left: -32px
            .slick-slider
                .portfolio-title
                    font-size: 1.6rem
                p
                    font-size: .9rem
            .all_works
                button
                    &:after
                        content: url("../assets/btn-1.svg")
                        position: absolute
                        z-index: -1
</style>
