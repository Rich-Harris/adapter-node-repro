export function handleError({ event, error, status, message }) {
	// status should be 413, message should be 'Payload Too Large'
	console.log({ status, message });
}
