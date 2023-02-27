import localFont from '@next/font/local'
import { Montserrat } from '@next/font/google';

export const montserrat = Montserrat({
	weight: ['300', '600', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	preload: true,
})

export const KenjoI = localFont({
	src: [
		{
			path: './KenjoI.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: "--font-KenjoI",
	preload: true,
});

