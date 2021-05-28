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
          <!-- TODO <v-btn> href zu-Center ergänzen -->
          <!-- TODO nach jeweils letzten Kategorie-Eintrag Borderlinie dicker machen -->
          <!-- TODO style auslagern in CSS -->
          <tr>
            <td class="text-center" rowspan="3" style="border-bottom: 2px solid darkgrey;">Transportplanung</td>
            <td class="text-left">
              <a href=""> Paket Transport Simulation System 1.1 (PTSS)</a>
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
            <!-- <td class="text-center">Transportplanung</td> -->
            <td class="text-left"><a href="">TR-Optimizer 2.1</a></td>
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
            <!-- <td class="text-center">Transportplanung</td> -->
            <td class="text-left" style="border-bottom:2px solid darkgrey;">
              <a href="">BOP - Beladungsoptimierung 1.1</a>
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
            <td class="text-left"><a href="">Eisenstadt 1.4</a></td>

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
            <!-- <td class="text-center">Standortplanung</td> -->
            <td class="text-left">
              <a href="">innerbetriebliche Standortplanung 1.1</a>
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
            <!--  <td class="text-center">Standortplanung</td> -->
            <td class="text-left" style="border-bottom:2px solid darkgrey;"><a href="">Standortplanung 3.0</a></td>

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
            <td class="text-left"><a href="">Zuordnungsplanung 2.1</a></td>

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
            <!-- <td class="text-center">Personalplanung</td> -->
            <td class="text-left">
              <a href="">Lineare Portfolio Optimierung 2.0</a>
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
            <!--  <td class="text-center">Personalplanung</td>-->
            <td class="text-left"><a href="">Roundtrip 0.9</a></td>

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
            >
          </tr>
          <tr>
            <!--  <td class="text-center">Personalplanung</td> -->
            <td class="text-left"><a href="">Job Shop 2.2</a></td>

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
            <!--   <td class="text-center">Personalplanung</td> -->
            <td class="text-left"><a href="">Verkehrsplaner</a></td>

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
            <!-- <td class="text-center">Personalplanung</td> -->
            <td class="text-left">
              <a href="">Maschinenbelegungsplanung 5.2</a>
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
            <!-- <td class="text-center">Personalplanung</td> -->
            <td class="text-left"><a href="">OP-Scheduling 2.3</a></td>

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
            <!-- <td class="text-center">Personalplanung</td> -->
            <td class="text-left"><a href="">Ernährungsplaner 2.0</a></td>

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
            <!--   <td class="text-center">Personalplanung</td> -->
            <td class="text-left"><a href="">Einkaufswagen</a></td>

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
            <!--  <td class="text-center">Personalplanung</td> -->
            <td class="text-left" style="border-bottom:2px solid darkgrey;"><a href="">Hotelmanager 5.0</a></td>

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