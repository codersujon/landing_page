<script setup>
import Preloader from "@/components/Preloader.vue";
import Header from "@/layouts/Header.vue";
import Features from "@/components/Features.vue";
import About from "@/components/About.vue";
import Pricing from "@/components/Pricing.vue";
import Download from "@/components/Download.vue";
import Blog from "@/components/Blog.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
    <div>
      <!--====== PRELOADER PART START ======-->
      <Preloader />
      <!--====== PRELOADER PART ENDS ======-->

      <!--====== HEADER PART START ======-->
      <Header />
      <!--====== HEADER PART ENDS ======-->

      <!--====== FEATURES PART START ======-->
      <Features />
      <!--====== FEATURES PART ENDS ======-->

      <!--====== ABOUT PART START ======-->
      <About />
      <!--====== ABOUT PART ENDS ======-->

      <!--====== APP FEATURES PART START ======-->
      <section id="app_features">

      </section>
      <!--====== APP FEATURES PART ENDS ======-->

      <!--====== VIDEO PART START ======-->
      <section id="screenshot">

      </section>
      <!--====== PRICNG PART START ======-->
      <Pricing />
      <!--====== PRICNG PART ENDS ======-->

      <!--====== DOWNLOAD APP PART START ======-->
      <Download />
      <!--====== DOWNLOAD APP PART ENDS ======-->

      <!--====== BLOG PART START ======-->
      <Blog />
      <!--====== BLOG PART ENDS ======-->

      <!--====== FOOTER PART START ======-->
      <Footer />
      <!--====== FOOTER PART ENDS ======-->

      <!--====== BACK TOP PART START ======-->
      <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
      <!--====== BACK TOP PART ENDS ======-->
    </div>
</template>
