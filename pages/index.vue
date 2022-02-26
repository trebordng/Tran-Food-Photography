<template>
  <div class="landing-page">
    <Spinner />
    <div class="book-title">
      {{ $t("bookTitle") }}
    </div>
    <div class="book-author">
      {{ $t("bookAuthor") }}
    </div>
    <div class="landing-page-content">
      <div>
        <nuxt-link :to="localePath('about')">
          <button>
            <span>{{ $t("open") }}</span>
          </button>
        </nuxt-link>
      </div>
      <div class="translation">
        <nuxt-link :to="switchLocalePath('en')" class="translation-button"
          >English</nuxt-link
        >
        <nuxt-link :to="switchLocalePath('vie')" class="translation-button"
          >Tiếng Việt</nuxt-link
        >
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  head() {
    return {
      title: "Home | Tran Food Photography",
    };
  },
};
</script>


<style>
@media only screen and (max-width: 1200px) {
  .landing-page{
    background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.8),
      rgba(44, 39, 39, 0.1)
    ),
    url("../components/landing-image-mobile.jpg") !important;
  }
}
@media only screen and (max-width: 800px) {
  .landing-page{
    background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.8),
      rgba(44, 39, 39, 0.1) 
    ),
    url("../components/landing-image-mobile.jpg") !important;
    background-position: 30% 80%;
  }
  
}
.landing-page {
  font-family: "Montserrat";
  background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.8),
      rgba(44, 39, 39, 0.1)
    ),
    url("../components/landing-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-weight: bold;
}

.book-title {
  color: #ff7517;
  font-size: 36px;
  padding: 20vh 3vh 0 3vh;
  text-align: center;
  font-weight: bolder;
}
.book-author {
  color: #eeeeee;
  font-size: 20px;
  font-style: italic;
  padding-top: 0.1%;
  text-align: center;
}

.landing-page-content {
  position: absolute;
  top: 65%;
  left: 20%;
}
/* landing page language switch */
.translation {
  padding-top: 20px;
}
.translation-button {
  padding-right: 20px;
  color: #fefcff;
  text-decoration: none;
}
.translation-button:hover {
  color: #cbc9cc;
}
</style>