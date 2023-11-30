import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CustomHeader from '@components/CustomHeader';

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

export default App;