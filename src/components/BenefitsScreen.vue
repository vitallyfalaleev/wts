<template>
    <div id="BenefitsScreen" >
        <v-container>
            <v-row>
                <v-col cols="12" md="5" class="text-center text-md-start">
                    <h2>
                        <span>Ваши прямые преимущества от работы со мной заключаются в следующем.</span>
                    </h2>
                    <div class="BenefitsScreen-block">
                        <h3>
                        <span>
                            Экономия времени и денег.
                        </span>
                        </h3>
                        <p>Не нужно просматривать биржи фриланса или <br>
                            группы в социальных сетях, чтобы найти отдельных <br>
                            программистов, специалистов по SEO, SMM и <br>
                            таргетингу. Самостоятельно справлюсь с каждой <br>
                            задачей. При этом платить нужно только за те <br>
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
            // handleScroll(){
            //     var currentScrollPosition = document.scrollingElement.scrollTop;
            //
            //     if(currentScrollPosition < this.scrollPosition) {
            //         this.$vuetify.goTo('#FirstScreen', {
            //             duration: 50,
            //             easing: 'easeInOutQuint'
            //         })
            //     }
            //         console.log("Scrolling up", this.scrollPosition);
            // }
        },
        // mounted () {
        //     window.addEventListener('scroll', this.handleScroll);
        // },
    }
</script>
<style lang="sass">
    #BenefitsScreen
        height: 100vh
        padding-top: 190px
        position: relative
        @media screen and (max-width: 1439px)
            padding-top: 160px
            padding-left: 50px
        @media screen and (max-width: 767px)
            padding-top: 50px
            padding-left: 0
        &::before
            content: url("../assets/bubbles-7.svg")
            top: 168px
            right: 219px
            position: absolute
            opacity: .7
            z-index: 0
        @media screen and (max-width: 1439px)
            &::before
                content: url("../assets/bubbles-8.svg")
                right: 0
                top: 10px
        @media screen and (max-width: 767px)
            &::before
                content: url("../assets/bubbles-9.svg")
                top: 0px
        &::after
            content: url("../assets/icon-1.svg")
            position: absolute
            right: 0
            bottom: 81px
            @media screen and (max-width: 1439px)
                content: url("../assets/icon-2.svg")
                bottom: 30px
            @media screen and (max-width: 767px)
                content: url("../assets/icon-3.svg")
                bottom: 42px
        h2
            position: relative
            font-size: 1.9rem
            line-height: 1.2
            margin-bottom: 30px
            font-weight: 400
            @media screen and (max-width: 1439px)
                margin-bottom: 70px
                font-size: 1.8rem
            @media screen and (max-width: 767px)
                font-size: 1rem
                margin-bottom: 20px
            &::before
                content: url("../assets/line.svg")
                position: absolute
                left: -39px
                @media screen and (max-width: 767px)
                    content: url("../assets/line-1.svg")
                    left: -10px

        .BenefitsScreen-block
            z-index: 100
            position: relative
            @media screen and (max-width: 1439px)
                margin-bottom: 45px
                &:last-child
                    margin-bottom: 0
            @media screen and (max-width: 767px)
                margin-bottom: 20px
                &:last-child
                    margin-bottom: 0
            h3
                position: relative
                font-size: 1.6rem
                line-height: 1.2
                font-weight: 300
                margin-bottom: 16px
                @media screen and (max-width: 1439px)
                    margin-bottom: 10px
                @media screen and (max-width: 767px)
                    font-size: .9rem
                span
                    margin-left: -21px
                    &::before
                        content: url("../assets/star.svg")
                        @media screen and (max-width: 1439px)
                            content: url("../assets/star-1.svg")
            p
                font-size: 1rem
                color: #BCB8B8
                line-height: 1.3
                font-weight: 300
                @media screen and (max-width: 1439px)
                    font-size: 1.3rem
                @media screen and (max-width: 767px)
                    font-size: .7rem
</style>