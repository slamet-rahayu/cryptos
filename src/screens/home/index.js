import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Spinner} from 'native-base';
import {Button} from 'native-base';
import styles from './styles.index';
import Container from '../../components/container';
import latest from '../../data/latest';
import {formatusd} from '../../lib/numberformat';
import fetchListingLatest from '../../services/listing-latest';

const {height} = Dimensions.get('window');

function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.textBannerTop}>Welcome Again</Text>
      <Text style={styles.textBannerBottom}>
        Make you first Investment today
      </Text>
      <Button size="xs" style={styles.btnBanner} _text={styles.btnBannerText}>
        Invest Today
      </Button>
    </View>
  );
}

function TrendingCard({item, onPress}) {
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
  const slug = item.name
    .split(' ')
    .map(v => v.toLowerCase())
    .join('-');
  const handlePress = () => onPress(slug, item.id);
  const green = item.quote.USD.percent_change_7d > 0;
  return (
    <TouchableOpacity style={{backgroundColor: 'white'}} onPress={handlePress}>
      <View style={styles.trendingCard}>
        <View style={styles.flexRow}>
          <Image style={styles.cryptoIcon} source={Img} />
          <View style={styles.flex}>
            <View style={styles.cryptoTextWrapper}>
              <Text style={styles.cryptoText}>{item.name}</Text>
              <Text style={styles.cryptoTextAbbr}>{item.symbol}</Text>
            </View>
            <View style={styles.priceTextWrapper}>
              <Text style={styles.priceText}>
                $ {formatusd(item.quote.USD.price.toFixed(2))}
              </Text>
              <Text
                style={[
                  styles.percentageText,
                  green ? styles.percentageTextPlus : styles.percentageTextMin,
                ]}>
                {green && '+'} {item.quote.USD.percent_change_7d.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Loading() {
  return (
    <View>
      <Spinner color="blue.500" />
    </View>
  );
}

function Error() {
  return (
    <View>
      <Text style={{textAlign: 'center', color: 'red', marginTop: 100}}>
        Error: Something went wrong!
      </Text>
    </View>
  );
}

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const handlePress = (slug, id) => navigation.navigate('CoinPage', {slug, id});

  const fetchData = async () => {
    try {
      setLoading(true);
      const datas = await fetchListingLatest();
      setData(datas);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // setData(latest);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <View style={styles.bannerWrapper}>
        <Banner />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingText}>Trending Coins</Text>
      </View>
      {loading && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && (
        <FlatList
          data={data.data}
          renderItem={item => (
            <TrendingCard item={item.item} onPress={handlePress} />
          )}
          keyExtractor={item => item.name}
          contentContainerStyle={{paddingBottom: 250}}
        />
      )}
    </Container>
  );
}
