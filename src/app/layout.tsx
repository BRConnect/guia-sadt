import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'

const montserratHeading = Montserrat({
	subsets: ['latin'],
	variable: '--font-heading',
})

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
})

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Guia SADT | Preenchimento digital da ficha SP/SADT',
		template: '%s | Guia SADT',
	},
	description:
		'Preencha, revise e imprima sua ficha SP/SADT digitalmente com validação, pesquisa e organização por grupos.',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: '/',
		siteName: 'Guia SADT',
		title: 'Guia SADT | Preenchimento digital da ficha SP/SADT',
		description:
			'Preencha, revise e imprima sua ficha SP/SADT digitalmente com validação, pesquisa e organização por grupos.',
	},
	twitter: {
		card: 'summary',
		title: 'Guia SADT | Preenchimento digital da ficha SP/SADT',
		description:
			'Preencha, revise e imprima sua ficha SP/SADT digitalmente com validação, pesquisa e organização por grupos.',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="pt-BR"
			className={cn(
				'h-full',
				'antialiased',
				geistSans.variable,
				geistMono.variable,
				'font-sans',
				nunitoSans.variable,
				montserratHeading.variable,
			)}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático sem dados de usuário.
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebApplication',
							name: 'Guia SADT',
							description:
								'Aplicação web para preenchimento digital da ficha SP/SADT.',
							applicationCategory: 'BusinessApplication',
							operatingSystem: 'Web',
							inLanguage: 'pt-BR',
						}),
					}}
				/>

				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
