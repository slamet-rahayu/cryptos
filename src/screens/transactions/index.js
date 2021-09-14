import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../../components/container';
import styles from './styles.index';

function CryptoCard({item}) {
  let Img;
  switch (item.name) {
    case 'Bitcoin':
      Img = require('../../assets/icons/Bitcoin.png');
      break;
    case 'Ethereum':
      Img = require('../../assets/icons/Ethereum.png');
      break;
    case 'Cardano':
      Img = require('../../assets/icons/Cardano.png');
      break;
    case 'Tether':
      Img = require('../../assets/icons/Tether.png');
      break;
    case 'Binance Coin':
      Img = require('../../assets/icons/Binance-Coin.png');
      break;
    case 'XRP':
      Img = require('../../assets/icons/XRP.png');
      break;
    case 'Solana':
      Img = require('../../assets/icons/Solana.png');
      break;
    case 'Polkadot':
      Img = require('../../assets/icons/Polkadot.png');
      break;
    case 'Dogecoin':
      Img = require('../../assets/icons/Dogecoin.png');
      break;
    case 'USD Coin':
      Img = require('../../assets/icons/USD-Coin.png');
      break;
    default:
      Img = '';
      break;
  }
  return (
    <View style={styles.cryptoCard}>
      <View style={styles.flexRow}>
        <Image source={Img} style={styles.cryptoIcon} />
        <View>
          <Text style={styles.text1}>
            {item.name} / <Text style={styles.text2}>{item.symbol}</Text>
          </Text>
          <Text style={styles.text2}>Amount: 5 {item.symbol}</Text>
          <Text style={styles.text3}>Price: $24</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.text1, styles.alignRight]}>Total: $1200</Text>
        <Text style={[styles.text2, styles.alignRight]}>
          27 May 2021 09:00AM
        </Text>
        <Text style={[styles.text3, styles.alignRight, {color: '#21BF73'}]}>
          Successfully Completed
        </Text>
      </View>
    </View>
  );
}

export default function Transactions() {
  const [data, setData] = useState([]);
  async function clearStorage() {
    try {
      await AsyncStorage.clear();
      setData([]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      const savedData = await AsyncStorage.getItem('transaction');
      setData(JSON.parse(savedData));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClear = () => clearStorage();

  return (
    <Container>
      <View style={{marginBottom: 20}}>
        <Button colorScheme="secondary" onPress={handleClear}>
          clear
        </Button>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={CryptoCard}
      />
    </Container>
  );
}
