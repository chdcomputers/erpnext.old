frappe.provide('frappe.ui.form');

frappe.ui.form.CustomerQuickEntryForm = frappe.ui.form.QuickEntryForm.extend({
	init: function(doctype, after_insert) {
		this.skip_redirect_on_error = true;
		this._super(doctype, after_insert);
	},

	render_dialog: function() {
		this.mandatory = this.mandatory.concat(this.get_variant_fields());
		this._super();
	},

	get_variant_fields: function() {
		var variant_fields = [{
			fieldtype: "Section Break",
			label: __("Primary Contact Details_in_erp_u_customer_quick_entry"),
			collapsible: 1
		},
		{
			label: __("Email Id_in_erp_u_customer_quick_entry"),
			fieldname: "email_id",
			fieldtype: "Data"
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("Mobile Number_in_erp_u_customer_quick_entry"),
			fieldname: "mobile_no",
			fieldtype: "Data"
		},
		{
			fieldtype: "Section Break",
			label: __("Primary Address Details_in_erp_u_customer_quick_entry"),
			collapsible: 1
		},
		{
			label: __("Address Line 1_in_erp_u_customer_quick_entry"),
			fieldname: "address_line1",
			fieldtype: "Data"
		},
		{
			label: __("Address Line 2_in_erp_u_customer_quick_entry"),
			fieldname: "address_line2",
			fieldtype: "Data"
		},
		{
			label: __("ZIP Code_in_erp_u_customer_quick_entry"),
			fieldname: "pincode",
			fieldtype: "Data"
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("City_in_erp_u_customer_quick_entry"),
			fieldname: "city",
			fieldtype: "Data"
		},
		{
			label: __("State_in_erp_u_customer_quick_entry"),
			fieldname: "state",
			fieldtype: "Data"
		},
		{
			label: __("Country_in_erp_u_customer_quick_entry"),
			fieldname: "country",
			fieldtype: "Link",
			options: "Country"
		},
		{
			label: __("Customer POS Id_in_erp_u_customer_quick_entry"),
			fieldname: "customer_pos_id",
			fieldtype: "Data",
			hidden: 1
		}];

		return variant_fields;
	},
})