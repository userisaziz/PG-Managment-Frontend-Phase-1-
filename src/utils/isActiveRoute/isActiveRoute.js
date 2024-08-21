const isActiveRoute = (parentRoute, childRoute) => {
	// Check if either parentRoute or childRoute is undefined
	if (!parentRoute || !childRoute) {
		return false;
	}

	// Check if the childRoute starts with the parentRoute
	if (!childRoute.startsWith(parentRoute)) {
		return false;
	}

	// Check if the number of segments in parentRoute and childRoute are the same
	const parentSegments = parentRoute.split('/').filter((segment) => segment !== '');
	const childSegments = childRoute.split('/').filter((segment) => segment !== '');

	if (parentSegments.length !== childSegments.length) {
		return false;
	}

	return true;
};

export default isActiveRoute;
