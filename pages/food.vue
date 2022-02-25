<template>
  <div class="album-pages">
    <div class="row album-pages-title">
      <div class="col-lg-6">
        <h2 class="orange-text big-title">{{ $t("food") }}</h2>
      </div>
      <div class="col-lg-6 search-bar">
        <div>
          <input
            id="groupId"
            v-model="groupId"
            class="search-input"
            @click="clearInput"
            style="margin-right: 4px; padding: 8px"
          />
        </div>
        <div>
          <button v-on:click="filterImage">
            <span>{{ $t("search") }}</span>
          </button>
          <button v-on:click="resetButton">
            <span>{{ $t("reset") }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="row fade-in">
      <div
        class="col-lg-3 col-md-6 image-wrapper"
        v-for="data in myJson"
        :key="data.id"
      >
        <button
          type="button"
          class="image-button no-image-padding"
          data-bs-toggle="modal"
          :data-bs-target="`.${data.vieSubTitle}`"
          v-if="vieLanguage"
        >
          <h5 class="orange-text image-name">
            {{ data.vieTitle }}
          </h5>

          <img
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
          />
        </button>
        <button
          type="button"
          class="image-button no-image-padding"
          data-bs-toggle="modal"
          :data-bs-target="`.${data.enSubTitle}`"
          v-else
        >
          <h5 class="orange-text image-name">
            {{ data.enTitle }}
          </h5>

          <img
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
          />
        </button>
        <div
          v-if="vieLanguage"
          :class="`modal fade ${data.vieSubTitle}`"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img
                class="image-size-popup"
                :src="require(`../components/album/foods/${data.src}`)"
              />
            </div>
          </div>
        </div>
        <div
          v-else
          :class="`modal fade ${data.enSubTitle}`"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <img
                class="image-size-popup"
                :src="require(`../components/album/foods/${data.src}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../components/album/foods/food.json";
import _ from "lodash";
export default {
  head() {
    return {
      title: "Food | Tran Food Photography",
    };
  },
  data() {
    return {
      myJson: json,
      groupId: "e.g bánh chưng",
      vieLanguage: false,
    };
  },
  methods: {
    resetButton() {
      let newO = json;
      this.myJson = newO;
    },
    clearInput() {
      this.groupId = "";
    },
    filterImage() {
      let newO = json;
      this.myJson = newO;
      if (this.vieLanguage === true) {
        let filtered = _.filter(this.myJson, function (o) {
          return o.vieTitle.toLowerCase().includes(groupId.value.toLowerCase());
          
        });
        this.myJson = filtered;
      } else {
        let filtered = _.filter(this.myJson, function (o) {
          return o.enTitle.toLowerCase().includes(groupId.value.toLowerCase());
          
        });
        this.myJson = filtered;
      }
      
    },
  },
  created() {
    if (this.$route.path.includes("vie")) {
      this.vieLanguage = true;
    } else {
      this.vieLanguage = false;
    }
  },
};
</script>

<style>
</style>