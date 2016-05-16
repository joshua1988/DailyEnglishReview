'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Datastore = require('react-native-local-mongodb');
var db = new Datastore();
var doc = { word: "first", today: new Date()};

// db.insert(doc, function (err, newDoc) {   // Callback is optional
//   // newDoc is the newly inserted document, including its _id
//   // newDoc has no key called notToBeSaved since its value was undefined
//   console.log("db inserted", newDoc);
// });

var {
    StyleSheet,
    View,
    Text,
    TextInput,
    ListView,
    TouchableHighlight,
    Component
   } = React;

var styles = StyleSheet.create({
  container: {
      flex: 1,
      // flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10,
      marginTop: 60,
  },
  textinput: {
      height: 40,
      marginBottom: 10,
      borderColor: 'gray',
      borderWidth: 1
  },
  listView: {
     backgroundColor: '#F5FCFF'
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  author: {
      color: '#656565'
  },
  separator: {
      height: 1,
      backgroundColor: "#dddddd",
  },
  secondContainer: {
      flexDirection: 'row',
      backgroundColor: "yellow"
  },
});

// for db temp data
var temp = "";

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordId: "",
            dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2
            }),
            dbData: ""
        };
        console.log("constructor done");
    }

    componentDidMount() {
      var tempData = {"content":"First Data","id":1};
      db.find({}, function(err, docs) {
        console.log("docs : ",docs);
        // tempData = docs;
      });
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows([tempData]),
      });
      console.log("this.state.dataSource : ", this.state.dataSource);
    }

    render() {
        return (
          <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="Type what you have learned today"
                value={this.state.wordId}
                onChangeText={wordId => this.setState({wordId})}
            />
            <Button
              containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
              style={{fontSize: 20, color: 'green'}}
              onPress={this._submitForm}>
              Save
            </Button>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderWords.bind(this)}
              style={styles.listView}
              />
          </View>
        );
    }

    // Button submit & clear text
    _submitForm = () => {
      // const { wordId } = this.state
      console.log(this.state.wordId);
      var word = {"word" : this.state.wordId};
      this.addWord(word);

      this.setState({
        wordId: ''
      });
    };

    addWord(word) {
      db.insert(word, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        console.log("addWord() inserted", newDoc);
      });
    }

    // ListView
    renderWords(word) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.secondContainer}>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{word.content}</Text>
                            <Text style={styles.author}>{word.id}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
       );
   }


}

module.exports = SearchBooks;
