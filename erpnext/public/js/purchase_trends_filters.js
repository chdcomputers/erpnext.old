// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

erpnext.get_purchase_trends_filters = function() {
	return [
		{
			"fieldname":"company",
			"label": __("Company_in_erp_pur_trends_filters"),
			"fieldtype": "Link",
			"options": "Company",
			"reqd": 1,
			"default": frappe.defaults.get_user_default("Company")
		},
		{
			"fieldname":"period",
			"label": __("Period_in_erp_pur_trends_filters"),
			"fieldtype": "Select",
			"options": [
				{ "value": "Monthly", "label": __("Monthly_in_erp_pur_trends_filters") },
				{ "value": "Quarterly", "label": __("Quarterly_in_erp_pur_trends_filters") },
				{ "value": "Half-Yearly", "label": __("Half-Yearly_in_erp_pur_trends_filters") },
				{ "value": "Yearly", "label": __("Yearly_in_erp_pur_trends_filters") }
			],
			"default": "Monthly"
		},
		{
			"fieldname":"fiscal_year",
			"label": __("Fiscal Year_in_erp_pur_trends_filters"),
			"fieldtype": "Link",
			"options":'Fiscal Year',
			"default": frappe.sys_defaults.fiscal_year
		},
		{
			"fieldname":"period_based_on",
			"label": __("Period based On"),
			"fieldtype": "Select",
			"options": [
				{ "value": "posting_date", "label": __("Posting Date") },
				{ "value": "bill_date", "label": __("Billing Date") },
			],
			"default": "posting_date"
		},
		{
			"fieldname":"based_on",
			"label": __("Based On_in_erp_pur_trends_filters"),
			"fieldtype": "Select",
			"options": [
				{ "value": "Item", "label": __("Item_in_erp_pur_trends_filters") },
				{ "value": "Item Group", "label": __("Item Group_in_erp_pur_trends_filters") },
				{ "value": "Supplier", "label": __("Supplier_in_erp_pur_trends_filters") },
				{ "value": "Supplier Group", "label": __("Supplier Group_in_erp_pur_trends_filters") },
				{ "value": "Project", "label": __("Project_in_erp_pur_trends_filters") }
			],
			"default": "Item"
		},
		{
			"fieldname":"group_by",
			"label": __("Group By_in_erp_pur_trends_filters"),
			"fieldtype": "Select",
			"options": [
				"",
				{ "value": "Item", "label": __("Item_in_erp_pur_trends_filters") },
				{ "value": "Supplier", "label": __("Supplier_in_erp_pur_trends_filters") }
			],
			"default": ""
		},
	];
}
