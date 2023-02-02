import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    height: 250,
    width: '90%',
    marginTop: 30,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C2026',
  },
  text_container: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#1C2026',
    opacity: 0.8,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  }
});