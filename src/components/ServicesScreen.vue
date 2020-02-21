<template>
    <div id="ServicesScreen">
        <v-container>
            <v-row>
                <v-col class="services">
                    <v-tabs
                            v-model="tab"
                            background-color="transparent"
                            icons-and-text
                            active-class="PortfolioScreen-tabs"
                            slider-color="transparent"
                            color="#fff"
                            :fixed-tabs="$vuetify.breakpoint.smAndDown"
                            dark
                    >
                        <v-tab
                                key="zeroDev"

                        >
                            <span class="d-none d-sm-block">Под ключ</span>
                            <v-img
                                    src="@/assets/icon-4.svg"
                                    contain
                            ></v-img>
                        </v-tab>
                        <v-tab
                                key="SEO"
                        >
                            <span class="d-none d-sm-block">SEO</span>
                            <v-img
                                    src="@/assets/icon-5.svg"
                                    contain
                            ></v-img>
                        </v-tab>
                        <v-tab
                                key="SMM"
                        >
                            <span class="d-none d-sm-block">SMM</span>
                            <v-img
                                    src="@/assets/icon-6.svg"
                                    contain
                            ></v-img>
                        </v-tab>
                        <v-tab
                                key="outsource"
                        >
                            <span class="d-none d-sm-block">Аутсорс</span>
                            <v-img
                                    src="@/assets/icon-7.svg"
                                    contain
                            ></v-img>
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items
                            v-model="tab"
                    >
                        <v-tab-item
                                key="zeroDev"
                        >
                            <v-card flat>
                                <v-card-text>
                                    Под ключ.
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item
                                key="SEO"
                        >
                            <v-card flat>
                                <div class="services-seo">
                                    <span class="services-seo--h1Title">SEO
                                        <span class="services-seo--title">Продвижение и оптимизация сайта</span>
                                    </span>
                                    <span class="services-seo--subTitle">SEO-продвижение сайта заключается в повышении позиций ключевых страниц по заданным ключам.</span>
                                    <span class="services-seo--h2Title">В задачи входит</span>
                                    <ul class="services-seo--list">
                                        <li>Анализ конкурентов;</li>
                                        <li>Определение ЦА;</li>
                                        <li>Составление семантического ядра;</li>
                                        <li>Формирование контента с учетом SEO;</li>
                                        <li>Разработка привлекательного дизайна;</li>
                                        <li>Реклама в Google Ads, Яндекс.Директ и РСЯ.</li>
                                    </ul>
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item
                                key="SMM"
                        >
                            <v-card flat>
                                <v-card-text>SMM</v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item
                                key="outsource"
                        >
                            <v-card flat>
                                <v-card-text>Аутсорс</v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
                <v-col class="d-none d-md-block" cols="5">
                    <v-img src="@/assets/img-1.png"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'PortfolioScreen',
        data: () => ({
            tab: null,
        }),
    }
</script>
<style lang="sass">
    @import '~vuetify/src/styles/settings/_variables'

    #ServicesScreen
        background: linear-gradient(105.8deg, rgb(239, 76, 76, .5) -34.67%, rgb(134, 15, 16, .5) 99.61%)
        height: 100vh
        padding-top: 146px
        .theme--dark.v-tabs-items
            background-color: transparent
            padding-top: 70px
            .theme--dark.v-card
                background-color: transparent
        .services
            .theme--dark.v-card > .v-card__text
                color: #fff
            &-seo
                &--h1Title
                    font-size: 4.5rem
                    padding-right: 23px
                    display: inline-block
                    margin-bottom: 35px
                &--h2Title
                    font-size: 1.3rem
                    display: block
                    margin-bottom: 12px
                &--title
                    font-size: 1.7rem
                &--subTitle
                    font-size: 1rem
                    display: block
                    margin-bottom: 25px
                    max-width: 334px
                &--list
                    list-style-type: none
                    padding-left: 0
                    font-size: 1rem
                    li
                        position: relative
                        &::before
                            position: absolute
                            left: -13px
                            content: url("../assets/star-2.svg")
        @media #{map-get($display-breakpoints, 'sm-and-down')}
            .services-seo
                &--h1Title
                    font-size: 2.8rem
                    margin-bottom: 35px
                &--h2Title
                    font-size: 1.6rem
                    margin-bottom: 30px
                &--title
                    font-size: 1.3rem
                &--subTitle
                    font-size: 1.1rem
                &--list
                    font-size: 1rem
        @media #{map-get($display-breakpoints, 'sm-and-down')}
            padding-top: 0
            .theme--dark.v-tabs-items
                padding-top: 0
            .v-tab
                min-width: 1px
            .v-slide-group__prev
                display: none
            .services-seo
                &--h1Title
                    font-size: 1.6rem
                    margin-bottom: 16px
                &--h2Title
                    font-size: .9rem
                    margin-bottom: 12px
                &--title
                    font-size: .9rem
                    display: block
                &--subTitle
                    font-size: .9rem
                    display: block
                    margin-bottom: 15px
                &--list
                    list-style-type: none
                    padding-left: 0
                    font-size: .9rem
</style>