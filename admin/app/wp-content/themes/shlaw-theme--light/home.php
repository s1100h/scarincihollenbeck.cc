<?php get_header(); ?>
  <div class="container">
    <div class="row my-5">
      <div class="col-sm-12">
        <div class="card shadow w-75 mx-auto my-5">
          <div class="card-body text-center">
            <h4><strong>Scarinci Hollenbeck Admin Site</strong></h4>
            <hr />
            <p>Scarinci Hollenbeck Admin Site is a CMS (Content Management System) that stores all the data found on <a href="https://scarincihollenbeck.com" target="_blank">scarincihollenbeck.com</a>.</p>
            <p>You can add new or edit attorney profiles, administration profiles, careers listings, practice pages, office pages, and blog posts by visting the administration dashboard.</p> 
            <a class="btn btn-info my-3" href="<?php echo admin_url(); ?>" role="button">Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>