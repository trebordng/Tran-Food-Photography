<template>
  <div class="album-pages">
    <Spinner />
    <div class="row album-pages-title">
      <div class="col-lg-6">
        <h2 class="orange-text big-title">{{ $t("lifestyle") }}</h2>
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

    <div class="row ">
      <div
        class="col-lg-3 col-md-6 image-wrapper"
        v-for="data in myJson"
        :key="data.id"
      >
        <div style="position: relative">
          <img
            data-fancybox="gallery"
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
            :data-src="`#${data.vieSubTitle}`"
            :data-caption="`${data.vieTitle}`"
            v-if="vieLanguage"
          />

          <img
            data-fancybox="gallery"
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
            :data-src="`#${data.enSubTitle}`"
            :data-caption="`${data.enTitle}`"
            v-else
          />
          <h5 class="orange-text image-name" v-if="vieLanguage">
            {{ data.vieTitle }}
          </h5>
          <h5 class="orange-text image-name" v-else>
            {{ data.enTitle }}
          </h5>
        </div>

        <div v-if="vieLanguage" :id="`${data.vieSubTitle}`" class="fancy-image">
          <img
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
            data-src="#dialog-content"
          />
        </div>
        <div v-else :id="`${data.enSubTitle}`" class="fancy-image">
          <img
            class="image-size"
            :src="require(`../components/album/foods/${data.src}`)"
            data-src="#dialog-content"
          />
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
      title: "Lifestyle | Tran Food Photography",
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