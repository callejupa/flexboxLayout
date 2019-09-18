import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
//styles
import { styles } from './styles'

class App extends React.Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.topSectionText}>
              4  N A M E S
            </Text>
          </View>
          <View style={styles.middleSection}>
          <Text style={styles.middleSectionText}>
              I P S U M
            </Text>
          </View>
          <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>
              C O M
            </Text>
          </View>        
      </SafeAreaView>      
    )
  }
}

export default App