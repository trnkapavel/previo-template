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
