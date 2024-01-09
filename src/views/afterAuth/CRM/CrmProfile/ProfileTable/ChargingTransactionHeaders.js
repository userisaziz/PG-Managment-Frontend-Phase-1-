export const chargingTransactionHeader = [
	{
		headerName: 'Transaction ID',
		field: 'id',
		width: 350,
		sortable: true,
	},
	{
		headerName: 'Date and Time',
		field: 'chargingSession.createdAt',
		sortable: true,
		width: 240,
	},

	{
		headerName: 'Charging Station',
		field: 'chargingSession.chargingStation.station_name',
	},
	{
		headerName: 'Charge Point ID',
		field: 'chargingSession.chargingPoint.charging_point_id',
	},
	{
		headerName: 'Connector ID',
		field: 'chargingSession.connector_id',
	},
	{
		headerName: 'Units consumed (kWh)',
		field: 'chargingSession.units_consumed',
		width: 240,
		sortable: true,
	},
	{
		headerName: 'Duration (HH:MM)',
		field: 'chargingSession.charge_duration',
		sortable: true,
	},
	{
		headerName: 'Total Amount',
		field: 'amount',
		sortable: true,
	},
	{
		headerName: 'CP Stop',
		field: 'chargingSession.charging_end',
		sortable: true,
	},
	{
		headerName: 'Closed by',
		field: 'chargingSession.stopped_by_name',
		sortable: true,
	},
	{
		headerName: 'Actions',
		field: 'Actions',
	},
];
