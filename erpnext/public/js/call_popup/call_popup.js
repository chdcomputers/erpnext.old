class CallPopup {
	constructor(call_log) {
		this.caller_number = call_log.from;
		this.call_log = call_log;
		this.setup_listener();
		this.make();
	}

	make() {
		this.dialog = new frappe.ui.Dialog({
			'static': true,
			'minimizable': true,
			'fields': [{
				'fieldname': 'name',
				'label': 'Name',
				'default': this.get_caller_name() || __('Unknown Caller_in_erp_call_popup'),
				'fieldtype': 'Data',
				'read_only': 1
			}, {
				'fieldtype': 'Button',
				'label': __('Open Contact_in_erp_call_popup'),
				'click': () => frappe.set_route('Form', 'Contact', this.call_log.contact),
				'depends_on': () => this.call_log.contact
			}, {
				'fieldtype': 'Button',
				'label': __('Open Lead_in_erp_call_popup'),
				'click': () => frappe.set_route('Form', 'Lead', this.call_log.lead),
				'depends_on': () => this.call_log.lead
			}, {
				'fieldtype': 'Button',
				'label': __('Create New Contact_in_erp_call_popup'),
				'click': () => frappe.new_doc('Contact', { 'mobile_no': this.caller_number }),
				'depends_on': () => !this.get_caller_name()
			}, {
				'fieldtype': 'Button',
				'label': __('Create New Lead_in_erp_call_popup'),
				'click': () => frappe.new_doc('Lead', { 'mobile_no': this.caller_number }),
				'depends_on': () => !this.get_caller_name()
			}, {
				'fieldtype': 'Column Break',
			}, {
				'fieldname': 'number',
				'label': 'Phone Number',
				'fieldtype': 'Data',
				'default': this.caller_number,
				'read_only': 1
			}, {
				'fielname': 'last_interaction',
				'fieldtype': 'Section Break',
				'label': __('Activity_in_erp_call_popup'),
				'depends_on': () => this.get_caller_name()
			}, {
				'fieldtype': 'Small Text',
				'label': __('Last Issue_in_erp_call_popup'),
				'fieldname': 'last_issue',
				'read_only': true,
				'depends_on': () => this.call_log.contact,
				'default': `<i class="text-muted">${__('No issue has been raised by the caller._in_erp_call_popup')}<i>`
			}, {
				'fieldtype': 'Small Text',
				'label': __('Last Communication_in_erp_call_popup'),
				'fieldname': 'last_communication',
				'read_only': true,
				'default': `<i class="text-muted">${__('No communication found._in_erp_call_popup')}<i>`
			}, {
				'fieldtype': 'Section Break',
			}, {
				'fieldtype': 'Small Text',
				'label': __('Call Summary_in_erp_call_popup'),
				'fieldname': 'call_summary',
			}, {
				'fieldtype': 'Button',
				'label': __('Save_in_erp_call_popup'),
				'click': () => {
					const call_summary = this.dialog.get_value('call_summary');
					if (!call_summary) return;
					frappe.xcall('erpnext.communication.doctype.call_log.call_log.add_call_summary', {
						'call_log': this.call_log.name,
						'summary': call_summary,
					}).then(() => {
						this.close_modal();
						frappe.show_alert({
							message: `
								${__('Call Summary Saved_in_erp_call_popup')}
								<br>
								<a
									class="text-small text-muted"
									href="#Form/Call Log/${this.call_log.name}">
									${__('View call log_in_erp_call_popup')}
								</a>
							`,
							indicator: 'green'
						});
					});
				}
			}],
		});
		this.set_call_status();
		this.dialog.get_close_btn().show();
		this.make_last_interaction_section();
		this.dialog.$body.addClass('call-popup');
		this.dialog.set_secondary_action(this.close_modal.bind(this));
		frappe.utils.play_sound('incoming-call');
		this.dialog.show();
	}

	set_indicator(color, blink=false) {
		let classes = `indicator ${color} ${blink ? 'blink': ''}`;
		this.dialog.header.find('.indicator').attr('class', classes);
	}

	set_call_status(call_status) {
		let title = '';
		call_status = call_status || this.call_log.status;
		if (['Ringing'].includes(call_status) || !call_status) {
			title = __('Incoming call from {0}_in_erp_call_popup', [this.get_caller_name() || this.caller_number]);
			this.set_indicator('blue', true);
		} else if (call_status === 'In Progress') {
			title = __('Call Connected_in_erp_call_popup');
			this.set_indicator('yellow');
		} else if (call_status === 'Missed') {
			this.set_indicator('red');
			title = __('Call Missed_in_erp_call_popup');
		} else if (['Completed', 'Disconnected'].includes(call_status)) {
			this.set_indicator('red');
			title = __('Call Disconnected_in_erp_call_popup');
		} else {
			this.set_indicator('blue');
			title = call_status;
		}
		this.dialog.set_title(title);
	}

	update_call_log(call_log) {
		this.call_log = call_log;
		this.set_call_status();
	}

	close_modal() {
		this.dialog.hide();
		delete erpnext.call_popup;
	}

	call_disconnected(call_log) {
		frappe.utils.play_sound('call-disconnect');
		this.update_call_log(call_log);
		setTimeout(() => {
			if (!this.dialog.get_value('call_summary')) {
				this.close_modal();
			}
		}, 30000);
	}

	make_last_interaction_section() {
		frappe.xcall('erpnext.crm.doctype.utils.get_last_interaction', {
			'contact': this.call_log.contact,
			'lead': this.call_log.lead
		}).then(data => {
			const comm_field = this.dialog.get_field('last_communication');
			if (data.last_communication) {
				const comm = data.last_communication;
				comm_field.set_value(comm.content);
			}

			if (data.last_issue) {
				const issue = data.last_issue;
				const issue_field = this.dialog.get_field("last_issue");
				issue_field.set_value(issue.subject);
				issue_field.$wrapper.append(`
					<a class="text-medium" href="#List/Issue?customer=${issue.customer}">
						${__('View all issues from {0}_in_erp_call_popup', [issue.customer])}
					</a>
				`);
			}
		});
	}

	get_caller_name() {
		let log = this.call_log;
		return log.contact_name || log.lead_name;
	}

	setup_listener() {
		frappe.realtime.on(`call_${this.call_log.id}_disconnected`, call_log => {
			this.call_disconnected(call_log);
			// Remove call disconnect listener after the call is disconnected
			frappe.realtime.off(`call_${this.call_log.id}_disconnected`);
		});
	}
}

$(document).on('app_ready', function () {
	frappe.realtime.on('show_call_popup', call_log => {
		if (!erpnext.call_popup) {
			erpnext.call_popup = new CallPopup(call_log);
		} else {
			erpnext.call_popup.update_call_log(call_log);
			erpnext.call_popup.dialog.show();
		}
	});
});
