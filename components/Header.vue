<template>
  <div>
    <a
      :class="`${
        scrollNav >= 80 ? 'menu-button navBackground' : 'menu-button'
      }`"
      data-bs-toggle="offcanvas"
      href="#offcanvas"
      role="button"
      aria-controls="offcanvas"
    >
      <button>
        <span>{{ $t("menu") }}</span>
      </button>
    </a>

    <div
      class="offcanvas offcanvas-start navigation-bar"
      tabindex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title orange-text" id="offcanvasExampleLabel">
          {{ $t("menu") }}
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <nuxt-link :to="localePath('index')">
          <img
            src="./logo.png"
            alt="brand logo"
            width="60%"
            height="auto"
            data-bs-dismiss="offcanvas"
            class="logo"
          />
        </nuxt-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('about')">
              {{ $t("about") }}
            </nuxt-link>
          </li>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('contact')">
              {{ $t("contact") }}
            </nuxt-link>
          </li>

          <li class="nav-item" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('album')">
              {{ $t("album") }}
            </nuxt-link>
          </li>

          <li class="nav-item sub-pages" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('food')">
              {{ $t("food") }}
            </nuxt-link>
          </li>
          <li class="nav-item sub-pages" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('drink')">
              {{ $t("drink") }}
            </nuxt-link>
          </li>
          <li class="nav-item sub-pages" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('action')">
              {{ $t("action") }}
            </nuxt-link>
          </li>
          <li class="nav-item sub-pages" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('lifestyle')">
              {{ $t("lifestyle") }}
            </nuxt-link>
          </li>
          <li class="nav-item sub-pages" data-bs-dismiss="offcanvas">
            <a href="https://tranphotographicart.com/" target="_blank">
              {{ $t("art") }}
            </a>
          </li>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('blogs')">
              {{ $t("blog") }}
            </nuxt-link>
          </li>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <nuxt-link :to="localePath('recipes')">
              {{ $t("recipe") }}
            </nuxt-link>
          </li>
          <div class="language-switch">
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <nuxt-link
                :to="switchLocalePath('en')"
                class="translation-button-navbar"
                >English</nuxt-link
              >
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <nuxt-link
                :to="switchLocalePath('vie')"
                class="translation-button-navbar"
                >Tiếng Việt</nuxt-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollNav: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollNav = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>

.navBackground {
  background-color: rgba(44, 39, 39, 1);
}
.nav-item {
  padding-top: 2vh;
}
.nav-item a {
  color: #fefcff;
  text-decoration: none;
  font-size: 20px;
}
.nav-item a:hover {
  color: #cbc9cc;
}
.navigation-bar {
  background: rgba(44, 39, 39, 0.8) !important;
  padding-left: 3vh;
  width: 45vh !important;
}
.menu-button {
  position: fixed;
  top: 3%;
  z-index: 2;
  left: 3%;
}
</style>