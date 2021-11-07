import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const BlogsContainer = styled(Paper)(({ theme }) => ({
	padding: '2.8rem 8% 4rem',
	[theme.breakpoints.up('sm')]: {
		padding: '7rem 10%',
	},
	[theme.breakpoints.up('md')]: {
		padding: '10rem 14% 11rem',
	},
}));
