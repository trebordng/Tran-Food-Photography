<template class="fade-in">
  <div class="row album fade-in">
    <h2 class="orange-text page-title" style="padding:4vh">
      {{ $t("album") }}
    </h2>

    <div class="col-lg-6 top-section fade-in">
      <nuxt-link :to="localePath('food')">
        <img
          src="../components/food-page.jpg"
          alt="food section"
          width="100%"
          height="100%"
          class="image-section"
        />
        <h5 class="section-name white-text">{{ $t("food") }}</h5>
      </nuxt-link>
    </div>
    <div class="col-lg-3 top-section fade-in">
      <nuxt-link :to="localePath('drink')">
        <img
          src="../components/drink-page.jpg"
          alt="drink section"
          width="100%"
          height="100%"
          class="image-section"
        />
        <h5 class="section-name white-text">{{ $t("drink") }}</h5>
      </nuxt-link>
    </div>
    <div class="col-lg-3 top-section fade-in">
      <nuxt-link :to="localePath('action')">
        <img
          src="../components/action-page.jpg"
          alt="action section"
          width="100%"
          height="100%"
          class="image-section"
        />
        <h5 class="section-name white-text">{{ $t("action") }}</h5>
      </nuxt-link>
    </div>
    <div class="col-lg-6 bottom-section fade-in">
      <nuxt-link :to="localePath('lifestyle')">
        <img
          src="../components/lifestyle-page.jpg"
          alt="lifestyle section"
          width="100%"
          height="100%"
          class="image-section"
        />
        <h5 class="section-name white-text">{{ $t("lifestyle") }}</h5>
      </nuxt-link>
    </div>
    <div class="col-lg-6 bottom-section fade-in">
      <a href="https://tranphotographicart.com/" target="_blank">
        <img
          src="../components/food-page.jpg"
          alt="art"
          width="100%"
          height="100%"
          class="image-section"
        />
        <h5 class="section-name white-text">{{ $t("art") }}</h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Album | Tran Food Photography",
    };
  }
};
</script>

<style>
.album {
  background: #161313;
  min-height: 100vh;
}
.top-section {
  position: relative;
  margin: 0 !important;
  height: 60vh;
  padding: 0 !important;
}
.bottom-section {
  position: relative;
  margin: 0 !important;
  height: 27.25vh;
  padding: 0 !important;
}
.top-section:hover,
.bottom-section:hover {
  display: inline-block;
  overflow: hidden;
  
}
.image-section {
  object-fit: cover;
}
.image-section:hover {
  filter: brightness(80%);
  -webkit-filter: brightness(80%);
  -moz-filter: brightness(80%);
  -o-filter: brightness(80%);
  -ms-filter: brightness(80%);
}
.section-name {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  font-weight: bold;
  transform: translate(-50%, -50%);
}
</style>