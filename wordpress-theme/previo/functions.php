<?php
/**
 * Previo theme – export z Next.js.
 *
 * @package Previo
 * @since 0.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PREVIO_THEME_VERSION', '0.1.0' );
define( 'PREVIO_THEME_DIR', get_template_directory() );
define( 'PREVIO_THEME_URI', get_template_directory_uri() );

/**
 * Registrace podpor theme.
 */
function previo_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'previo_theme_setup' );

/**
 * Registrace Gutenberg patternů z složky patterns/.
 */
function previo_register_block_patterns() {
	$pattern_dir = PREVIO_THEME_DIR . '/patterns';
	if ( ! is_dir( $pattern_dir ) ) {
		return;
	}

	$files = glob( $pattern_dir . '/*.html' );
	if ( ! $files ) {
		return;
	}

	foreach ( $files as $file ) {
		$slug = basename( $file, '.html' );
		$content = file_get_contents( $file );
		if ( $content === false ) {
			continue;
		}

		register_block_pattern(
			'previo/' . $slug,
			array(
				'title'       => ucfirst( str_replace( array( '-', '_' ), ' ', $slug ) ),
				'description' => sprintf( __( 'Pattern %s z Previa.', 'previo' ), $slug ),
				'content'     => $content,
				'categories'  => array( 'previo' ),
			)
		);
	}
}
add_action( 'init', 'previo_register_block_patterns' );

/**
 * Registrace kategorie patternů.
 */
function previo_register_pattern_category() {
	register_block_pattern_category(
		'previo',
		array(
			'label'       => __( 'Previo', 'previo' ),
			'description' => __( 'Bloky a patterny exportované z Previa (Next.js).', 'previo' ),
		)
	);
}
add_action( 'init', 'previo_register_pattern_category' );

/**
 * Načtení stylů šablony (včetně CSS vygenerovaného z Next.js buildu).
 */
function previo_enqueue_styles() {
	wp_enqueue_style(
		'previo-style',
		get_stylesheet_uri(),
		array(),
		PREVIO_THEME_VERSION
	);

	$compiled_css = PREVIO_THEME_DIR . '/assets/app.css';

	if ( file_exists( $compiled_css ) ) {
		wp_enqueue_style(
			'previo-app',
			PREVIO_THEME_URI . '/assets/app.css',
			array( 'previo-style' ),
			PREVIO_THEME_VERSION
		);
	}
}
add_action( 'wp_enqueue_scripts', 'previo_enqueue_styles' );

/**
 * Skript pro navbar: při scrollu přidá třídu pro bílé průhledné pozadí + blur.
 */
function previo_navbar_scroll_script() {
	if ( is_admin() ) {
		return;
	}
	?>
	<script>
	(function() {
		var header = document.querySelector('header[data-export-section="navbar"]');
		if (!header) return;
		function onScroll() {
			header.classList.toggle('previo-nav-scrolled', window.scrollY > 20);
		}
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
	})();
	</script>
	<?php
}
add_action( 'wp_footer', 'previo_navbar_scroll_script', 5 );
