<template>
  <v-card
    flat
    tile
  >
    <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
        <v-container>
        <v-card> 
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">Kategorie</th>
                            <th class="text-center">Solvername</th>
                            <th class="text-center">technische Dokumentation</th>
                            <th class="text-center">Benutzerhandbuch</th>
                            <th class="text-center">Download</th>
                        </tr>
                    </thead>
                    <tbody v-for="kategorie in kategorie" :key="kategorie.name">
                        <tr class="text-center">
                            <td>{{kategorie.name}}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr v-for="solver in kategorie.solver" :key="solver.name">
                            <td></td>
                            <td>
                                <v-btn :to="solver.start" depressed plain block class="text-capitalize">
                                    {{ solver.name }}
                                </v-btn>
                            </td>
                            <td class="text-center">
                                <v-btn text icon :to="solver.dokumentation" download>
                                    <v-icon>mdi-file-cog-outline</v-icon>
                                </v-btn>
                            </td>
                            <td class="text-center">
                                <v-btn text icon :to="solver.handbuch" download>
                                    <v-icon>mdi-file-account-outline</v-icon>
                                </v-btn>
                            </td>
                            <td class="text-center">
                                <v-btn text icon :to="solver.donwload" download>
                                    <v-icon>mdi-download</v-icon>
                                </v-btn>
                            </td>
                        </tr> 
                    </tbody>
                </template>
            </v-simple-table>
        </v-card> 
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
          text: 'Solverübersicht',
          disabled: true,
        }
      ],
      kategorie: [
            {
              name: '',
              solver:[
                  {
                    name: 'LP-Solve Frontend',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                }, 
                {
                    name: 'Iterator 2.0',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'GLPK',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'Power LP 2.0',
                    start:'PowerLP',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'LiPS',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'Dakin 2.0',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
              ]
          },
          {
              name: 'Interaktive Solver',
              solver: [
                {
                    name: 'Iterator 2.0',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'Sensibilitätsanalyse',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
                {
                    name: 'Primal Dual Wandler',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
              ],
          },
          {
              name: 'Grafische Solver',
              solver:[
                {
                    name: 'OR GraphX',
                    start:'',
                    dokumentation :'',
                    handbuch: '',
                    download: '',
                },
              ]
          },
      ],
    })
  }
</script>