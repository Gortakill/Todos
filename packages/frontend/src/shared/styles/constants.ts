const FONTS = {
	family: {
		primary: '"Roboto", sans-serif',
		secondary: '"Arial", sans-serif',
	},
	size: {
		small: '12px',
		medium: '16px',
		large: '20px',
		extraLarge: '24px',
	},
	weight: {
		light: 300,
		regular: 400,
		bold: 700,
	},
	lineHeight: {
		small: '1.4',
		medium: '1.6',
		large: '1.8',
	},
};

const COLORS = {
	primary: '#3498db',
	secondary: '#2ecc71',
	background: '#f5f5f5',
	text: '#333',
	error: '#e74c3c',
	success: '#27ae60',
	warning: '#f39c12',
};

const BREAKPOINTS = {
	mobile: 480,
	tablet: 770,
	desktop: 1024,
};

export const THEME = {
	fonts: FONTS,
	colors: COLORS,
	spacing: {
		small: '8px',
		medium: '16px',
		large: '24px',
	},
	borderRadius: '5px',
	breakpoints: BREAKPOINTS,
};
