import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const BlogCard = styled(Card)(({ theme }) => ({
	marginBottom: '3rem',
	paddingBottom: '4rem',
	position: 'relative',
	'& .MuiTypography-subtitle1': {
		color: '#888888',
		fontSize: '1.3rem',
		lineHeight: 1.5,
	},
	'& .MuiCardContent-root': {
		padding: '1.6rem 0 3rem 0',
	},
	'& .MuiCardActions-root': {
		padding: 0,
		flexDirection: 'column',
		'& .MuiButton-root': {
			width: '100%',
			height: '40px',
			borderRadius: 0,
			marginBottom: '1.5rem',
			[theme.breakpoints.up('lg')]: {
				maxWidth: '145px',
			},
		},
		'@media (min-width:620px)': {
			flexDirection: 'row',
			'& .MuiButton-contained': {
				marginRight: '1.5rem',
			},
		},
	},
	'&:after': {
		content: "''",
		height: '1px',
		width: '50px',
		position: 'absolute',
		bottom: 0,
		left: '50%',
		marginLeft: '-25px',
		background: 'rgba(51,51,51,0.2)',
	},
}));
