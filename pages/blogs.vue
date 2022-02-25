<template>
  <div class="album-pages">
    <div class="row album-pages-title">
      <div class="col-lg-6">
        <h2 class="orange-text big-title">{{ $t("blog") }}</h2>
      </div>
      <div class="col-lg-6 search-bar">
        <div>
          <input
            id="groupId"
            v-model="groupId"
            @click="clearInput"
            class="search-input"
            style="margin-right: 4px; padding: 8px"
          />
        </div>
        <div>
          <button v-on:click="filterBlog">
            <span>{{ $t("search") }}</span>
          </button>
          <button v-on:click="resetButton">
            <span>{{ $t("reset") }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="blogs">
      <div class="row fade-in">
        <div
          class="col-lg-3 col-md-6 image-wrapper"
          v-for="blog of blogData"
          :key="blog.slug"
        >
          <nuxt-link class="image-button" :to="`blog/${blog.slug}`">
            <img
              :src="require(`../components/blogs/${blog.img}`)"
              class="image-size"
            />
            <div class="white-container">
              <h5 v-if="vieLanguage" class="orange-text bold-text blog-title">
                {{ blog.vieTitle }}
              </h5>
              <h5 v-else class="orange-text bold-text blog-title">
                {{ blog.enTitle }}
              </h5>

              <p v-if="vieLanguage" class="blog-short-description">
                {{ blog.vieShortDescription }}
              </p>
              <p v-else class="blog-short-description">
                {{ blog.enShortDescription }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content("blogs", params.slug)
      .only([
        "enTitle",
        "vieTitle",
        "description",
        "slug",
        "vieShortDescription",
        "enShortDescription",
        "img",
        "id"
      ])
      .sortBy("id", "asc")
      .fetch();

    return {
      blogs,
    };
  },
  head() {
    return {
      title: "Blogs | Tran Food Photography",
    };
  },
  data() {
    return {
      blogData: [],
      groupId: "e.g Cách chụp thức ăn",
      vieLanguage: false,
    };
  },
  methods: {
    resetButton() {
      this.blogData = this.blogs;
    },
    clearInput() {
      this.groupId = "";
    },
    filterBlog() {
      this.blogData = this.blogs;
      this.blogData = this.blogData.filter((blog) => {
        if (this.vieLanguage === true) {
          return (
            blog.vieTitle.toLowerCase().includes(this.groupId) ||
            blog.vieShortDescription.toLowerCase().includes(this.groupId)
          );
        } else {
          return (
            blog.enTitle.toLowerCase().includes(this.groupId) ||
            blog.enShortDescription.toLowerCase().includes(this.groupId)
          );
        }
      });
    },
  },
  created() {
    this.blogData = this.blogs;
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