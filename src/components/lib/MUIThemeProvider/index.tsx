import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export const MUIThemeProvider: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
