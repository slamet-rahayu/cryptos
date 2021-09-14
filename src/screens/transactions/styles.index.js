import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cryptoCard: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  text1: {
    fontSize: 18,
    fontWeight: '500',
    color: '#212529',
  },
  text2: {
    fontSize: 12,
    color: '#6C757D',
  },
  text3: {
    fontSize: 10,
    color: '#6C757D',
  },
  alignRight: {
    textAlign: 'right',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
