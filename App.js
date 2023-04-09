
import * as React from 'react';
import { View, Text } from 'react-native';
// import { useEffect } from 'react';
// import { Provider, useSelector } from 'react-redux';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import { PersistGate } from 'redux-persist/integration/react';
// import { MenuProvider } from 'react-native-popup-menu';
// import { NetworkProvider, ReduxNetworkProvider } from 'react-native-offline';
// import SplashScreen from 'react-native-splash-screen';
// import { store, persistor } from './src/app/redux_setup/store';
// import Root from './Root';
// const newTheme = {
//   ...DefaultTheme,
// };

const App = () => {
  console.log('first console log on android')
  // const isOfflineModeActive = useSelector(
  //   (state) => state.shared.ui.isOfflineModeActive,
  // );
  // useEffect(() => {
  //   // Hide the splash screen when the app loads
  //   SplashScreen.hide();
  // }, []);
  // let pingServerUrl;
  // if (isOfflineModeActive) {
  //   // If offline mode is active, set pingServerUrl to a bogus url that doesn't exist
  //   pingServerUrl =
  //     'https://www.https://dsfdsfdsfdsfdsfdsfdsfdfsdfsfdsdfsdffdssdfdsfsdfdsf.com/';
  // } else {
  //   // Otherwise set it to Google (which is the package's default)
  //   pingServerUrl = 'https://www.google.com/';
  // }
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text>testing app js file </Text>
    </View>
  );
};

// const AppProvider = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// export default AppProvider;
export default App;
