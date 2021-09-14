import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#0063F5',
    borderRadius: 12,
    paddingTop: 24,
    paddingBottom: 18,
    display: 'flex',
    alignItems: 'center',
  },
  profilePicture: {
    width: 88,
    height: 88,
    marginBottom: 10,
  },
  textName: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  textEmail: {
    fontSize: 12,
    color: 'white',
    marginBottom: 4,
  },
  menuWrapper: {
    marginTop: 40,
  },
  menuCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DFE2E4',
  },
  menuIcon: {
    marginRight: 17,
  },
  menuText: {
    fontSize: 18,
    lineHeight: 23,
    color: '#343A40',
    fontWeight: '500',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
