import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "@fontsource/roboto"
import '@mdi/font/css/materialdesignicons.css'
import 'tailwindcss/dist/tailwind.css'


Vue.use(Vuetify)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#003b5c',//rgb(0, 59, 92),
        secondary: '#5b6770',
        accent: '#8c9eff',
        error: '#b71c1c'
      },
    },
  },
})

export default vuetify