import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  priceText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#212529',
    marginRight: 20,
  },
  changeText: {
    fontSize: 18,
  },
  changeTextUp: {
    color: '#21BF73',
  },
  changeTextDown: {
    color: 'red',
  },
  priceTextWrapper: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rangeBtn: {
    borderColor: '#0063F5',
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: '#ECF4FF',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rangeBtnText: {
    color: '#6C757D',
    fontSize: 12,
  },
  rangeBtnWrapper: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnWrapper: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
  },
  btn: {
    width: 164,
    backgroundColor: '#0063F5',
  },
  cryptoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cryptoIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  cryptoText: {
    fontSize: 20,
    fontWeight: '500',
  },
  cryptoSymbol: {
    fontSize: 16,
    color: '#6C757D',
  },
});

export default styles;
