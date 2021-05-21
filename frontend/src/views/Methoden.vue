<template>
  <v-card
    flat
    tile
  >
     <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
    <v-container
      v-for="type in 2"
      :key="type"
    >
      <v-row justify="space-around">
        <v-col
          v-for="card in 3"
          :key="card"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
              color="grey lighten-4"
          >
            
               <div class="text-justify pa-4 ma-2">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            

            <v-card-actions class="white justify-center">
             <v-btn
                depressed
                color="primary"
              >
                Start
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Methoden',
          disabled: true,
        }
      ]
    })
  }
</script>