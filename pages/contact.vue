<template>
  <div class="row">
    <Spinner />
    <div class="col-lg-6 contact">
      <h2 class="orange-text page-title bold-text">{{ $t("contact") }}</h2>
    </div>
    <div class="col-lg-6  contactRight ">
      <form class="contact-form" ref="form" @submit.prevent="sendEmail">
        <label class="white-text bold-text block-label">{{ $t("name") }}</label>
        <input
          type="text"
          name="user_name"
          class="text-box"
          placeholder="Your Full Name"
          required
        />

        <label class="white-text bold-text block-label">{{
          $t("email")
        }}</label>
        <input
          type="email"
          name="subject"
          class="text-box"
          placeholder="Your Email"
          required
        />

        <label class="white-text bold-text block-label">{{
          $t("subject")
        }}</label>
        <input
          type="text"
          name="subject"
          class="text-box"
          placeholder="Subject"
        />

        <label class="white-text bold-text block-label">{{
          $t("message")
        }}</label>
        <textarea
          name="message"
          class="text-box"
          style="display: block"
        ></textarea>

        <button type="submit">
          <span>{{ $t("send") }}</span>
        </button>
        <p v-if="successText" class="orange-text">{{ $t("success") }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  head() {
    return {
      title: "Contact | Tran Food Photography",
    };
  },
  data() {
    return {
      successText: false,
    };
  },
  methods: {
    successTextShow(){
        this.successText=true;
        setTimeout(()=>{
          this.successText=false
        },3000)
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_oi0y69p",
          "template_jlptrno",
          this.$refs.form,
          "user_srO7b3Harhxzqldgwf5Xl"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      this.successTextShow();
    },
  },
};
</script>

<style>
@media only screen and (max-width: 992px) {
  .contact{
    height:45vh !important;
  }
  
}

.text-box {
  color: #fefcff;
  border: 2px solid #fefcff;
  background: transparent;
  padding: 0.5vh;
  width: 80%;
  margin: 1vh 0 1vh 0;
}
.text-box:focus {
  background: rgba(203, 201, 204, 0.3);
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border-color:#ff7517;
}
.block-label {
  display: block;
}
.contact-form {
  padding: 8vh 4vh 4vh 4vh;
}
.contact {
  font-family: "Montserrat";
  background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.3),
      rgba(44, 39, 39, 0.3)
    ),
    url("../components/aboutme.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-weight: bold;
  overflow: hidden;
  background-position: 50% 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactRight {
  font-family: "Montserrat";
  background-image: linear-gradient(
      to bottom,
      rgba(44, 39, 39, 0.3),
      rgba(44, 39, 39, 0.3)
    ),
    url("../components/blog-right.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-weight: bold;
  overflow: hidden;
  background-position: 50% 90%;
}
</style>