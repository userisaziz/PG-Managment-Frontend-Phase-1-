export const AccountTransactiohHeaders = [
	{
		headerName: 'Date and Time',
		column: 'createdAt',
		field: 'createdAt',
		sortable: true,
		width: 240,
	},

	{
		headerName: 'Total Amount',
		column: 'amount',
		sortable: true,
		field: 'amount',
	},
	{
		headerName: 'Invoice Type',
		column: 'invoice_type',
		field: 'invoice_type',
		sortable: true,
	},
	{
		headerName: 'Invoice ID',
		wrapText: true,
		cellClass: ' overflow-cell',
		width: '350rem',
		column: 'invoice_id',
		sortable: true,
		field: 'invoice_id',
	},
	{
		headerName: 'Entry Type',
		column: 'entry_type',
		sortable: true,
		field: 'entry_type',
	},
	{
		headerName: 'Status',
		column: 'txn_status',
		sortable: true,
		field: 'txn_status',
	},
	{
		headerName: 'Payment Mode',
		column: 'mode',
		sortable: true,
		field: 'mode',
	},
	{
		headerName: 'Merchant ID',
		column: 'merchant_id',
		sortable: true,
		field: 'merchant_id',
		width: '350rem',
	},
	{
		headerName: 'Order ID',
		column: 'order_id',
		sortable: true,
		field: 'order_id',
	},
	{
		headerName: 'External Payment Reference',
		column: 'external_payment_id',
		sortable: true,
		field: 'external_payment_id',
		width: '350rem',
	},
	{
		headerName: 'Actions ',
		column: 'Actions',
		field: 'Actions',
	},
];
