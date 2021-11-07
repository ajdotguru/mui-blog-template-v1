import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export const Header = () => (
	<header>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					codewithaj
				</Typography>
				<Button color="inherit">Blogs</Button>
			</Toolbar>
		</AppBar>
	</header>
);
