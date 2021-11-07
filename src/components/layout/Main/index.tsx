import { Container } from '@mui/material';
import { BlogsContainer } from 'components/lib';
import { BlogListItem } from 'components/section';

export const Main = () => (
	<main>
		<Container maxWidth="xxl" disableGutters={true}>
			<BlogsContainer elevation={0} square={true}>
				<BlogListItem />
			</BlogsContainer>
		</Container>
	</main>
);
