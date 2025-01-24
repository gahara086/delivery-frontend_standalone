<template>
  <v-app>
    <v-app-bar app>
      <v-container class="d-flex align-center">
        <v-app-bar-title>配送管理システム</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" text>ホーム</v-btn>
        <v-btn to="/deliveries" text>配送リスト</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
