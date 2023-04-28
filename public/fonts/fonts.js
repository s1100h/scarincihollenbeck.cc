import { Montserrat, Poppins } from '@next/font/google';

export const montserrat = Montserrat({
	weight: ['300', '500', '600', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	preload: true,
})

export const poppins = Poppins({
	weight: ['300', '400', '500', '600', '900'],
	subsets: ['latin'],
	variable: '--font-poppins',
	preload: true,
});

