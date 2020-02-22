<template>
    <div id="OurTeamScreen">
        <v-container class="fill-height">
            <v-row>
                <v-col>
                    <h3>Наши работы</h3>

                    <hooper :settings="sliderOptions">
                        <slide v-for="(i, index) in sliderItems" :key="index">
                            <v-card class="rounded-card">
                                <div class="d-flex flex-no-wrap text-sm-center justify-space-between align-center">
                                    <div class="align-center justify-center">
                                        <v-card-title class="headline">{{i.title}}</v-card-title>
                                        <v-avatar
                                                class="ma-3 d-block d-md-none"
                                                size="160"
                                                min-width="167px"
                                                tile
                                        >
                                            <v-img src="@/assets/img-3.png"></v-img>
                                        </v-avatar>
                                        <v-card-text>
                                            {{i.text}}
                                        </v-card-text>
                                    </div>
                                    <v-avatar
                                            class="ma-3 d-none d-md-block"
                                            size="180"
                                            min-width="167px"
                                            tile
                                    >
                                        <v-img src="@/assets/img-3.png"></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: 'OurTeamScreen',
        components: {
            Hooper,
            Slide,
            HooperNavigation,
        },
        data: () => ({
            sliderOptions: {
                itemsToShow: 1.5,
                centerMode: true,
                infiniteScroll: true,
                mouseDrag: true,
                touchDrag: true
            },
            sliderItems: [
                {title: 'Александр Абрамов',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию. \n" +
                        "\n" +
                        "Спасибо за сотрудничество."
                },
                {title: 'Александр Абрамовф',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию."
                },
                {title: 'Александр Абраов',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию.нами заданию."
                },
                {title: 'Александр Абрамов',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию. \n" +
                        "\n" +
                        "Спасибо за сотрудничество."
                },
                {title: 'Александр Абрамов',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию. \n" +
                        "\n" +
                        "Спасибо за сотрудничество."
                },
                {title: 'Александр Абрамов',
                    text: "Хочу порекомендовать Анастасию как очень ответственного, серьезного и при этом креативного специалиста. Дизайн, который она для нас сделала, безоговорочно всем понравился, кроме того, работа была сделана точно в срок и соответствовала предоставленному нами заданию. \n" +
                        "\n" +
                        "Спасибо за сотрудничество."
                },
            ]
        })
    }
</script>
<style lang="sass">
    @import '~vuetify/src/styles/settings/_variables'

    #OurTeamScreen
        height: 100vh
        background-color: #35151E75
        h3
            z-index: 1
            font-size: 2.2rem
            display: block
            position: relative
            padding-bottom: 45px
            margin-left: 45px
            &::before
                content: url("../assets/line.svg")
                position: absolute
                left: -39px
                top: -20%
    .hooper
        height: 408px
    .v-card__title
        position: relative
        &:after
            content: ''
            position: absolute
            bottom: 0
            height: 2px
            width: 50%
            background-color: #fff
            display: block
    .hooper-slide
        opacity: .5
        .v-card
            margin: 50px 100px
            background: linear-gradient(109.43deg, #EF4C4C -34.67%, #860F10 74.85%)
            .v-card__title
                font-size: 2rem!important
            .v-card__text
                font-size: 1rem
            .v-image
                border-radius: 35px
        .v-card:not(.v-sheet--tile):not(.v-card--shaped)
            border-radius: 35px!important
    .hooper-slide.is-active
        transform: scale(1.2)
        opacity: 1
    .hooper-navigation
        .icon
            display: none
        button
            position: absolute
            &:before
                display: block
                width: 75px
                height: 75px
            &.hooper-next
                right: 5vw
                &:before
                    content: url("../assets/arrow-3.svg")
            &.hooper-prev
                left: 5vw
                &:before
                    content: url("../assets/arrow-4.svg")
    @media #{map-get($display-breakpoints, 'sm-and-down')}
        .hooper
            height: 650px
        .hooper-slide
            .v-card
                margin: 50px 90px
                .v-card__title
                    font-size: 1.4rem!important
                .v-card__text
                    font-size: .8rem

</style>