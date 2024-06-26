module.exports = {
    theme: {
        extend: {
            borderWidth: {
                title: '0.1rem',
            },
            boxShadow: {
                '3xl': '0 1em 5em rgba(0, 0, 0, 0.3)',
                glow: '0 0 10px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                'my-gray': 'var(--my-gray)',
            },
            fontFamily: {
                sans: ['Source Sans Pro', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            fontSize: {
                xxs: '10px',
                sm: '14px',
                base: '15px',
                lg: '20px',
                xl: '24px',
            },
            screens: {
                xxs: '374px',
                xs: '500px',
                '2sm': '825px',
                '2md': '876px',
                '4xl': { min: '1971px' },
            },
            transitionProperty: {
                height: 'height',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    'color-scheme': 'light',
                    primary: '#e0e0e0',
                    'base-content': '#222222',
                    secondary: '#c7c7c7',
                    accent: '#f28c1b',
                    'base-100': '#ffffff',
                    'base-200': '#F2F5F7',
                    'base-300': '#E5E6E6',
                    neutral: '#2B3440',
                    'neutral-focus': '#343232',
                    info: '#0000ff',
                    success: '#008000',
                    warning: '#f28c1b',
                    error: '#ff3c00',
                    '--base-100': '#ffffff',
                    '--base-200': '#F2F5F7',
                    '--base-300': '#E5E6E6',
                    '--my-accent': '#f28c1b',
                    '--my-gray': '#888888',
                    '--my-purple': '#701a75',
                    '--my-yellow': '#bea203',
                    '--my-blue': '#436e9c',
                    '--my-green': '#68b31e',
                },
                dark: {
                    'color-scheme': 'dark',
                    primary: '#3b3b3b',
                    'base-content': '#DFDFDF',
                    secondary: '#d3d3d3',
                    accent: '#f28c1b',
                    'base-100': '#313131',
                    'base-200': '#222222',
                    'base-300': '#1c1c1c',
                    neutral: '#272626',
                    'neutral-focus': '#343232',
                    info: '#0000ff',
                    success: '#008000',
                    warning: '#f28c1b',
                    error: '#ff3c00',
                    '--base-100': '#313131',
                    '--base-200': '#222222',
                    '--base-300': '#1c1c1c',
                    '--my-accent': '#f28c1b',
                    '--my-gray': '#919191',
                    '--my-purple': '#ad7fa8;',
                    '--my-yellow': '#e2c317',
                    '--my-blue': '#6c95c2',
                    '--my-green': '#8ae234',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
}
