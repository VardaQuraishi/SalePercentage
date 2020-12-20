import React from 'react'
import {View, Text, TextInput, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { DataTable } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HistoryScreen = ({navigation,route}) => {
    const {his} = route.params;
    const {height, width} = Dimensions.get('window');
    return(
        <LinearGradient 
            style={{height: height, width: width,}}
            colors={['#ffd89b', '#19547b']} >
        <DataTable>
    <DataTable.Header >
      <DataTable.Title>|Original Price|</DataTable.Title>
      <DataTable.Title numeric>|Discount|</DataTable.Title>
      <DataTable.Title numeric>|Final Price|</DataTable.Title>
      <DataTable.Title numeric>|Delete|</DataTable.Title>

    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>100</DataTable.Cell>
      <DataTable.Cell numeric>10</DataTable.Cell>
      <DataTable.Cell numeric>90</DataTable.Cell>
      <DataTable.Cell numeric>
        <MaterialIcons 
        name='delete'
        color='red' />
      </DataTable.Cell>

    </DataTable.Row>

    

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
  </LinearGradient>
)

    
}

export default HistoryScreen