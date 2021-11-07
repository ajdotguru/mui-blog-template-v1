import { Container } from '@mui/material';
import { BlogsContainer } from 'components/lib';

export const Main = () => (
	<main>
		<Container maxWidth="xxl" disableGutters={true}>
			<BlogsContainer elevation={0} square={true}>
				main
			</BlogsContainer>
		</Container>
	</main>
);
