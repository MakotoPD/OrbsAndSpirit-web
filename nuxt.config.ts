// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
		head: {
			title: 'Orbs and Spirit - Game starts with idea',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'format-detection',
					content: 'telephone=no'
				},
				{
					name: 'description',
					content: ''
				},
				{
					name: 'keywords',
					content: ''
				},
				{
					name: 'og:image',
					content: '/og.png'
				}
			],
			link: [{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon.png'
				},
				{
					rel: 'alternate',
					hreflang: 'pl',
					href: ''
				},
				{
					rel: 'alternate',
					hreflang: 'en-GB',
					href: ''
				},
				{
					rel: 'canonical',
					href: ''
				}
			],
			script: [
			],
		},

	},
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-gtag',
    'nuxt-umami',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  tailwindcss: {
		configPath: 'tailwind.config',
	},

  robots: {
		UserAgent: '*',
		Disallow: '',
		Sitemap: '/sitemap.xml'
	},

  i18n: {
		locales: [{
				code: 'en',
				iso: 'en-US',
				file: 'en.json'
			},
			{
				code: 'pl',
				iso: 'pl-PL',
				file: 'pl.json'
			}
		],
		langDir: 'lang/',
		defaultLocale: 'en',
		compilation: {
			strictMessage: false,
		},
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		}
	},

  googleFonts: {
		display: 'swap',
		families: {
			Poppins: true,
		}
	},

  site: {
		sources: [
			'/api/__sitemap__/urls',
		  ]
	},

  css: [
		'@/assets/css/global.css',
	]
})