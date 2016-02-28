/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  TouchalbeHighlight,
  View,
  Image
} from 'react-native';

var FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
  ];

class DailyEnglishReview extends Component {

  constructor(probs){
    super(probs);
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      // dataSource: ds.cloneWithRows(foods),
    };
  }

  render() {
    var book = FAKE_BOOK_DATA[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Daily English Review
        </Text>
        <TextInput
          style={styles.textinput}
        />
        <View style={styles.rightContainer}>
            <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
            <Text style={styles.title}>{book.volumeInfo.title}</Text>
            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
        </View>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop : 30,
  },
  rightContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'red'
  },
  textinput: {
    height: 40, 
    borderColor: 'gray',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  author: {
      color: '#656565'
  }
});

AppRegistry.registerComponent('DailyEnglishReview', () => DailyEnglishReview);
