frappe.ui.form.on("Communication", {
	refresh: (frm) => {
		// setup custom Make button only if Communication is Email
		if(frm.doc.communication_medium == "Email" && frm.doc.sent_or_received == "Received") {
			frm.events.setup_custom_buttons(frm);
		}
	},

	setup_custom_buttons: (frm) => {
		let confirm_msg = "Are you sure you want to create {0} from this email";
		if(frm.doc.reference_doctype !== "Issue") {
			frm.add_custom_button(__("Issue_in_erp_communication"), () => {
				frappe.confirm(__(confirm_msg, [__("Issue_in_erp_communication")]), () => {
					frm.trigger('make_issue_from_communication');
				})
			}, "Make");
		}

		if(!in_list(["Lead", "Opportunity"], frm.doc.reference_doctype)) {
			frm.add_custom_button(__("Lead_in_erp_communication"), () => {
				frappe.confirm(__(confirm_msg, [__("Lead_in_erp_communication")]), () => {
					frm.trigger('make_lead_from_communication');
				})
			}, __('Create_in_erp_communication'));

			frm.add_custom_button(__("Opportunity_in_erp_communication"), () => {
				frappe.confirm(__(confirm_msg, [__("Opportunity_in_erp_communication")]), () => {
					frm.trigger('make_opportunity_from_communication');
				})
			}, __('Create_in_erp_communication'));
		}
	},

	make_lead_from_communication: (frm) => {
		return frappe.call({
			method: "erpnext.crm.doctype.lead.lead.make_lead_from_communication",
			args: {
				communication: frm.doc.name
			},
			freeze: true,
			callback: (r) => {
				if(r.message) {
					frm.reload_doc()
				}
			}
		})
	},

	make_issue_from_communication: (frm) => {
		return frappe.call({
			method: "erpnext.support.doctype.issue.issue.make_issue_from_communication",
			args: {
				communication: frm.doc.name
			},
			freeze: true,
			callback: (r) => {
				if(r.message) {
					frm.reload_doc()
				}
			}
		})
	},

	make_opportunity_from_communication: (frm) => {
		return frappe.call({
			method: "erpnext.crm.doctype.opportunity.opportunity.make_opportunity_from_communication",
			args: {
				communication: frm.doc.name
			},
			freeze: true,
			callback: (r) => {
				if(r.message) {
					frm.reload_doc()
				}
			}
		})
	}
});