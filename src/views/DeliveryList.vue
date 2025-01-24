<template>
  <v-container>
    <!-- ヘッダーセクション -->
    <v-row class="mb-6">
      <v-col>
        <v-card class="pa-4">
          <v-card-title class="text-h4">
            <v-icon size="large" class="mr-4">mdi-truck-delivery</v-icon>
            配送リストとルート表示
          </v-card-title>
          <v-card-subtitle>
            バックエンドからAPIで取得したデータを基にデータを表示
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- マップセクション -->
    <v-row class="mb-6">
      <v-col>
        <v-card>
          <v-card-text>
            <Map :deliveryAddresses="deliveryAddresses" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- データテーブルセクション -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="deliveries"
        :search="search"
        :loading="loading"
        loading-text="データを読み込み中..."
        no-data-text="配送データがありません"
        item-value="id"
        class="elevation-1"
      >
        <template v-slot:[`item.address`]="{ item }">
          <v-chip color="primary" variant="outlined">
            <v-icon start>mdi-map-marker</v-icon>
            {{ item.address }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>

    <!-- エラー表示 -->
    <v-snackbar v-model="showError" color="error" timeout="3000">
      {{ errorMessage }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="showError = false">
          閉じる
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Map from "../components/Map.vue";

export default defineComponent({
  components: { Map },
  setup() {
    const deliveries = ref([
      {
        id: 1,
        recipientName: "田中太郎",
        address: "東京都千代田区丸の内1-1-1",
      },
      {
        id: 2,
        recipientName: "山田花子",
        address: "愛知県名古屋市中区栄3-1-1",
      },
      {
        id: 3,
        recipientName: "佐藤次郎",
        address: "大阪府大阪市中央区本町4-2-1",
      },
    ]);

    const deliveryAddresses = ref(deliveries.value.map((d) => d.address));
    const loading = ref(false);
    const search = ref("");
    const showError = ref(false);
    const errorMessage = ref("");

    const headers = [
      { title: "ID", align: "start", key: "id" },
      { title: "受取人", align: "start", key: "recipientName" },
      { title: "住所", align: "start", key: "address" },
    ];

    return {
      deliveries,
      deliveryAddresses,
      headers,
      loading,
      search,
      showError,
      errorMessage,
    };
  },
});
</script>
