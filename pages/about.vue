<template>

  <div class="row">
    <Spinner />
    <div class="col-lg-6 about">
      <h2 class="orange-text page-title bold-text">{{ $t("about") }}</h2>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 aboutRight">
      <div class="about-content">
        <p class="white-text justify-text">
          <img src="../components/About me.jpg" class="about-image" />

          <span>{{ $t("aboutMeLeft") }}</span>
        </p>
        <p class="white-text justify-text">{{ $t("aboutMeRight") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About | Tran Food Photography",
    };
  },
};
</script>

<style>

@media only screen and (max-width: 992px) {
  .about-image {
    width: 45% !important;
  }
  .about-content {
    font-size: 16px !important;
  }
  .about{
    height:45vh !important;
  }
  
}
@media only screen and (max-width: 1300px) and (min-width: 1100px) {
  .about-image {
    width: 45% !important;
  }
  .about-content {
    font-size: 13px !important;
  }
}
@media only screen and (max-width: 1100px) and (min-width: 992px) {
  .about-image {
    width: 45% !important;
  }
  .about-content {
    font-size: 12px !important;
  }
}
@media only screen and (min-width: 1300px) and (max-width: 1600px) {
  .about-content {
    font-size: 16px !important;
  }
}
.row {
  overflow: hidden;
}
.about-content {
  font-size: 20px;
  line-height: 1.6;
  padding: 8vh 4vh 4vh 4vh;
}

.about {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.3),
      rgba(44, 39, 39, 0.3)
    ),
    url("../components/aboutMeLeft.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-weight: bold;
  overflow: hidden;
  background-position: 30%;
  align-items: center;
}
.aboutRight {
  font-family: "Montserrat";
  background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.3),
      rgba(44, 39, 39, 0.3)
    ),
    url("../components/aboutMeRight.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  position: relative;
  font-weight: bold;
  overflow: hidden;
  background-position: 50% 90%;
}
.about-image {
  width: 35%;
  float: left;
  margin-bottom: 3vh;
  margin-right: 3vh;
}
</style>