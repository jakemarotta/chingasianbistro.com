<template>
  <footer>
    <b-container>
      <b-row>
        <b-col sm="6">
          <h5 class="pb-1 border-bottom-main one-line">
            Located in Franklin, TN
          </h5>
          <p>
            Formerly the Great Wall of China Restaurant, Ching Asian Bistro
            offers a variety of excellent Asian Chinese foods in a friendly,
            family-oriented atmosphere. You can always count on us for a
            great menu selection, personalized services, and competitive
            prices. Our friendly staff works one-on-one with you to make
            each visit a pleasant one.
          </p>
        </b-col>
        <b-col>
          <b-container>
            <b-row>
              <b-col>
                <h5 class="pb-1 border-bottom-main one-line">Social Media</h5>
                <div class="flex-wrap justify-content-center">
                  <a class="social-icon" href="https://www.facebook.com/Ching-Asian-Bistro-150821338404204/" target="_blank">
                    <BIconFacebook />
                  </a>
                </div>
              </b-col>
              <b-col>
                <h5 class="pb-1 border-bottom-main one-line">Navigate</h5>
                <b-nav vertical class="footer-nav align-items-start">
                  <b-nav-item to="/about">
                    About
                  </b-nav-item>
                  <b-nav-item to="/menu">
                    Menu
                  </b-nav-item>
                  <b-nav-item to="/location">
                    Location
                  </b-nav-item>
                  <b-nav-item to="/contact" class="one-line">
                    Contact Us
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
          </b-container>
          
          
        </b-col>
      </b-row>
      <b-row class="footer-info">
        <b-col md="3">
          <span class="font-weight-bold one-line">Ching Asian Bistro</span>
        </b-col>

        <b-col md="3">
          <span class="one-line">(615) 595-9780</span>
        </b-col>
        <b-col md="3" class="one-line">
          <span>188 Front St. Suite 104</span>
        </b-col>
        <b-col md="3" class="one-line">
          <span>Franklin, TN 37064</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span>© 2019. All rights reserved.</span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BIcon, BIconFacebook } from "bootstrap-vue";

export default {
  name: "Footer",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BIcon,
    BIconFacebook,
  },
}
</script>

<style scoped>
.one-line {
  white-space: nowrap;
}
footer .container .row {
  max-width: 800px;
  margin: 0 auto;
}
footer .container .row.footer-info {
  border-top: 1px solid #aca286;
  border-bottom: 1px solid #aca286;
  margin-top: 1em;
}
footer .footer-info .separator {
  border-right: 1px solid #aca286;
  width: 0;
}
footer .footer-nav .nav-link {
  padding: 0;
  padding-bottom: 4px;
}
.social-icon {
  font-size: 32px;
}
@media only screen and (max-width: 768px) {
  footer h5 {
    font-size: 1em;
  }
  footer p, footer span {
    font-size: 0.75em;
  }
  footer .container .row.footer-info {
    margin: 0 10%;
  }
  footer .container .row.footer-info .separator {
    display: none;
  }
  
}
</style>
