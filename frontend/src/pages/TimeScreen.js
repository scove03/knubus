import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export default class TimeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['구분', '미래도서관', '동생대2호관', '경영대2호관', '미래광장', 
      '백록관', '기숙사(회차)', '함인섭광장', '미래광장', '경영대광장', '경영대2호관', '의생대', '미래도서관'],
      tableTitle: ['1회차', '2회차', '3회차', '4회차', '5회차', '6회차', '7회차', '8회차', '9회차', '10회차'],

      tableData: [
        ['8:30',  '8:32',  '8:34',  '8:36',  '8:38',  '8:43',  '8:45',  '8:47',  '8:49',  '8:51',  '8:53',  '8:53'],
        ['9:30',  '9:32',  '9:34',  '9:36',  '9:38',  '9:43',  '9:45',  '9:47',  '9:49',  '9:51',  '9:53',  '9:53'],
        ['10:00', '10:02', '10:04', '10:06', '10:08', '10:13', '10:15', '10:17', '10:19', '10:21', '10:23', '10:23'],
        ['11:30', '11:32', '11:34', '11:36', '11:38', '11:43', '11:45', '11:47', '11:49', '11:51', '11:53', '11:53'],
        ['12:00', '12:02', '12:04', '12:06', '12:08', '12:13', '12:15', '12:17', '12:19', '12:21', '12:23', '12:23'],
        ['13:00', '13:02', '13:04', '13:06', '13:08', '13:13', '13:15', '13:17', '13:19', '13:21', '13:23', '13:23'],
        ['14:30', '14:32', '14:34', '14:36', '14:38', '14:43', '14:45', '14:47', '14:49', '14:51', '14:53', '14:53'],
        ['16:00', '16:02', '16:04', '16:06', '16:08', '16:13', '16:15', '16:17', '16:19', '16:21', '16:23', '16:23'],
        ['17:30', '17:32', '17:34', '17:36', '17:38', '17:43', '17:45', '17:47', '17:49', '17:51', '17:53', '17:53'],
        ['18:00', '18:02', '18:04', '18:06', '18:08', '18:13', '18:15', '18:17', '18:19', '18:21', '18:23', '18:23'],
      ],
      widthArr: [50, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], //칸의 가로크기
    };
  }


  render() {
    const { tableHead, tableTitle, tableData, widthArr } = this.state;
    return (
      <View style={styles.container}>
         <Text style={styles.header}>{'<운행 시간표>'}</Text>
      <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'center' }}>
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.text} />
            {
              tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={[tableTitle[index], ...rowData]}
                  widthArr={widthArr}
                  style={[styles.row, { backgroundColor: index % 2 ? '#CEECF5' : 'transparent' }]}
                  textStyle={styles.text}
                />
              ))
            }
          </Table>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', justifyContent: 'center' },//표 배경색, 위치 지정
  header: { textAlign: 'center', fontSize: 20, marginTop: 30 },
  head: { height: 40, backgroundColor: '#58D3F7' }, //헤드의 칸의 세로크기 및 배경색
  row: { height: 40 }, //칸의 세로 크기
  text: { textAlign: 'center', fontSize: 16 } //폰트 사이즈와 위치 지정
});


/*import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

//  타임테이블 데이터를 작성한다. @최수영
// 운행 시간표
// 구분 미래도서관 동생대2호관 경영대2호관 미래광장 백록관 기숙사(회차) 함인섭광장 미래광장 경영대광장 경영대 2호관 의생대 미래도서관
// 1회차 8:30 8:32 8:34 8:36 8:38 8:43 8:45 8:47 8:49 8:51 8:53 8:53
// 2회차 9:30 9:32 9:34 9:36 9:38 9:43 9:45 9:47 9:49 9:51 9:53 9:53
// 3회차 10:00 10:02 10:04 10:06 10:08 10:13 10:15 10:17 10:19 10:21 10:23 10:23
// 4회차 11:30 11:32 11:34 11:36 11:38 11:43 11:45 11:47 11:49 11:51 11:53 11:53
// 5회차 12:00 12:02 12:04 12:06 12:08 12:13 12:15 12:17 12:19 12:21 12:23 12:23
// 6회차 13:00 13:02 13:04 13:06 13:08 13:13 13:15 13:17 13:19 13:21 13:23 13:23
// 7회차 14:30 14:32 14:34 14:36 14:38 14:43 14:45 14:47 14:49 14:51 14:53 14:53
// 8회차 16:00 16:02 16:04 16:06 16:08 16:13 16:15 16:17 16:19 16:21 16:23 16:23
// 9회차 17:30 17:32 17:34 17:36 17:38 17:43 17:45 17:47 17:49 17:51 17:53 17:53
// 10회차 18:00 18:02 18:04 18:06 18:08 18:13 18:15 18:17 18:19 18:21 18:23 18:23
const timeTable = [
  {
    time: '1회차',
    stops: [
      '8:30',
      '8:32',
      '8:34',
      '8:36',
      '8:38',
      '8:43',
      '8:45',
      '8:47',
      '8:49',
      '8:51',
      '8:53',
      '8:55',
    ],
  },
]

// 표 형태로 출력한다.
// 가운데 정렬한다.
// 가독성 좋도록 스타일을 지정한다.
const TimeScreen = () => {
  return (
    <ScrollView>
      <Text>운행 시간표</Text>
      {timeTable.map((schedule, index) => (
        <View key={index}>
          <Text>{schedule.time}</Text>
          {schedule.stops.map((stop, stopIndex) => (
            <Text key={stopIndex}>{stop}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  )
}

export default TimeScreen*/
