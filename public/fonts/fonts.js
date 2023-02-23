import localFont from '@next/font/local'
import { Montserrat } from '@next/font/google';

export const montserrat = Montserrat({
	weight: '300',
	subsets: ['latin'],
	variable: '--font-montserrat',
	preload: true,
})

export const GothamProBold = localFont({
	src: [
		{
			path: './GothamPro-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: "--font-GothamPro-Bold",
	preload: true,
});

export const GothamPro = localFont({
	src: [
		{
			path: './GothamPro-Light.woff2',
			weight: '400',
			style: 'sans-serif',
		},
	],
	variable: "--font-GothamPro",
	preload: true,
});

export const KenjoI = localFont({
	src: [
		{
			path: './KenjoI.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: "--font-KenjoI",
	preload: true,
});

