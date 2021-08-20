<template>
  <div class="home">
    <template>
      <v-container>
        <div class="ml-5 mr-5">
          <v-row class="mt-15 text-left" justify="space-around">
            <v-col>
              <h1 class="display-2 font-weight-bold mb-10">
                Willkommen bei OR-Web!
              </h1>
              <p>
                In dieser Applikation finden Sie Informationen zu Methoden und
                Solver, die für Operations Research (OR) verwendet werden.
                Außerdem haben Sie die Option, die Solver und Methoden
                herunterzuladen und auf Ihrem Endgerät auszuführen. Falls Sie
                lieber eine Methode oder einen Solver in der Applikation selbst
                laufen lassen wollen, so wird Ihnen das auch hier ermöglicht.
              </p>
              <v-carousel
                cycle
                show-arrows-on-hover
                hide-delimiter-background
                intervall="6000"
                height="350"
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="colors[i]" class="mt-5" height="100%">
                    <v-row class="fill-height" align="center">
                      <v-col cols="3" class="text-right" justify="center">
                        <v-icon
                          class="text-h1 text--disabled"
                          v-if="slide == 'Methoden'"
                        >
                          mdi-function-variant</v-icon
                        >
                        <v-icon
                          class="text-h1 text--disabled"
                          v-if="slide == 'Solver'"
                        >
                          mdi-file-check</v-icon
                        >
                        <v-icon
                          class="text-h1 text--disabled"
                          v-if="slide == 'Download'"
                        >
                          mdi-archive-arrow-down</v-icon
                        >
                        <v-icon
                          class="text-h1 text--disabled"
                          v-if="slide == 'WagnerWhitin'"
                        >
                          mdi-scatter-plot</v-icon
                        >
                      </v-col>
                      <v-col class="text--secondary ml-10" cols="5">
                        <div class="text-h2">
                          {{ slide }}
                        </div>
                        <div class="text">
                          <p
                            class="subheading font-weight-regular"
                            v-if="slide == 'Methoden'"
                          >
                            Interessiert an Methoden? <br />
                            Verschaffen Sie sich einen Überblick in der
                            <router-link to="/Methodenuebersicht"
                              >Methodenübersicht</router-link
                            >.
                          </p>
                          <p
                            class="subheading font-weight-regular"
                            v-if="slide == 'Solver'"
                          >
                            Oder doch eher mehr an Solver interessiert? <br />
                            Dann können Sie diese in der
                            <router-link to="/Solveruebersicht"
                              >Solverübersicht</router-link
                            >
                            finden.
                          </p>
                          <p
                            class="subheading font-weight-regular"
                            v-if="slide == 'Download'"
                          >
                            Wollen Sie Solver oder Methoden herunterladen?
                            <br />
                            Dann ab zum
                            <router-link to="/DownloadCenter">
                              DownloadCenter</router-link
                            >.
                          </p>
                          <p
                            class="subheading font-weight-regular"
                            v-if="slide == 'WagnerWhitin'"
                          >
                            WagnerWhitin testen?
                            <br />
                            Dann ab zur
                            <router-link to="/WagnerWhitinExecute">
                              Methode</router-link
                            >.
                          </p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </template>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: true,
        href: "/",
      },
    ],
    model: 0,
    colors: ["teal lighten-4", "teal lighten-5", "grey lighten-3", "grey lighten-4"],
    slides: ["Methoden", "Solver", "Download", "WagnerWhitin"],
  }),
};
</script>