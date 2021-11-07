import { Box } from '@mui/material';

export const BlogTitleLetter = () => (
	<Box
		sx={{
			position: 'absolute',
			fontSize: '26rem',
			fontFamily: "'Playfair Display', serif",
			fontWeight: 600,
			left: '-7rem',
			zIndex: 1,
			color: 'rgba(0,0,0,.07)',
			lineHeight: 1.2,
			top: '50%',
			transform: 'translate(0,-50%)',
			userSelect: 'none',
			pointerEvents: 'none',
			textTransform: 'uppercase',
			display: 'none',
			'@media (min-width:801px)': {
				display: 'block',
			},
		}}
	>
		A
	</Box>
);
