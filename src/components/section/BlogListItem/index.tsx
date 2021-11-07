import { Button, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { BlogCard, BlogTitleLetter } from 'components/lib';

export const BlogListItem = () => (
	<BlogCard square={true} elevation={0}>
		<CardHeader
			title={
				<>
					<Typography variant="h2" gutterBottom={true}>
						A beautiful blog with no images required
					</Typography>
					<BlogTitleLetter />
				</>
			}
			subheader={
				<Typography variant="subtitle1">By Test User / In Category / 2 Min Read</Typography>
			}
		/>

		<CardContent>
			<Typography>
				Typology is a WordPress theme created for bloggers that just want to write, without the
				hassle of looking for the right featured image. It has a unique design based on beautiful
				typography and a modern, clean layout. Simply write your content and publish – Typology will
				handle the rest. Efficiently negotiate enabled partnerships whereas team building channels.
				Competently visualize cross...
			</Typography>
		</CardContent>
		<CardActions disableSpacing={true}>
			<Button variant="contained">Read on</Button>
			<Button variant="outlined">Read later</Button>
		</CardActions>
	</BlogCard>
);
