<template>
<div class="about">
  <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Kategorie</th>
          <th class="text-left">Methodenname</th>
          <th class="text-left">Kurzbeschreibung</th>
          <th class="text-center">technische Dokumentation</th>
          <th class="text-center">Benutzerhandbuch</th>
          <th class="text-center">Download</th>
        </tr>
      </thead>
      <tbody>
        <!--  <tr
          v-for="item in methoden"
          :key="item.name"
        >-->
        <tr>
          <td class="text-center">Transportplanung</td>
          <td class="text-left">
            Paket Transport Simulation System 1.1 (PTSS)
          </td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Transportplanung</td>
          <td class="text-left">TR-Optimizer 2.1</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Transportplanung</td>
          <td class="text-left">BOP - Beladungsoptimierung 1.1</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Standortplanung</td>
          <td class="text-left">Eisenstadt 1.4</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Standortplanung</td>
          <td class="text-left">innerbetriebliche Standortplanung 1.1</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Standortplanung</td>
          <td class="text-left">Standortplanung 3.0</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Zuordnungsplanung 2.1</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Lineare Portfolio Optimierung 2.0</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Roundtrip 0.9</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
          >
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Job Shop 2.2</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Verkehrsplaner</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Maschinenbelegungsplanung 5.2</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">OP-Scheduling 2.3</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Ernährungsplaner 2.0</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Einkaufswagen</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
        </tr>
        <tr>
          <td class="text-center">Personalplanung</td>
          <td class="text-left">Hotelmanager 5.0</td>
          <td class="text-left"></td>
          <td class="text-center"><v-icon>mdi-file-cog-outline</v-icon></td>
          <td class="text-center"><v-icon>mdi-file-account</v-icon></td>
          <td class="text-center"><v-icon>mdi-download</v-icon></td>
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
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Methodenübersicht',
          disabled: true,
        }
      ]
    })
  }
</script>