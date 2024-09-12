<script setup>
import SectionTitle from "@/layouts/SectionTitle.vue";
import PricingTopBar from "@/components/child-components/pricingTopBar.vue";
import PriceList from "@/components/child-components/PriceList.vue";
</script>

<template>
  <!--====== PRICNG PART START ======-->
  <section id="pricing" class="pricing_area mt-80 pt-75 pb-80">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">

            <SectionTitle
                sectionTitle="Choose a Plan"
                sectionDes="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore."
            />

          </div> <!-- section title -->
        </div>
      </div> <!-- row -->
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div class="single_pricing text-center pricing_color_1 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
            <PricingTopBar
                title="Startup"
                iconName="lni lni-coffee-cup"
                price="$9.00"
            />
            <PriceList
                list1="24/7 Support"
                list2="Free Update"
                list3="unimited download"
            />
            <div class="pricing_btn">
              <a href="#" class="main-btn main-btn-2">Get Started</a>
            </div>
          </div>  <!-- single pricing -->
        </div>
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div class="single_pricing text-center pricing_active pricing_color_2 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
            <PricingTopBar
                title="Standard"
                iconName="lni lni-crown"
                price="$15.00"
            />
            <PriceList
                list1="24/7 Support"
                list2="Free Update"
                list3="unimited download"
            />
            <div class="pricing_btn">
              <a href="#" class="main-btn">Get Started</a>
            </div>
          </div>  <!-- single pricing -->
        </div>
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div class="single_pricing text-center pricing_color_3 mt-30 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
            <PricingTopBar
                title="Premium"
                iconName="lni lni-diamond-alt"
                price="$20.00"
            />
            <PriceList
                list1="24/7 Support"
                list2="Free Update"
                list3="unimited download"
            />
            <div class="pricing_btn">
              <a href="#" class="main-btn main-btn-2">Get Started</a>
            </div>
          </div>  <!-- single pricing -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
  <!--====== PRICNG PART ENDS ======-->
</template>
