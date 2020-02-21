<template>
        <div id="BenefitsScreen">
            <v-container class="fill-height">
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col cols="12" md="8" class="text-center text-md-start">
                        <h2>
                            <span>Ваши прямые преимущества от работы со мной заключаются в следующем.</span>
                        </h2>
                        <div class="BenefitsScreen-block">
                            <h3>
                        <span>
                            Экономия времени и денег.
                        </span>
                            </h3>
                            <p>Не нужно просматривать биржи фриланса или
                                группы в социальных сетях, чтобы найти отдельных
                                программистов, специалистов по SEO, SMM и
                                таргетингу. Самостоятельно справлюсь с каждой
                                задачей. При этом платить нужно только за те
                                услуги, которые Вас интересуют.</p>
                        </div>
                        <div class="BenefitsScreen-block">
                            <h3>
                            <span>
                                Проект создается под ключ.</span>
                            </h3>
                            <p>Беру на себя задачи по созданию сайта <br>
                                и технической поддержке.</p>
                        </div>
                        <div class="BenefitsScreen-block">
                            <h3>
                            <span>
                                Использую белые методы продвижения.</span>
                            </h3>
                            <p>Это позволяет исключить вероятность <br>
                                получения бана или снижение позиций <br>
                                в поисковой выдаче.</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
</template>
<script>
    export default {
        name: "BenefitsScreen",
        data: () => ({
            scrollPosition: 0
        }),
        methods: {
        },
        mounted () {
            console.log(this.$vuetify.breakpoint)
        },
    }
</script>
<style lang="sass">
    @import '~vuetify/src/styles/settings/_variables'

    #BenefitsScreen
        height: 100vh
        position: relative
        &::before
            content: url("../assets/bubbles-7.svg")
            bottom: 130px
            right: 219px
            position: absolute
            opacity: .7
            z-index: 0
        &::after
            content: url("../assets/icon-1.svg")
            position: absolute
            right: 0
            bottom: 50px
        h2
            font-size: 1.9rem
            line-height: 1.2
            margin-bottom: 30px
            font-weight: 400
            position: relative
            span
                position: relative
                display: block
                &::before
                    content: url("../assets/line.svg")
                    position: absolute
                    left: -39px
                    top: -6px
        .BenefitsScreen-block
            z-index: 100
            position: relative
            line-height: 1.2
            margin-bottom: 30px
            h3
                position: relative
                font-size: 1.6rem
                font-weight: 300
                margin-bottom: 16px
                span
                    margin-left: -21px
                    &::before
                        content: url("../assets/star.svg")
            p
                font-size: 1rem
                color: #BCB8B8
                font-weight: 300

        @media #{map-get($display-breakpoints, 'sm-and-down')}
            &::before
                content: url("../assets/bubbles-8.svg")
                right: 0
                bottom: 30px
            &::after
                content: url("../assets/icon-2.svg")
                bottom: 30px
            h2
                font-size: 1.8rem
            .BenefitsScreen-block
                h3
                    font-size: 1.3rem
                    span
                        &::before
                            content: url("../assets/star-1.svg")
                p
                    font-size: .9rem
        @media #{map-get($display-breakpoints, 'xs-only')}
            height: auto
            &::before
                content: url("../assets/bubbles-9.svg")
            &::after
                content: url("../assets/icon-3.svg")
            h2
                font-size: 1rem
                margin-bottom: 10px
            span
                &::before
                    content: url("../assets/line-1.svg")
            .BenefitsScreen-block
                h3
                    font-size: .9rem
</style>