<template>
  <div class="about">
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="border-bottom: 2px solid darkgrey;">Kategorie</th>
            <th class="text-left" style="border-bottom: 2px solid darkgrey;">Methodenname</th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey;">technische Dokumentation</th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey;">Benutzerhandbuch</th>
            <th class="text-center" style="border-bottom: 2px solid darkgrey;">Download</th>
          </tr>
        </thead>
        <tbody>
          <!--  <tr
          v-for="item in methoden"
          :key="item.name"
        >-->
          <!-- TODO <a> href zu entsprechende Methode ergänzen  -->
          <!-- TODO <v-btn> href zu Download-Center ergänzen -->
          <!-- TODO style auslagern in CSS -->
          <tr>
            <td class="text-center" rowspan="3" style="border-bottom: 2px solid darkgrey;">Transportplanung</td>
            <td class="text-left">
              <v-btn :to="'PTSS'" depressed plain block class="text-capitalize">Paket Transport Simulation System 1.1 (PTSS)</v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">TR-Optimizer 2.1</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left" style="border-bottom:2px solid darkgrey;">
              <v-btn :to="''" depressed plain block class="text-capitalize">BOP - Beladungsoptimierung 1.1</v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-center" rowspan="3" style="border-bottom:2px solid darkgrey;">Standortplanung</td>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Eisenstadt 1.4</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <v-btn :to="''" depressed plain block class="text-capitalize">innerbetriebliche Standortplanung 1.1</v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left" style="border-bottom:2px solid darkgrey;"><v-btn :to="''" depressed plain block class="text-capitalize">Standortplanung 3.0</v-btn></td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-center" rowspan="10" style="border-bottom:2px solid darkgrey;">Personalplanung</td>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Zuordnungsplanung 2.1</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <v-btn :to="''" depressed plain block class="text-capitalize">Lineare Portfolio Optimierung 2.0</v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Roundtrip 0.9</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Job Shop 2.2</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Verkehrsplaner</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left">
              <v-btn :to="''" depressed plain block class="text-capitalize">Maschinenbelegungsplanung 5.2</v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">OP-Scheduling 2.3</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Ernährungsplaner 2.0</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left"><v-btn :to="''" depressed plain block class="text-capitalize">Einkaufswagen</v-btn></td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
          <tr>
            <td class="text-left" style="border-bottom:2px solid darkgrey;"><v-btn :to="''" depressed plain block class="text-capitalize">Hotelmanager 5.0</v-btn></td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-cog-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-file-account-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center" style="border-bottom:2px solid darkgrey;">
              <v-btn text icon href="">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Methodenübersicht",
        disabled: true,
      },
    ],
  }),
};
</script>