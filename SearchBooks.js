'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Datastore = require('react-native-local-mongodb');
var db = new Datastore({ filename: 'asyncStorageKey', autoload: true });
var doc = { word: "first", today: new Date()};

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
        var ds = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            wordId: "",
            dataSource: ds.cloneWithRows([])
        };
        // this.setDate();
        console.log("constructor done");
    }

    setDate() {
      var customDate = new Date();
      customDate = customDate.getFullYear() +"년 "+ (1 + customDate.getMonth()) +"월 "+ customDate.getDate() + "일 " +
                    customDate.getHours() +"시 "+ customDate.getMinutes() +"분";
      // console.log("customDate : ", customDate);
      return customDate;
    }

    componentDidMount() {
      // Remove All Data
      // db.remove({}, { multi: true }, function (err, numRemoved) {
      //   console.log("how many removed? ", numRemoved);
      // });

      this.getWords();
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
              containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'skyblue'}}
              style={{fontSize: 20, color: 'blue'}}
              onPress={this._submitForm}>
              Take a note
            </Button>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={styles.listView}
              />
          </View>
        );
    }

    // Button submit & clear text
    _submitForm = () => {
      var word = {"content" : this.state.wordId, "date" : this.setDate()};
      this.addWord(word);
      this.getWords();
      this.setState({
          // dataBlobs.push 이용하기
          wordId: ""
      });
    };

    getWords() {
      var that = this;
      db.find({}, function(err, docs) {
        console.log("docs : ",docs);
        console.log("that : ",that);
        that.setState({
            // dataBlobs.push 이용하기
            dataSource: that.state.dataSource.cloneWithRows(docs)
        });
      });
      // console.log("passVar : ", passVar);
    }

    addWord(word) {
      db.insert(word, function (err, newDoc) {   // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
        console.log("addWord() inserted", newDoc);
      });
    }

    // ListView
    renderRow(word) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.secondContainer}>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{word.content}</Text>
                            <Text style={styles.author}>{word.date}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
       );
   }


}

module.exports = SearchBooks;
