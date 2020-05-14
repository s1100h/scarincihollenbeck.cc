<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 * 
 * @since 1.0.0
 */
?>
  <div class="container-fluid bk--gray d-print-none">
  <!-- Stop scrolling for attorney bio pages -->
  <div id="stop-scrolling"></div>  
 <footer>
      <div class="container-fluid h-100 mt-5 w-75 bk--gray">
        <div class="row border--red mb-3 align-items-center h-100">
          <div class="col-sm-6">

            <ul class="social-footer-icons h-100  justify-content-center no-dots">
              <li><a href="https://www.linkedin.com/company/scarinci-hollenbeck-llc" target="_blank"><i
                    class="fab fa-linkedin fa-2x"></i><span>LinkedIn</span></a></li>
              <li><a href="https://www.facebook.com/ScarinciHollenbeck" target="_blank">
                  <i class="fab fa-facebook-square fa-2x"></i><span>Facebook</span></a></li>
              <li><a href="https://twitter.com/s_h_law" target="_blank">
                  <i class="fab fa-twitter-square fa-2x"></i><span>Twitter</span></a></li>
              <li><a href="https://www.youtube.com/c/scarincihollenbeck1" target="_blank">
                  <i class="fab fa-youtube fa-2x"></i><span>YouTube</span></a></li>
              <li><a href="https://plus.google.com/+ScarinciHollenbeck1" target="_blank">
                  <i class="fab fa-google-plus-g fa-2x"></i><span>Google Plus</span></a></li>
            </ul>

          </div>
          <div class="col-sm-6 text-right">

            <form class="search-form h-100  justify-content-center" role="search" action="<?php echo get_home_url("/"); ?>" method="get">
              <label>
                <span class="screen-reader-text">Search for:</span>

                <input name="s" title="Search for:" class="search-field footer--search--bar--inner" type="search"
                  placeholder="Search Site …" value="">
              </label></form>
            </span>
          </div>
        </div>
        <div class="row pb-3 mb-0">
          <div class="col-sm-7">
            <span class="mr-auto"><span class="font-weight-bold">ATTORNEY ADVERTISING</span> |
              Prior results do not guarantee a similar outcome.<br />
              © 2019, Scarinci Hollenbeck, LLC, all rights reserved.</span>
          </div>
          <div class="col-sm-5 text-center">
            <span class="float-right"><a href="<?php echo get_home_url("/"); ?>/contact">Contact Us</a> |
              <a href="<?php echo get_home_url("/"); ?>/careers">Careers</a>
              | <a href="<?php echo get_home_url("/"); ?>/awards">Awards </a> |
              <a href="<?php echo get_home_url("/"); ?>/payments/?page=operating">Make Payment</a><BR>
              <a href="<?php echo get_home_url("/"); ?>/sitemap.xml">Sitemap</a>
              | <a href="<?php echo get_home_url("/"); ?>/disclaimer">Disclaimer</a> |
              <a href="<?php echo get_home_url("/"); ?>/terms-of-use">Terms of Use</a> |
              <a href="<?php echo get_home_url("/"); ?>/privacy-policy">Privacy
                Policy</a> </span>
          </div>
        </div>
      </div>
    </footer>
    </div><!-- container -->
  <?php wp_footer(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-18813670-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-18813670-1');
    </script>

</body>
</html>
