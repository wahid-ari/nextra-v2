import React from 'react'
import { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const config = {
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        <Logo height={18} />
        {/* {route === '/' ? null : ( */}
        <span
          className='mx-2 font-bold select-none'
          title='Next Docs v2'
          style={{ whiteSpace: 'nowrap' }}
        >
          Next Docs v2
        </span>
        {/* )} */}
      </>
    )
  },
  search: {
    placeholder: "Search..."
  },
  project: {
    link: 'https://github.com/wahid-ari/nextra-v2',
  },
  // chat: {
  //   link: 'https://discord.com',
  //   // icon: <svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"></path></svg>,
  // },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Nextra V2'
      }
    }
  },
  head: (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content="Make beautiful websites with Next.js & MDX." />
      <meta name="og:description" content="Make beautiful websites with Next.js & MDX." />
      <meta name="og:title" content="Nextra" />
      <meta name="og:image" content="https://nextra.site/og.jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="nextra.site" />
      <meta name="twitter:site" content="nextra.site" />
      <meta name="twitter:url" content="https://nextra.site" />
      <meta name="twitter:image" content="https://nextra.site/og.jpeg" />

      <meta name="apple-mobile-web-app-title" content="Nextra V2" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/wahid-ari/nextra-v2',
  banner: {
    key: 'banner',
    text: (
      <a href="https://nextra.site" target="_blank" rel="noreferrer">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: () => <>Question? Give us feedback </>,
    labels: 'feedback'
  },
  footer: {
    text: () => {
      return (
        <div>
          <div className="mb-4 block">
            <a
              className="flex items-center gap-1 text-current"
              target="_blank"
              rel="noopener noreferrer"
              title="vercel.com homepage"
              href="https://vercel.com?utm_source=nextra.site"
            >
              <span>Powered by</span>
              <svg height={20} viewBox="0 0 283 64" fill="none">
                <title>Vercel</title>
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-center md:text-left">© 2022 The Nextra Project.</p>
        </div>
      )
    }
  },
}

export default config