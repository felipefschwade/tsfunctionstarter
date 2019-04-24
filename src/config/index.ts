import devConfig from './devConfig';
import prodConfig from './prodConfig';

const config = process.env.FIREBASE_CONFIG ? prodConfig : devConfig;

export default config;