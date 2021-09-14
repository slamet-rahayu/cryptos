import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // width,
    // height,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headingWrapper: {
    marginBottom: 16,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
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
  bannerWrapper: {
    marginBottom: 32,
  },
  banner: {
    backgroundColor: '#0063F5',
    borderRadius: 12,
    height: 141,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textBannerTop: {
    color: 'white',
    fontSize: 12,
    marginBottom: 8,
  },
  textBannerBottom: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  btnBanner: {
    width: 102,
    height: 31,
    backgroundColor: '#F8F9FA',
  },
  btnBannerText: {
    fontSize: 12,
    color: '#0063F5',
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
