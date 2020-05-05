(function ($) {

	$(document).ready(
		function () {
			$(document).on('change', '.es_visible', function () {
				if ($('.es_visible:checked').length >= 1) {
					$('.es_required').prop('disabled', false);
					$('.es_name_label').removeAttr('disabled');
				} else {
					$('.es_required').prop('disabled', true);
					$('.es_name_label').attr('disabled', 'disabled');
				}
			});

			$('.es_visible').change();

			$('#tabs-signup_confirmation, #tabs-email_sending, #tabs-security_settings, #tabs-user_roles').hide();

			$('#tabs-general').show();

			$('a[href^="#"]#menu-content-change').addClass('text-white').parent('li').eq(0).addClass('bg-indigo-600 ').siblings().find('a').addClass('text-gray-700').removeClass('text-white').parent('li').removeClass('bg-indigo-600');

			$('a[href^="#"]#menu-content-change').on('click', function (event) {
				$(this).addClass('text-white').removeClass('text-gray-700').parent('li').addClass('bg-indigo-600').siblings().find('a').addClass('text-gray-700').removeClass('text-white').parent('li').removeClass('bg-indigo-600');
				$('.setting-content').hide();
				var target = $(this).attr('href');
				$('.setting-content' + target).show();
				return false;
			});


			/*$('#es-settings-tabs').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');

			var defaultHeight = $('div#es-settings-tabs div#menu-tab-content div#tabs-general').height() + 30;
			$('div#es-settings-tabs div#menu-tab-listing ul').height(defaultHeight);

			// Set Tab Height
			$('.ui-tabs-anchor').click(function() {
				var tab = $(this).attr('href');
				$('#email_tabs_form').attr('action', tab);
				var tabHight = $('div#es-settings-tabs div#menu-tab-content div' + tab).height() + 30;
				$('div#es-settings-tabs div#menu-tab-listing ul').height(tabHight);
			});
			*/

			if (jQuery('.statusesselect').length) {
				var statusselect = jQuery('.statusesselect')[0].outerHTML;
			}

			if (jQuery('.groupsselect').length) {
				var groupselect = jQuery('.groupsselect')[0].outerHTML;
			}

			jQuery(".es-audience-view .bulkactions #bulk-action-selector-top").after(statusselect);
			jQuery(".es-audience-view .bulkactions #bulk-action-selector-top").after(groupselect);

			//jQuery(".es-audience-view .bulkactions #bulk-action-selector-bottom").after(statusselect);
			// jQuery(".es-audience-view .bulkactions #bulk-action-selector-bottom").after(groupselect);

			jQuery("#bulk-action-selector-top").change(function () {
				if (jQuery('option:selected', this).attr('value') == 'bulk_list_update' || jQuery('option:selected', this).attr('value') == 'bulk_list_add') {
					jQuery('.groupsselect').eq(1).show();
					jQuery('.statusesselect').eq(1).hide();
				} else if (jQuery('option:selected', this).attr('value') == 'bulk_status_update') {
					jQuery('.statusesselect').eq(1).show();
					jQuery('.groupsselect').eq(1).hide();
				} else {
					jQuery('.statusesselect').hide();
					jQuery('.groupsselect').hide();
				}
			});

			jQuery('.es-audience-view .tablenav.bottom #bulk-action-selector-bottom').hide();
			jQuery('.es-audience-view .tablenav.bottom #doaction2').hide();
			jQuery(document).on('change', "#base_template_id", function () {
				var img = jQuery('option:selected', this).data('img')
				jQuery('.es-templ-img').html(img);
			});

			//send test emails
			$(document).on('click', '#es-send-test', function (e) {
				e.preventDefault();
				var test_email = $('#es-test-email').val();
				var params = {};
				params.es_test_email = test_email;
				params.action = 'es_send_test_email';
				if (test_email) {
					$('#es-send-test').next('#spinner-image').show();
					jQuery.ajax({
						method: 'POST',
						url: ajaxurl,
						data: params,
						dataType: 'json',
						success: function (response) {
							if (response && typeof response.status !== 'undefined' && response.status == "SUCCESS") {
								$('#es-send-test').parent().find('.helper').html('<span style="color:green">' + response.message + '</span>');
							} else {
								$('#es-send-test').parent().find('.helper').html('<span style="color:#e66060">' + response.message + '</span>');
							}

							$('#es-send-test').next('#spinner-image').hide();
						},

						error: function (err) {
							$('#es-send-test').next('#spinner-image').hide();
						}
					});
				} else {
					confirm('Add test email ');
				}

			});

			//klawoo form submit
			jQuery("form[name=klawoo_subscribe]").submit(function (e) {
				e.preventDefault();
				var form = e.target;
				jQuery(form).find('#klawoo_response').html('');
				jQuery(form).find('#klawoo_response').show();

				params = jQuery(form).serializeArray();
				params.push({
					name: 'action',
					value: 'es_klawoo_subscribe'
				});

				jQuery.ajax({
					method: 'POST',
					type: 'text',
					url: ajaxurl,
					async: false,
					data: params,
					success: function (response) {
						if (response != '') {
							jQuery('#klawoo_response').html(response);
							if (jQuery(form).hasClass('es-onboarding')) {
								setTimeout(function () {
									location.reload();
								}, 2000);
							} else {
								jQuery('.es-emm-optin #name').val('');
								jQuery('.es-emm-optin #email').val('');
								jQuery('.es-emm-optin #es-gdpr-agree').attr('checked', false);
								setTimeout(function () {
									jQuery(form).find('#klawoo_response').hide('slow');
								}, 2000);
							}


						} else {
							jQuery('#klawoo_response').html('error!');
						}
					}
				});

			});


			// Select List ID for Export
			var _href = $('#ig_es_export_link_select_list').attr("href");
			$('#ig_es_export_list_dropdown').change(function () {
				var selected_list_id = $(this).val();

				$('#ig_es_export_link_select_list').attr("href", _href + '&list_id=' + selected_list_id);

				// Update total count in lists
				var params = {
					action: 'count_contacts_by_list',
					list_id: selected_list_id
				};

				$.ajax({
					method: 'POST',
					url: ajaxurl,
					async: false,
					data: params,
					success: function (response) {
						if (response != '') {
							response = JSON.parse(response);
							$('#ig_es_export_select_list .ig_es_total_contacts').text(response.total);
						}
					}
				});

			});

			// Broadcast Setttings
			// Get count by list
			$('#ig_es_campaign_submit_button').attr("disabled", true);
			$('#ig_es_broadcast_list_ids').change(function () {
				var selected_list_id = $(this).val();

				// Update total count in lists
				var params = {
					action: 'count_contacts_by_list',
					list_id: selected_list_id,
					status: 'subscribed'
				};

				$.ajax({
					method: 'POST',
					url: ajaxurl,
					async: true,
					data: params,
					success: function (response) {
						if (response !== '') {
							response = JSON.parse(response);
							if (response.hasOwnProperty('total')) {
								var total = response.total;
								var total_contacts_text = "<b>Total Contacts: " + total + "</b>";
								$('#ig_es_total_contacts').html(total_contacts_text);
								if (total == 0) {
									$('#ig_es_campaign_submit_button').attr("disabled", true);
								} else {
									$('#ig_es_campaign_submit_button').attr("disabled", false);
								}
							}
						}
					}
				});
			});

			jQuery(document).on('change', '#base_template_id', function () {
				var template_id = $(this).val();
				// Update total count in lists
				var params = {
					action: 'get_template_content',
					template_id: template_id,
				};
				$.ajax({
					method: 'POST',
					url: ajaxurl,
					async: false,
					data: params,
					success: function (response) {
						if (response !== '') {
							response = JSON.parse(response);
							if (response.hasOwnProperty('subject')) {
								jQuery('.wp-editor-boradcast').val(response.body);
								if ('undefined' !== typeof tinyMCE) {
									var activeEditor = tinyMCE.get('edit-es-boradcast-body');
									if (activeEditor !== null) { // Make sure we're not calling setContent on null
										response.body = response.body.replace(/\n/g, "<br />");
										activeEditor.setContent(response.body); // Update tinyMCE's content
									}
								}

								if (response.inline_css && jQuery('#inline_css').length) {
									jQuery('#inline_css').val(response.inline_css);
								}
								if (response.es_utm_campaign && jQuery('#es_utm_campaign').length) {
									jQuery('#es_utm_campaign').val(response.es_utm_campaign);
								}
							}
						}
					}
				});
			});

			//post notification category select
			jQuery(document).on('change', '.es-note-category-parent', function () {
				var val = jQuery('.es-note-category-parent:checked').val();
				if ('{a}All{a}' === val) {
					jQuery('input[name="es_note_cat[]"]').not('.es_custom_post_type').closest('tr').hide();
				} else {
					jQuery('input[name="es_note_cat[]"]').not('.es_custom_post_type').closest('tr').show();
				}

			});

			jQuery('.es-note-category-parent').trigger('change');


			//es mailer settings
			jQuery(document).on('change', '.es_mailer', function (e) {
				var val = jQuery('.es_mailer:checked').val();
				jQuery('[name*="ig_es_mailer_settings"], .es_sub_headline').not('.es_mailer').hide();
				jQuery(document).find('.' + val).show();
			});
			jQuery('.es_mailer').trigger('change');

			//preview broadcast
			// ig_es_preview_broadcast
			jQuery(document).on('click', '#ig_es_preview_broadcast', function (e) {
				// Trigger save event for content of wp_editor instances before processing it.
				window.tinyMCE.triggerSave();
				if (jQuery('.wp-editor-boradcast').val() !== '') {
					jQuery('.es-form').find('form').attr('target', '_blank');
					jQuery('.es-form').find('form').find('#es_broadcast_preview').val('preview');
					jQuery(this).unbind('submit').submit();
				}
			});
			jQuery(document).on('click', '#ig_es_campaign_submit_button', function (e) {
				if (jQuery('.wp-editor-boradcast').val() !== '') {
					jQuery('.es-form').find('form').attr('target', '');
					jQuery('.es-form').find('form').find('#es_broadcast_preview').val('');
				}
			});
			//add target new to go pro
			jQuery('a[href="admin.php?page=es_pricing"]').attr('target', '_blank').attr('href', 'https://www.icegram.com/email-subscribers-pricing/');

			$('.ig-es-campaign-status-toggle-label').click(function (e) {
				e.preventDefault();
				let checkbox_elem = $(this).find('.es-check-toggle');
				let campaign_id = $(checkbox_elem).val();
				let new_campaign_status = $(checkbox_elem).prop('checked') ? 0 : 1;
				let data = {
					action: 'ig_es_toggle_campaign_status',
					campaign_id: campaign_id,
					new_campaign_status: new_campaign_status,
					security: ig_es_js_data.security
				}
				jQuery.ajax({
					method: 'POST',
					url: ajaxurl,
					data: data,
					dataType: 'json',
					success: function (response) {
						if (response.success) {
							$(checkbox_elem).prop('checked', new_campaign_status);
						} else {
							alert(ig_es_js_data.ajax_error_message);
						}
					},
					error: function (err) {
						alert(ig_es_js_data.ajax_error_message);
					}
				});
			});

			// Contact background import/export code.
			if( 'undefined' !== typeof background_process_data ) {

				jQuery('body').on('click', '.download-csv-wrapper a', function(){
					jQuery('.download-csv-wrapper').hide('slow');
				});

				if( '' !== background_process_data.notice_html ) {
					let notice_html = jQuery.parseHTML(background_process_data.notice_html);
					jQuery(notice_html).insertAfter( '.wp-heading-inline' );
				}

				if( 'running' === background_process_data.status ) {
					background_progress_interval_callback = setInterval(function(){
						ig_es_check_contact_background_progress();
					},5000);
				}
				jQuery('body').on('click', '#ig-es-cancel-contact-background-process', function(e){
					e.preventDefault();
					ig_es_cancel_contact_background_process();
				});
			}
		});

})(jQuery);

function checkDelete() {
	return confirm('Are you sure?');
}

// Clear interval callback for background progress.
var background_progress_interval_callback = null;

// Background request object.
var background_progress_request = null;

function ig_es_start_contact_background_progress_percentage( progress_data, target_dom ) {
	let target_element_wrapper = target_dom.find('#ig_es_contact_background_prcess_percentage_wrapper');
	let target_element         = target_dom.find('#ig_es_background_process_percentage');
	let percent_completion     = progress_data.percent_completion;

	target_element_wrapper.show();
	target_element.text(percent_completion + '%');
}

function ig_es_disable_import_form() {
	if( 1 === jQuery('#ig_es_contact_background_progress').length ) {
		jQuery('form#form_addemail').find('[name="submit"]').attr('disabled','disabled');
	}
}

function ig_es_enable_import_form() {
	if( 1 === jQuery('#ig_es_contact_background_results').length ) {
		jQuery('form#form_addemail').find('[name="submit"]').removeAttr('disabled');
	}
}

function ig_es_check_contact_background_progress() {
	ig_es_disable_import_form();
	background_progress_request = jQuery.ajax({
		url: ajaxurl,
		method: 'post',
		dataType: 'json',
		data: {
			action: 'ig_es_contact_background_progress',
			security: ig_es_js_data.security
		},
		success: function( response ) {

			let percent_completion = response.percent_completion;

			let progress_data = {
				percent_completion: response.percent_completion
			}

			let target_dom = jQuery('#ig_es_contact_background_progress');

			if ( response.percent_completion !== undefined && response.percent_completion !== '' ) {
				if( 100 == response.percent_completion) {
					clearInterval(background_progress_interval_callback);
					ig_es_get_background_process_results();
				}
				target_dom.show();
				ig_es_start_contact_background_progress_percentage( progress_data, target_dom );
			}
		}
	});
}


function ig_es_get_background_process_results() {
	jQuery.ajax({
		url: ajaxurl,
		method: 'post',
		dataType: 'json',
		data: {
			action: 'ig_es_get_background_process_results',
			security: ig_es_js_data.security
		},
		success: function( response ) {
			if( 'undefined' !== typeof response.response_html && '' !== response.response_html ) {
				
				// Check if results already shown then return.
				if( 1 === jQuery('#ig_es_contact_background_results').length ) {
					return;
				}

				let result_html = jQuery.parseHTML( response.response_html );
				// If there is background process progress message being shown then replace it with background process result html else show background process result after page heading.
				if( 1 === jQuery('#ig_es_contact_background_progress').length ) {
					jQuery('#ig_es_contact_background_progress').replaceWith( result_html );
				} else {
					jQuery(result_html).insertAfter( '.wp-heading-inline' );
				}
				ig_es_enable_import_form();
			}
		}
	});
}

function ig_es_cancel_contact_background_process() {
	clearInterval(background_progress_interval_callback);
	jQuery.ajax({
		url: ajaxurl,
		method: 'post',
		dataType: 'json',
		beforeSend: function() {
			// Cancel previous request for checking background progress.
			if( null !== background_progress_request) {
				background_progress_request.abort();
			}
		},
		data: {
			action: 'ig_es_cancel_contact_background_process',
			security: ig_es_js_data.security
		},
		success: function( response ) {
			if( 'undefined' !== typeof response.response_html && '' !== response.response_html ) {
				let response_html = jQuery.parseHTML( response.response_html );
				jQuery('#ig_es_contact_background_progress').replaceWith( response_html );
				ig_es_enable_import_form();
			}
		}
	});
}
