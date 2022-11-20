import ReactDOM from 'react-dom/client';
//= App Component
import App from './App';
//= Localizations & Translations
import initLocalization from './translations/init';
//= Global Styles
import './styles/reset.scss';
import './styles/global.scss';

//= Initialize Localizations
initLocalization();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
