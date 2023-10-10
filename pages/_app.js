// _app.js

import '../styles/globals.css' // Import your global CSS styles here
import Layout from '../components/Layout' // Import your custom layout component

function MyApp({ Component, pageProps }) {
  // You can wrap your pages with a layout component here
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp


