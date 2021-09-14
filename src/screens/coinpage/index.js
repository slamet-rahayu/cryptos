import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image} from 'react-native';
import {Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useRoute} from '@react-navigation/native';
import Container from '../../components/container';
import {Spinner} from 'native-base';
import latestQuote from '../../data/latest-quote';
import {formatusd} from '../../lib/numberformat';
import styles from './styles.index';
import fetchQuotesLatest from '../../services/quotes-latest';

const rangeBtn = ['1 H', '24 H', '1 W', '6 M', '1 Y', 'All'];

function Chart() {
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => '#0063F5',
          labelColor: (opacity = 1) => '#0063F5',
          style: {
            // borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'red',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          // borderRadius: 16,
        }}
      />
      <View style={styles.rangeBtnWrapper}>
        {rangeBtn.map(v => (
          <View key={v} style={styles.rangeBtn}>
            <Text style={styles.rangeBtnText}>{v}</Text>
          </View>
        ))}
      </View>
    </View>
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

export default function CoinPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [rate, setRate] = useState(0);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const datas = await fetchQuotesLatest(params.slug);
      const prices = datas.data[params.id].quote.USD.price.toFixed(2);
      const percentage =
        datas.data[params.id].quote.USD.percent_change_90d.toFixed(2);
      setData(datas);
      setRate((prices * percentage) / 100);
      setName(datas.data[params.id].name);
      setPrice(formatusd(datas.data[params.id].quote.USD.price.toFixed(2)));
      setPercent(datas.data[params.id].quote.USD.percent_change_90d.toFixed(2));
      setSymbol(datas.data[params.id].symbol);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // setData(latestQuote);
  }, []);

  useEffect(() => {
    console.log(data.data);
  }, [data]);

  const {params} = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(params);
  }, [params]);

  const handleBuy = async () => {
    try {
      const datas = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        symbol: symbol,
      };
      const dataExist = await AsyncStorage.getItem('transaction');
      if (dataExist === null) {
        await AsyncStorage.setItem('transaction', JSON.stringify([datas]));
      } else {
        await AsyncStorage.setItem(
          'transaction',
          JSON.stringify([datas].concat(JSON.parse(dataExist))),
        );
      }
      navigation.navigate('Transactions');
    } catch (e) {
      console.log(e);
    }
  };

  let Img;
  switch (name) {
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

  const green = rate > 0;

  return (
    <Container>
      {loading && <Loading />}
      {!loading && error && <Error />}
      {!loading && !error && (
        <>
          <View style={styles.cryptoContainer}>
            <Image source={Img} style={styles.cryptoIcon} />
            <View>
              <Text style={styles.cryptoText}>{name}</Text>
              <Text style={styles.cryptoSymbol}>{symbol}</Text>
            </View>
          </View>
          <View style={styles.priceTextWrapper}>
            <Text style={styles.priceText}>$ {price}</Text>
            <Text
              style={[
                styles.changeText,
                green ? styles.changeTextUp : styles.changeTextDown,
              ]}>
              {green ? '+' : '-'} {formatusd(rate.toFixed(2))} ({percent} %)
            </Text>
          </View>
          <Chart />
          <View style={styles.btnWrapper}>
            <Button style={styles.btn} onPress={handleBuy}>
              BUY
            </Button>
            <Button style={styles.btn}>SELL</Button>
          </View>
        </>
      )}
    </Container>
  );
}
