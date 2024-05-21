import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header1}>Courses</Text>
      <View style={styles.tilesContainer}>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/sensors.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 2 (YP0859 | 2022)</Text>
            <Text style={styles.tileText}>Development 2 (YP0859 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
          </View>
        </View>
        <View style={styles.tile}>
          <Image
            style={styles.tileImage}
            source={require('./assets/courseImages/macbook-code.jpg')}
          />
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
            <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
          </View>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
      <View style={styles.tile}>
        <Image
          style={styles.tileImage}
          source={require('./assets/courseImages/macbook-code.jpg')}
        />
        <View style={styles.tileDetail}>
          <Text style={styles.tileHeader}>Development 1 (YP0584 | 2022)</Text>
          <Text style={styles.tileText}>Development 1 (YP0584 | 2022)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,

  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',
  },
  tile: {
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',

  },
  tileImage: {
    width: '100%',
    maxHeight: 110,
    overflow: 'hidden',
  },
  tileDetail: {
    padding: 10,
  },
  tileHeader: {
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    fontSize: 16,
    fontWeight: '500',
  }


});
