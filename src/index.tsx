import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App';
import ConnectedIntlProvider from './modules/intl/components/ConnectedIntlProvider';
import configureStore, { history } from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';

smoothscroll.polyfill();

const { store, persistor } = configureStore({});

// store.dispatch(setLocale('vi'));


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ConnectedIntlProvider>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </ConnectedIntlProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
