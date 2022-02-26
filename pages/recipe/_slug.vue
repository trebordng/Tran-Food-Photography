<template>
  <article>
    <div class="album-pages blog-page fade-in">
      <Spinner />
      <div class="album-pages-title">
        <h5 v-if="vieLanguage" class="orange-text big-title">
          {{ blog.vieTitle }}
        </h5>
        <h5 v-else class="orange-text big-title">{{ blog.enTitle }}</h5>
      </div>
      <div class="row">
        <div class="col-lg-4 article-p-wrapper">
          <p v-if="vieLanguage" class="article-p">
            {{ blog.vieStartParagraph }}
          </p>
          <p v-else class="article-p">{{ blog.enStartParagraph }}</p>
        </div>
        <div class="col-lg-8 article-avatar-wrapper">
          <img
            :src="require(`../../components/blogs/${blog.slug}/${blog.img}`)"
            alt="blog-avatar"
            class="article-avatar"
          />
        </div>
      </div>
      <div class="article-p-2-wrapper row" style="margin-top: 3vh">
        <div class="col-lg-6 col-md-12 col-sm-12 carousel-wrapper">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item">
                <button
                  type="button"
                  class="image-button no-image-padding"
                  data-bs-toggle="modal"
                  data-bs-target=".image1"
                >
                  <img
                    class="image-carousel"
                    :src="
                      require(`../../components/blogs/${blog.slug}/${blog.img}`)
                    "
                    alt="Second slide"
                  />
                </button>
                <div
                  class="modal fade image1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <img
                        class="image-size-popup"
                        :src="
                          require(`../../components/blogs/${blog.slug}/${blog.img}`)
                        "
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <button
                  type="button"
                  class="image-button no-image-padding"
                  data-bs-toggle="modal"
                  data-bs-target=".image2"
                >
                  <img
                    class="image-carousel"
                    :src="
                      require(`../../components/blogs/${blog.slug}/${blog.img1}`)
                    "
                    alt="Second slide"
                  />
                </button>
                <div
                  class="modal fade image2"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <img
                        class="image-size-popup"
                        :src="
                          require(`../../components/blogs/${blog.slug}/${blog.img1}`)
                        "
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <button
                  type="button"
                  class="image-button no-image-padding"
                  data-bs-toggle="modal"
                  data-bs-target=".image3"
                >
                  <img
                    class="image-carousel"
                    :src="
                      require(`../../components/blogs/${blog.slug}/${blog.img2}`)
                    "
                    alt="Second slide"
                  />
                </button>
                <div
                  class="modal fade image3"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <img
                        class="image-size-popup"
                        :src="
                          require(`../../components/blogs/${blog.slug}/${blog.img2}`)
                        "
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 article-left-p-2-wrapper">
          <p v-if="vieLanguage" class="article-p">
            {{ blog.vieFirstDescription }}
          </p>
          <p v-else class="article-p">{{ blog.enFirstDescription }}</p>
          <p v-if="vieLanguage" class="article-p">
            {{ blog.vieSecondDescription }}
          </p>
          <p v-else class="article-p">{{ blog.enSecondDescription }}</p>
        </div>
      </div>
      <div class="article-p-3-wrapper" style="margin-top: 3vh">
        <img
          class="background-ending"
          :src="require(`../../components/blogs/${blog.slug}/${blog.backgroundEnding}`)"
          alt="Second slide"
        />
         <p v-if="vieLanguage" class="ending-text">
            {{ blog.vieEnding }}
          </p>
          <p v-else class="ending-text">{{ blog.enEnding }}</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      vieLanguage: false,
    };
  },
  created() {
    this.blogData = this.blogs;
    if (this.$route.path.includes("vie")) {
      this.vieLanguage = true;
    } else {
      this.vieLanguage = false;
    }
  },
  async asyncData({ $content, params }) {
    const blog = await $content("recipes", params.slug)
      .only(["backgroundEnding",
        "vieTitle",
        "enTitle",
        "enStartParagraph",
        "vieStartParagraph",
        "slug",
        "shortDescription",
        "img",
        "img1",
        "img2",
        "enFirstDescription",
        "vieFirstDescription",
        "enSecondDescription",
        "vieSecondDescription",
        "enEnding",
        "vieEnding",
        "id"
      ])
      .sortBy("id", "asc")
      .fetch();

    return {
      blog,
    };
  },
};
</script>
<style>
</style>