<template>
<div>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <Navbar />
<div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <!-- Section Heading-->
            <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
              <h3>Our Creative <span> Team</span></h3>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Single Advisor-->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
              <!-- Team Thumb-->
              <div class="advisor_thumb"><img class="ct" src="https://bootdey.com/img/Content/avatar/avatar7.png" style="height:100%" alt="">
                <!-- Social Info-->
                <div class="social-info"><a href="https://www.facebook.com/anthony.rafael.547389" target="_blank"><i class="fa fa-facebook"></i></a><a href="https://twitter.com/AnthonyR2503?s=08" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://www.linkedin.com/in/anthony-rafael-2503/" target="_blank"><i class="fa fa-linkedin"></i></a></div>
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>Anthony Rafael</h6>
                <p class="designation">Programmer</p>
              </div>
            </div>
          </div>
          <!-- Single Advisor-->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
              <!-- Team Thumb-->
              <div class="advisor_thumb"><img class="ct" src="https://bootdey.com/img/Content/avatar/avatar1.png" style="height:100%" alt="">
                <!-- Social Info-->
                <div class="social-info"><a href="https://www.facebook.com/gerald.nicholas.12/" target="_blank"><i class="fa fa-facebook"></i></a><a href="https://twitter.com/Boolaakk?s=09" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://www.linkedin.com/in/gerald-nicholas-b13413202/" target="_blank"><i class="fa fa-linkedin"></i></a></div>
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>Gerald N. Chandra</h6>
                <p class="designation">Programmer</p>
              </div>
            </div>
          </div>
          <!-- Single Advisor-->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
              <!-- Team Thumb-->
              <div class="advisor_thumb"><img class="ct" src="https://bootdey.com/img/Content/avatar/avatar6.png" style="height:100%" alt="">
                <!-- Social Info-->
                <div class="social-info"><a href="https://www.facebook.com/m.zidane.528" target="_blank"><i class="fa fa-facebook"></i></a><a href="https://mobile.twitter.com/@mzidanef8" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://www.linkedin.com/mwlite/in/m-zidane-0a7417202" target="_blank"><i class="fa fa-linkedin"></i></a></div>
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>M. Zidane Fattah</h6>
                <p class="designation">Programmer</p>
              </div>
            </div>
          </div>
          <!-- Single Advisor-->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
              <!-- Team Thumb-->
              <div class="advisor_thumb"><img class="ct" src="https://bootdey.com/img/Content/avatar/avatar2.png" style="height:100%" alt="">
                <!-- Social Info-->
                <div class="social-info"><a href="https://www.facebook.com/toni.sembiring.5" target="_blank"><i class="fa fa-facebook"></i></a><a href="https://twitter.com/ToniSembiring6" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://www.linkedin.com/in/toni-sembiring-719415202/" target="_blank"><i class="fa fa-linkedin"></i></a></div>
              </div>
              <!-- Team Details-->
              <div class="single_advisor_details_info">
                <h6>Toni Sembiring</h6>
                <p class="designation">Programmer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Profile',
  components: {
    Navbar
  }
}
</script>

<style>
body{margin-top:20px;
background:#eee;
}
.single_advisor_profile {
    position: relative;
    margin-bottom: 50px;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    z-index: 1;
    border-radius: 15px;
    -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
    box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
}
.single_advisor_profile .advisor_thumb {
    position: relative;
    z-index: 1;
    border-radius: 15px 15px 0 0;
    margin: 0 auto;
    padding: 30px 30px 0 30px;
    background-color: #3f43fd;
    overflow: hidden;
}
.single_advisor_profile .advisor_thumb::after {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    position: absolute;
    width: 150%;
    height: 80px;
    bottom: -45px;
    left: -25%;
    content: "";
    background-color: #ffffff;
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
}
@media only screen and (max-width: 575px) {
    .single_advisor_profile .advisor_thumb::after {
        height: 160px;
        bottom: -90px;
    }
    .ct{
        height:100%;
    }
}
.single_advisor_profile .advisor_thumb .social-info {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 0;
    right: 30px;
    text-align: right;
}
.single_advisor_profile .advisor_thumb .social-info a {
    font-size: 14px;
    color: #020710;
    padding: 0 5px;
}
.single_advisor_profile .advisor_thumb .social-info a:hover,
.single_advisor_profile .advisor_thumb .social-info a:focus {
    color: #3f43fd;
}
.single_advisor_profile .advisor_thumb .social-info a:last-child {
    padding-right: 0;
}
.single_advisor_profile .single_advisor_details_info {
    position: relative;
    z-index: 1;
    padding: 30px;
    text-align: right;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    border-radius: 0 0 15px 15px;
    background-color: #ffffff;
}
.single_advisor_profile .single_advisor_details_info::after {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    position: absolute;
    z-index: 1;
    width: 50px;
    height: 3px;
    background-color: #3f43fd;
    content: "";
    top: 12px;
    right: 30px;
}
.single_advisor_profile .single_advisor_details_info h6 {
    margin-bottom: 0.25rem;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .single_advisor_profile .single_advisor_details_info h6 {
        font-size: 14px;
    }
    .ct{
        height:100%;
    }
}
.single_advisor_profile .single_advisor_details_info p {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    margin-bottom: 0;
    font-size: 14px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .single_advisor_profile .single_advisor_details_info p {
        font-size: 12px;
    }
    .ct{
        height:100%;
    }
}
.single_advisor_profile:hover .advisor_thumb::after,
.single_advisor_profile:focus .advisor_thumb::after {
    background-color: #070a57;
}
.single_advisor_profile:hover .advisor_thumb .social-info a,
.single_advisor_profile:focus .advisor_thumb .social-info a {
    color: #ffffff;
}
.single_advisor_profile:hover .advisor_thumb .social-info a:hover,
.single_advisor_profile:hover .advisor_thumb .social-info a:focus,
.single_advisor_profile:focus .advisor_thumb .social-info a:hover,
.single_advisor_profile:focus .advisor_thumb .social-info a:focus {
    color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info,
.single_advisor_profile:focus .single_advisor_details_info {
    background-color: #070a57;
}
.single_advisor_profile:hover .single_advisor_details_info::after,
.single_advisor_profile:focus .single_advisor_details_info::after {
    background-color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info h6,
.single_advisor_profile:focus .single_advisor_details_info h6 {
    color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info p,
.single_advisor_profile:focus .single_advisor_details_info p {
    color: #ffffff;
}
</style>