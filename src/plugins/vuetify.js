import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                background: '#101824',
            },
        },
    },
    breakpoint: {
        thresholds: {
            xs: 320,
            sm: 540,
            md: 768,
            lg: 1440,
        },
    },
});
