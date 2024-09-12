<script setup>
    const year = new Date().getFullYear();
    const subscribe = "Subscribe our newsletter";
    const description = "Join thousands of users who believe this is the one app.";
</script>

<template>
  <!--====== FOOTER PART START ======-->
  <section id="footer" class="footer_area pt-75 pb-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="footer_subscribe text-center">
            <h3 class="subscribe_title">{{ subscribe }}</h3>
            <p>{{ description }}</p>

            <div class="subscribe_form">
              <form action="#">
                <input type="text" placeholder="Enter Email...">
                <button class="main-btn">Subscribe</button>
              </form>
            </div>  <!-- subscribe form -->
          </div> <!-- footer subscribe -->
          <div class="footer_social text-center mt-60">
            <ul>
              <li><a href="#"><span class="lni lni-facebook-filled"></span></a></li>
              <li><a href="#"><span class="lni lni-twitter-original"></span></a></li>
              <li><a href="#"><span class="lni lni-instagram-filled"></span></a></li>
              <li><a href="#"><span class="lni lni-linkedin-original"></span></a></li>
            </ul>
          </div> <!-- footer social -->
          <div class="footer_copyright text-center mt-55">
            <p>Copyright &copy; {{ year }}. Developed by <a href="https://codersujon.com/" rel="nofollow" target="_blank">CoderSujon</a></p>
          </div> <!-- footer copyright -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
  <!--====== FOOTER PART ENDS ======-->
</template>
