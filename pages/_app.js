import React from 'react'
// import App from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import { theme } from '../styles/theme'
import 'nprogress/nprogress.css'


//Binding events
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


const App = props => {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      {/* next-seo */}
      <Head>
        <title>web portfolio</title>
        {/* PWA primary color */}
        {/* <meta name="theme-color" content={theme.color.primary} /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='A site for my programming portfolio'
        />
        <meta charSet='utf-8' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='viewport' content='width=device-width' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
      </Head>
      {/* Wrappers */}
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledThemeProvider>

    </React.Fragment>
  )
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

// Router.onRouteChangeStart = url => {
//   console.log(url)
//   NProgress.start()
//   NProgress.configure({ easing: 'ease', speed: 200 })
// }
// Router.routeChangeComplete = () => NProgress.done()
// Router.routeChangeError = () => NProgress.done()