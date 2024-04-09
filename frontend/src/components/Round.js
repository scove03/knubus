import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import scheduleData from '../data/schedule.json'

const Timeline = ({ roundData }) => {
  return (
    <View style={styles.timelineContainer}>
      {roundData.map((stop, index) => (
        <View key={index} style={styles.stopContainer}>
          <Text style={styles.stopTime}>{stop.time}</Text>
          <Text style={styles.stopName}>{stop.name}</Text>
        </View>
      ))}
    </View>
  )
}

const Round = ({ isOperationDay }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(currentIndex)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // 현재 시간 업데이트
      setCurrentTime(new Date())

      // 현재 시각과 비교한 인덱스 업데이트
      let index = getCurrentIndex()
      if (index === -1) index = 9
      setCurrentIndex(index)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = getCurrentIndex()
    if (index === -1) index = 9
    setCurrentIndex(index)
  }, [currentTime])

  const currentRound = scheduleData.schedule[selectedIndex]
  const { round, tables } = currentRound

  const getCurrentIndex = () => {
    const currentHour = currentTime.getHours()
    const currentMinute = currentTime.getMinutes()

    for (let i = 0; i < scheduleData.schedule.length; i++) {
      const tables = scheduleData.schedule[i].tables

      const startHour = parseInt(tables['📍 운행예정'].split(':')[0])
      const startMinute = parseInt(tables['📍 운행예정'].split(':')[1])

      const endHour = parseInt(tables['📍 운행종료(미래도서관)'].split(':')[0])
      const endMinute = parseInt(
        tables['📍 운행종료(미래도서관)'].split(':')[1]
      )

      if (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute <= endMinute))
      ) {
        return i
      }
    }

    return -1
  }

  // 버튼 --------------------------------------------------------------

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prevIndex) =>
      Math.min(scheduleData.schedule.length - 1, prevIndex + 1)
    )
  }

  const goToNow = () => {
    setSelectedIndex(currentIndex)
  }

  // 운행 안하면 --------------------------------------------------------------

  if (!isOperationDay) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/public/Mascot.png')}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.heading}>{round}</Text>

      <View style={styles.buttonContainer}>
        {selectedIndex > 0 && (
          <TouchableOpacity onPress={goToPrevious} style={styles.button}>
            <Text style={styles.buttonText}>이전 회차</Text>
          </TouchableOpacity>
        )}
        {selectedIndex !== currentIndex && (
          <TouchableOpacity onPress={goToNow} style={styles.button}>
            <Text style={styles.buttonText}>현재로 돌아오기</Text>
          </TouchableOpacity>
        )}
        {selectedIndex < scheduleData.schedule.length - 1 && (
          <TouchableOpacity onPress={goToNext} style={styles.button}>
            <Text style={styles.buttonText}>다음 회차</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.container}>
        {/* 다른 코드 생략 */}
        <Timeline
          roundData={Object.entries(tables).map(([name, time]) => ({
            name,
            time,
          }))}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  time: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333', // Default color
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#007AFF', // Apple blue color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF', // Apple blue color
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333', // Default color
  },
  timelineContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  stopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  stopTime: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  stopName: {
    fontSize: 16,
  },
})

export default Round
