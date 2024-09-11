<script setup>
  import {RouterLink} from "vue-router";
  const title = "HTML App Landing Page Template";
  const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.";
</script>

<template>
  <!--====== HEADER PART START ======-->
    <section class="header_area">
    <div class="header_navbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <RouterLink class="navbar-brand" :to="{ name: home }">
                <img src="../../frontend/assets/images/logo.svg" alt="Logo">
              </RouterLink>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <RouterLink class="page-scroll" :to="{name: home}">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#features">Feature</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#screenshot">Screenshot</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#pricing">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#blog">Blog</a>
                  </li>
                </ul>
              </div> <!-- navbar collapse -->
            </nav> <!-- navbar -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div> <!-- header navbar -->

    <div id="home" class="header_hero d-lg-flex align-items-center">
      <img class="shape shape-1" src="../../frontend/assets/images/shape-1.svg" alt="shape">
      <img class="shape shape-2" src="../../frontend/assets/images/shape-2.svg" alt="shape">
      <img class="shape shape-3" src="../../frontend/assets/images/shape-3.svg" alt="shape">

      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header_hero_content mt-45">
              <h2 class="header_title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">{{ title }}</h2>
              <p class="wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">{{ description }}</p>
              <ul>
                <li><a class="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1s" href="#">Discover More</a></li>
                <li><a class="main-btn main-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.4s" href="#">Download App</a></li>
              </ul>
            </div> <!-- header hero content -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
      <div class="header_image d-flex align-items-end">
        <div class="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s">
          <img src="../../frontend/assets/images/header_app.png" alt="header App">
          <img src="../../frontend/assets/images/dots.svg" alt="dots" class="dots">
        </div> <!-- image -->
      </div> <!-- header image -->
    </div> <!-- header hero -->
  </section>
  <!--====== HEADER PART ENDS ======-->
</template>
<style lang="css">
  #nav .router-link-exact-active {
    color: #F85146;
  }
</style>