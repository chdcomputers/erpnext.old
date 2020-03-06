// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

erpnext.get_sales_trends_filters = function() {
	return[
		{
			"fieldname":"period",
			"label": __("Period_in_erp_sales_tr_filters"),
			"fieldtype": "Select",
			"options": [
				{ "value": "Monthly", "label": __("Monthly_in_erp_sales_tr_filters") },
				{ "value": "Quarterly", "label": __("Quarterly_in_erp_sales_tr_filters") },
				{ "value": "Half-Yearly", "label": __("Half-Yearly_in_erp_sales_tr_filters") },
				{ "value": "Yearly", "label": __("Yearly_in_erp_sales_tr_filters") }
			],
			"default": "Monthly"
		},
		{
			"fieldname":"based_on",
			"label": __("Based On_in_erp_sales_tr_filters"),
			"fieldtype": "Select",
			"options": [
				{ "value": "Item", "label": __("Item_in_erp_sales_tr_filters") },
				{ "value": "Item Group", "label": __("Item Group_in_erp_sales_tr_filters") },
				{ "value": "Customer", "label": __("Customer_in_erp_sales_tr_filters") },
				{ "value": "Customer Group", "label": __("Customer Group_in_erp_sales_tr_filters") },
				{ "value": "Territory", "label": __("Territory_in_erp_sales_tr_filters") },
				{ "value": "Project", "label": __("Project_in_erp_sales_tr_filters") }
			],
			"default": "Item"
		},
		{
			"fieldname":"group_by",
			"label": __("Group By_in_erp_sales_tr_filters"),
			"fieldtype": "Select",
			"options": [
				"",
				{ "value": "Item", "label": __("Item_in_erp_sales_tr_filters") },
				{ "value": "Customer", "label": __("Customer_in_erp_sales_tr_filters") }
			],
			"default": ""
		},
		{
			"fieldname":"fiscal_year",
			"label": __("Fiscal Year_in_erp_sales_tr_filters"),
			"fieldtype": "Link",
			"options":'Fiscal Year',
			"default": frappe.sys_defaults.fiscal_year
		},
		{
			"fieldname":"company",
			"label": __("Company_in_erp_sales_tr_filters"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company")
		},
	];
}
