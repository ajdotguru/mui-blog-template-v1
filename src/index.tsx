import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import { Header, Main } from 'components/layout';
import { MUIThemeProvider } from 'components/lib';

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<MUIThemeProvider>
			<Header />
			<Main />
		</MUIThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
