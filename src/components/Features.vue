<script setup>
import FeaturesContent from "@/components/child-components/FeaturesContent.vue";
</script>

<template>
  <!--====== FEATURES PART START ======-->
  <section id="features" class="features_area pt-35 pb-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_features mt-30 features_1 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
            <div class="features_icon">
              <i class="lni lni-code"></i>
            </div>
            <FeaturesContent
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
            />
          </div> <!-- single featuresow -->
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_features mt-30 features_2 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
            <div class="features_icon">
              <i class="lni lni-layers"></i>
            </div>
            <FeaturesContent
                title="HTML5"
                description="Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
            />
          </div> <!-- single featuresow -->
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_features mt-30 features_3 text-center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.9s">
            <div class="features_icon">
              <i class="lni lni-exit-down"></i>
            </div>
            <FeaturesContent
                title="Free"
                description="Lorem ipsum dolor sit ame consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
            />
          </div> <!-- single featuresow -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
  <!--====== FEATURES PART ENDS ======-->
</template>
