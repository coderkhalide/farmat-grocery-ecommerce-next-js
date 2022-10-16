import Layout from '../app/layout'
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
