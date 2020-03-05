# coding=utf-8

from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		# Modules
		{
			"type": "module",
			"module_name": "Getting Started",
			"label": _("Getting Started_desk"),
			"category": "Modules",
			"icon": "fa fa-star"
		},
		{
			"type": "module",
			"module_name": "Accounts",
			"label": _("Accounting_desk"),
			"category": "Modules",
			"icon": "fa fa-calculator"
		},
		{
			"type": "module",
			"module_name": "Selling",
			"label": _("Selling_desk"),
			"category": "Modules",
			"icon": "fa fa-shopping-cart"
		},
		{
			"type": "module",
			"module_name": "Buying",
			"label": _("Buying_desk"),
			"category": "Modules",
			"icon": "fa fa-shopping-bag"
		},
		{
			"type": "module",
			"module_name": "Stock",
			"label": _("Stock_desk"),
			"category": "Modules",
			"icon": "fa fa-cubes"
		},
		{
			"type": "module",
			"module_name": "Assets",
			"label": _("Assets_desk"),
			"category": "Modules",
			"icon": "octicon octicon-database"
		},
		{
			"type": "module",
			"module_name": "Projects",
			"label": _("Projects_desk"),
			"category": "Modules",
			"icon": "octicon octicon-rocket"
		},
		{
			"type": "module",
			"module_name": "CRM",
			"label": _("CRM_desk"),
			"category": "Modules",
			"icon": "octicon octicon-broadcast"
		},
		{
			"type": "module",
			"module_name": "Support",
			"label": _("Support_desk"),
			"category": "Modules",
			"icon": "fa fa-check-square-o"
		},
		{
			"type": "module",
			"module_name": "HR",
			"label": _("Human Resources_desk"),
			"category": "Modules",
			"icon": "octicon octicon-organization"
		},
		{
			"type": "module",
			"module_name": "Quality Management",
			"label": _("Quality_desk"),
			"category": "Modules",
			"icon": "fa fa-check-square-o"
		},
		# Category: "Domains"
		{
			"type": "module",
			"module_name": "Manufacturing",
			"label": _("Manufacturing_desk"),
			"category": "Domains",
			"icon": "octicon octicon-tools"
		},
		{
			"type": "module",
			"module_name": "Retail",
			"label": _("Retail_desk"),
			"category": "Domains",
			"icon": "octicon octicon-credit-card"
		},
		{
			"type": "module",
			"module_name": "Education",
			"label": _("Education_desk"),
			"category": "Domains",
			"icon": "octicon octicon-mortar-board"
		},
		{
			"type": "module",
			"module_name": "Healthcare",
			"label": _("Healthcare_desk"),
			"category": "Domains",
			"icon": "fa fa-heartbeat"
		},
		{
			"type": "module",
			"module_name": "Agriculture",
			"label": _("Agriculture_desk"),
			"category": "Domains",
			"icon": "octicon octicon-globe"
		},
		{
			"type": "module",
			"module_name": "Hotels",
			"label": _("Hotels_desk"),
			"category": "Domains",
			"icon": "fa fa-bed"
		},
		{
			"type": "module",
			"module_name": "Non Profit",
			"label": _("Non Profit_desk"),
			"category": "Domains",
			"icon": "octicon octicon-heart"
		},
		{
			"type": "module",
			"module_name": "Restaurant",
			"label": _("Restaurant_desk"),
			"category": "Domains",
			"icon": "fa fa-cutlery",
			"_doctype": "Restaurant",
			"link": "List/Restaurant"
		},
		{
			"type": "module",
			"module_name": "Help",
			"label": _("Learn_desk"),
			"category": "Administration",
			"icon": "octicon octicon-device-camera-video",
			"is_help": True
		},
		{
			"type": 'link',
			"module_name": 'Marketplace',
			"label": _('Marketplace_desk'),
			"category": "Places",
			"icon": "octicon octicon-star",
			"link": '#marketplace/home',
			'standard': 1
		},
	]
