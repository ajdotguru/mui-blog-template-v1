import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

export const Header = () => (
	<header>
		<AppBar position="fixed">
			<Container maxWidth="xxl" disableGutters={true}>
				<Toolbar>
					<Typography variant="h4" sx={{ flexGrow: 1 }}>
						codewithaj
					</Typography>
					<Button color="inherit">Blogs</Button>
				</Toolbar>
			</Container>
		</AppBar>
	</header>
);
