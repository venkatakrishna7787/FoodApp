/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Animation1} from './src/animations';

AppRegistry.registerComponent(appName, () => App);
