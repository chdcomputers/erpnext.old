// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt
frappe.provide("frappe.desk");

frappe.ui.form.on("Event", {
	refresh: function(frm) {
		frm.set_query('reference_doctype', "event_participants", function() {
			return {
				"filters": {
					"name": ["in", ["Contact", "Lead", "Customer", "Supplier", "Employee", "Sales Partner"]]
				}
			};
		});

		frm.add_custom_button(__('Add Leads_in_erp_event'), function() {
			new frappe.desk.eventParticipants(frm, "Lead");
		}, __("Add Participants_in_erp_event"));

		frm.add_custom_button(__('Add Customers_in_erp_event'), function() {
			new frappe.desk.eventParticipants(frm, "Customer");
		}, __("Add Participants_in_erp_event"));

		frm.add_custom_button(__('Add Suppliers_in_erp_event'), function() {
			new frappe.desk.eventParticipants(frm, "Supplier");
		}, __("Add Participants_in_erp_event"));

		frm.add_custom_button(__('Add Employees_in_erp_event'), function() {
			new frappe.desk.eventParticipants(frm, "Employee");
		}, __("Add Participants"));

		frm.add_custom_button(__('Add Sales Partners'), function() {
			new frappe.desk.eventParticipants(frm, "Sales Partners");
		}, __("Add Participants_in_erp_event"));
	}
});
