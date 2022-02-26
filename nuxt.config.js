import { main } from "@popperjs/core";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', 
  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tran Food Photography',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }
     
      
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", type: "text/javascript"},
      { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js", type: "text/javascript"}
      

      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/css/main.css',],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  modules:  ['@nuxt/content',
  ["@nuxtjs/i18n",
  {
    locales: ["en", "vie"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          open: "Open",
          bookTitle: "Master Food Photography",
          bookAuthor:"Tran Food Photography",
          about:"About Me",
          contact:"Contact",
          album:"Album",
          food:"Food",
          drink:"Drink",
          action:"Action",
          lifestyle:"Lifestyle",
          art:"Art",
          menu:"Menu",
          search:"Search",
          blog:"Blogs",
          recipe:"Recipes",
          name:"Full Name",
          email:"Email",
          subject:"Subject",
          send:"Send",
          message:"Message",
          reset:"Reset",
          success:"Your Message Has Been Sent Successfully! I Will Try To Reply ASAP",
          aboutMeLeft:"I'm Diep Tran, a person who loves doing things artistically, and always looks for a new way to create things rather than follows a traditional way. After a few years of trying different kinds of photography, my passion became food and still life photography. With these kinds of photography, I am able to arrange the scene and create a story for each photo relative to the actual situation at the time. Like other women, I like to make friends with people, love shopping, and having coffee with friends. Since my passion for food photography became stronger I started to learn how to cook yummy dishes that look interesting as well as to put my creative arrangement touch into those dishes and photograph them.",
          aboutMeRight:"I also started writing recipes to share my way of making and presenting food. These recipes are not from professional chefs but from a person who loves cooking with creativity in her own way to create a dish that not also tastes yummy but looks inspiring for photography. My blog is to share my experiences of photographing food, how to master the light, a good composition so that the food has to appear as mouthwatering food in the photos. If you are interested in working with me, please contact me."
        },
        vie: {
          open: "Mở",
          bookTitle:"Làm Chủ Kỹ Năng Chụp Hình Thức Ăn",
          bookAuthor:"Tran Food Photography",
          about:"Một Chút Về Tôi",
          contact:"Liên Hệ",
          album:"Kho Ảnh",
          food:"Thức Ăn",
          drink:"Thức Uống",
          action:"Hành Động",
          lifestyle:"Lối Sống",
          art:"Hội Họa",
          menu:"Mục Lục",
          search:"Tìm",
          blog:"Nhật Ký",
          recipe:"Công Thức",
          name:"Họ và Tên",
          email:"Email",
          subject:"Chủ Đề",
          send:"Gửi",
          message:"Tin Nhắn",
          reset:"Đặt Lại",
          success:"Tin Nhắn Của Bạn Đã Được Gửi. Mình Sẽ Trả Lời Nhanh Hết Sức Có Thể",
          aboutMeLeft:"Mình là Diệp Trần, một người yêu nghệ thuật, thích tư duy, sáng tạo và không thích đi theo một khuôn khổ nhất định, Vì vậy, sau một thời gian cầm máy, thử qua nhiều thể loại, mình đã nhận ra niềm đam mê của mình là được chụp những món ăn và tỉnh vật. Vì ở hai thể loại này, mình được tự do sắp xếp, tạo dựng câu chuyện và thổi hồn vào món ăn, vào tác phẩm theo cách của riêng mình. Cuôc sống của mình cũng như những phụ nữ khác, thích giao du, thích thời trang, thích cafe, thích tám chuyện...Và khi niềm đam mê chụp hình thức ăn đủ lớn, mình bắt đầu tự học cách chế biến các món ăn lạ, đẹp mắt cùng chút sáng tạo, rồi giữ lại những món ăn đó qua ống kính cùng những câu chuyện của riêng mình.",
          aboutMeRight:"Mình cũng viết lại công thức để chia sẻ ít kinh nghiệm về một số món ăn mà mình thích và đã được mọi người khen ngon. Những công thức này không phải đến từ một đầu bếp chuyên nghiệp mà từ một người yêu chụp hình và yêu nghệ thuật nên sẽ có những biến tấu khác biệt nhưng lại rất đặc biệt. Trang Blog là nơi mình chia sẻ kinh nghiệm về việc chụp hình, về cách làm chủ ánh sáng, bố cục sao cho món ăn khi lên hình phải là món ăn thật đẹp mắt, khiến người nhìn muốn có để thử ngay. Nếu bạn quan tâm đến công việc của mình, hãy liên lạc với mình nhé."
        },
      },
  }}
]
]
 
  
}
