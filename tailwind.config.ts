/** @type {import('tailwindcss').Config} */
const scale = (name: string) => {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return steps.reduce<Record<string, string>>((acc, step) => {
    acc[step] = `oklch(var(--${name}-${step}) / <alpha-value>)`;
    return acc;
  }, {});
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      opacity: Array.from({ length: 101 }, (_, index) => index).reduce<Record<string, string>>(
        (acc, value) => {
          acc[value] = `${value / 100}`;
          return acc;
        },
        {},
      ),
      colors: {
        background: scale('background'),
        primary: scale('primary'),
        accent: scale('accent'),
        secondary: scale('secondary'),
        foreground: scale('foreground'),
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
        display: ['var(--font-heading)'],
        label: ['var(--font-label)'],
      },
      borderRadius: {
        lg: '4px',
        md: '2px',
      },
      maxWidth: {
        container: '1240px',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};