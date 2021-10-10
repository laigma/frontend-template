<template>
  <v-app class="indigo lighten-5">
    <v-container class="fill-height" fluid>
      <v-row>
        <v-col cols="12" md="7" sm="7">
          <v-container fluid class="fill-height">
            <v-carousel
              class="mb-4" 
              cycle
              interval="5000"
              show-arrows-on-hover  
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-container>
        </v-col>
        <v-col cols="12" md="5" sm="5">
          <v-container fluid class="fill-height">
            <v-row>
              <v-spacer/>
              <v-card
                class="mx-2"
                color="orange lighten-5"
                dense
                max-width="600px"
              >
                <v-card-title class="font-weight-bold">Plantilla (v1.0.0)</v-card-title>
                <v-card-text class="font-weight-bold">
                  - ...<br><br>
                  - ...
                </v-card-text> 
              </v-card>
              <v-spacer/>
            </v-row>
            <v-row>
              <v-container>
                <v-btn
                  class="mx-2"
                  color="primary"
                  dark 
                  dense
                  @click="userGuide"
                >Descargar guía de usuario</v-btn>
              </v-container>
              <v-container>
                <v-btn
                  class="mx-2"
                  color="primary"
                  dark 
                  dense
                  @click="contact"
                >Contacto soporte técnico</v-btn>
              </v-container>
            </v-row>  
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>      
</template>

<script>
import img01 from '@/img/img01.jpg'
import img02 from '@/img/img02.jpg'
import img03 from '@/img/img03.jpg'
import img04 from '@/img/img04.jpg'
import img05 from '@/img/img05.jpg'
import img06 from '@/img/img06.jpg'
import img07 from '@/img/img07.jpg'
import img08 from '@/img/img08.jpg'
import img09 from '@/img/img09.jpg'
import img10 from '@/img/img10.jpg'
import { showSwal } from "@/functionsGlobals/functionsGlobals"

export default {
  name: 'home',
  data() {
    return {
      items: [
        { src: img01 },
        { src: img02 },
        { src: img03 },
        { src: img04 },
        { src: img05 },
        { src: img06 },
        { src: img07 },
        { src: img08 },
        { src: img09 },
        { src: img10 }
      ]
    }
  },
  methods: {
    userGuide() {-
      showSwal("info", 'Página en construcción, disculpe las molestias');
    },
    contact() {
      showSwal("info", 'Página en construcción, disculpe las molestias');
    }
  }
}
</script>
