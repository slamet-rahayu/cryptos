import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 31,
  },
  headingText1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#212529',
  },
  subheadingText1: {
    fontSize: 12,
    color: '#6C757D',
  },
  searchIcon: {
    marginRight: 20,
  },
  textCoinsHeading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  tabActive: {
    color: '#0063F5',
    borderBottomColor: '#0063F5',
    borderBottomWidth: 2,
  },
  trendingCard: {
    // width,
    marginBottom: 10,
    borderRadius: 6,
    padding: 16,
    height: 72,
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
  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '90%',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
  },
  cryptoTextWrapper: {
    marginLeft: 10,
  },
  cryptoText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },
  cryptoTextAbbr: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6C757D',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  priceTextWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#343A40',
  },
  percentageText: {
    fontSize: 10,
  },
  percentageTextMin: {
    color: 'red',
  },
  percentageTextPlus: {
    color: '#21BF73',
  },
});

export default styles;
