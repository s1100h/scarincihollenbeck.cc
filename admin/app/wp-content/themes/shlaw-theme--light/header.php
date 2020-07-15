<?php
/**
 * The header for SH-Law Theme 2019
 *
 * This is the template that displays all of the <head> section and everything up until <body>
 *
 * @since 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="profile" href="https://gmpg.org/xfn/11" />
  <title><?php wp_title(''); ?></title>
  <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <?php endif; ?>
  <style type="text/css" media="print">
    @page {
      size: auto;   /* auto is the current printer page size */
      margin: 10mm;
    }
    .navbar, #just-in-root, #sticky-inner-wrapper, footer, .hide-print  {
      display: none;
    }
</style>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div class="navigation-wrap bg-light start-header start-style d-print-none">
		<div class="container">
			<div class="row border-bottom pb-2">
				<div class="col-12 mt-3">
					<nav class="navbar navbar-expand-md navbar-light">
					
            <a class="navbar-brand mb-3" href="<?php echo get_home_url("/");?>">
              <img src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-logo-2020-compressor.png" alt="Scarinci Hollenbeck Regional Business law firm">
            </a>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
            </button>
            
            <?php wp_nav_menu(array(
              'theme_location' => 'main-menu',
              'depth'             => 2,
              'container'         => 'div',
              'container_class'   => 'collapse navbar-collapse',
              'container_id'      => 'navbarSupportedContent',
              'menu_class'        => 'navbar-nav ml-auto py-4 py-md-0',
              'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
              'walker'            => new WP_Bootstrap_Navwalker(),
            )); ?>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>



