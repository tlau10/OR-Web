<template>
  <v-card
    flat
    tile
  >
       <v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Kurzbeschreibung
          </th>
          <th class="text-center">
            technische Dokumentation
          </th>
          <th class="text-center">
            Benutzerhandbuch
          </th>
          <th class="text-center">
              Download
              </th>
        </tr>
      </thead>
      <tbody>
      <!--  <tr
          v-for="item in methoden"
          :key="item.name"
        >-->
        <tr>
          <td>Paket Transport Simulation System 1.1 (PTSS)</td>
          <td>bla bla bla bla</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card>
</template>