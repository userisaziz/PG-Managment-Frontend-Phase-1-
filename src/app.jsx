import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { router } from './router';
// import { Loader } from './components';
import { useReactQueryConfig } from './hooks';
import { Loader } from './components';
import { router } from './router';
import './app.scss';
import { Toaster } from 'sonner';

const App = () => {
	// const [queryClient] = useReactQueryConfig();
	const [queryClient] = useReactQueryConfig();

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster
				position="top-right"
				richColors
				toastOptions={{
					className: 'Toaster',
				}}
			/>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>
			<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
		</QueryClientProvider>
	);
};

export default App;
