<template>
  <scale-loader
    :loading="loading"
    :color="color"
    :size="size"
    class="spinner"
  ></scale-loader>
</template>

<script>
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default {
  components: {
    ScaleLoader,
  },
  data() {
    return {
      loading: true,
      size: "10vh",
      color: "#ff7517",
    };
  },
  methods: {
    spinnerLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.spinnerLoading();
  },
  mounted() {
    this.spinnerLoading();
  },
};
</script>
<style>
@media screen and (max-width:992px) {
  .v-scale1 {
    left: 40% !important;
  }
  .v-scale2 {
    left: 45% !important;
  }
  .v-scale3 {
    left: 50% !important;
  }
  .v-scale4 {
    left: 55% !important;
  }
  .v-scale5 {
    left: 60% !important;
  }
}
.spinner {
  background-color: #161313;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
}
.v-scale {
  width: 1vh !important;
  height: 10vh !important;
}
.v-scale1 {
  position: absolute;
  top: 50vh;
  left: 48% 
}
.v-scale2 {
  position: absolute;
  top: 50vh;
  left: 49% 
}
.v-scale3 {
  position: absolute;
  top: 50vh;
  left: 50% 
}
.v-scale4 {
  position: absolute;
  top: 50vh;
  left: 51% 
}
.v-scale5 {
  position: absolute;
  top: 50vh;
  left: 52% 
}
</style>