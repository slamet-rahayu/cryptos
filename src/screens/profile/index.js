import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/container';
import styles from './styles.index';

const menu = [
  {
    name: 'History',
    routeName: 'Transactions',
    img: require('../../assets/icons/history.png'),
  },
  {
    name: 'Bank Details',
    routeName: '',
    img: require('../../assets/icons/bank.png'),
  },
  {
    name: 'Notifications',
    routeName: '',
    img: require('../../assets/icons/bell.png'),
  },
  {
    name: 'Security',
    routeName: '',
    img: require('../../assets/icons/security.png'),
  },
  {
    name: 'Help and Support',
    routeName: '',
    img: require('../../assets/icons/help.png'),
  },
  {
    name: 'Terms and Conditions',
    routeName: '',
    img: require('../../assets/icons/terms.png'),
  },
];

function MenuCard({item}) {
  const navigation = useNavigation();
  const handlePress = () =>
    item.routeName ? navigation.navigate(item.routeName) : null;
  return (
    <TouchableOpacity style={styles.menuCard} onPress={handlePress}>
      <View style={styles.flexRow}>
        <Image source={item.img} style={styles.menuIcon} />
        <Text style={styles.menuText}>{item.name}</Text>
      </View>
      <Image source={require('../../assets/icons/chevron-right.png')} />
    </TouchableOpacity>
  );
}

export default function Profile() {
  return (
    <Container>
      <View style={styles.banner}>
        <Image
          source={require('../../assets/icons/profile-picture.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.textName}>Slamet Rahayu</Text>
        <Text style={styles.textEmail}>slamet_rahayu93@yahoo.com</Text>
        <Text style={styles.textEmail}>+62-813-2623-6867</Text>
      </View>
      <View style={styles.menuWrapper}>
        {menu.map(v => (
          <MenuCard item={v} key={v.name} />
        ))}
      </View>
    </Container>
  );
}
