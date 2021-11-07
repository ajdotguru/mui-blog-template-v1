import { Box, Container } from '@mui/material';
import { BlogsContainer } from 'components/lib';
import { BlogListItem } from 'components/section';

export const Main = () => (
	<main>
		<Box
			height="209px"
			sx={{ backgroundColor: 'primary.main', '@media (max-width:680px)': { display: 'none' } }}
		/>
		<Container
			maxWidth="xxl"
			sx={{
				marginTop: '65px',
				'@media (max-width:680px)': { padding: 0 },
			}}
		>
			<BlogsContainer elevation={0} square={true}>
				<BlogListItem />
				<BlogListItem />
			</BlogsContainer>
		</Container>
	</main>
);
