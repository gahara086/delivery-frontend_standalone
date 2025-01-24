<template>
  <div>
    <h1>配送リストとルートマップ</h1>
    <Map :deliveryAddresses="deliveryAddresses" />
    <DeliveryList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Map from "../components/Map.vue";
import DeliveryList from "./DeliveryList.vue";

export default defineComponent({
  components: {
    Map,
    DeliveryList,
  },
  setup() {
    const deliveryAddresses = ref([
      "東京都千代田区丸の内1-1-1",
      "愛知県名古屋市中区栄3-1-1",
      "大阪府大阪市中央区本町4-2-1",
    ]);

    return {
      deliveryAddresses,
    };
  },
});
</script>
