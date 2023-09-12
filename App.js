import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import ReactNativeFusionCharts from 'react-native-fusioncharts';

export default class ListenEvents extends Component {
  constructor(props) {
    super(props);

    const chartConfig = {
      type: 'column2d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          subCaption: 'In MMbbl = One Million barrels',
          xAxisName: 'Country',
          yAxisName: 'Reserves (MMbbl)',
          numberSuffix: 'K',
          theme: 'fusion'
        },
        data: [
          { label: 'Venezuela', value: '290' },
          { label: 'Saudi', value: '260' },
          { label: 'Canada', value: '180' },
          { label: 'Iran', value: '140' },
          { label: 'Russia', value: '115' },
          { label: 'UAE', value: '100' },
          { label: 'US', value: '30' },
          { label: 'China', value: '30' }
        ]
      }
    };

    this.state = {
      chartConfig,
      events: {
        // Add your events method here:
        // Event name should be in small letters.
        dataplotclick: (e, a) => {
          Alert.alert(`You clicked on ${e.data.categoryLabel}`);
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Listen to events from chart</Text>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            events={this.state.events}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  }
})