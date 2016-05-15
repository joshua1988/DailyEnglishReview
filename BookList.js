'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {
    Image,
    StyleSheet,
    Text,
    TextInput,
    ListView,
    View,
    TouchableHighlight,
    TouchableElement,
    Component,
    ActivityIndicatorIOS
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
    secondContainer: {
        flexDirection: 'row',
        backgroundColor: "yellow"
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        // flex: 1,
        // backgroundColor: "red",
    },
    separator: {
        height: 1,
        backgroundColor: "#dddddd",
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    textinput: {
        height: 40,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    init: {
        marginTop: 10,
        marginBottom: 10
    },
    author: {
        color: '#656565'
    }
});

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            wordId: ""
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                isLoading: false
            });
        })
        .done();
    }

    render() {
        if (this.state.isLoading) {
           return this.renderLoadingView();
        }

        return (
            <View style={styles.container}>
                <Text style={styles.init}>
                    Welcome to DER
                </Text>
                <TextInput
                    style={styles.textinput}
                    placeholder="Type what you have learned today"
                    value={this.state.wordId}
                    onChangeText={wordId => this.setState({wordId})}
                    onSubmitEditing={this._submitForm}
                />
                <Button
                  containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                  style={{fontSize: 20, color: 'green'}}
                  onPress={this._submitForm}>
                  Press Me!
                </Button>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderBook.bind(this)}
                    style={styles.listView}
                />
            </View>
        );
    }

    _submitForm = () => {
      const { wordId } = this.state
      console.log(wordId);
      // do some stuff here…
      // console.log("submitted");

      this.setState({wordId: ''});
    };

    // get Textinput Value
    _handlePress(event) {
      console.log("clicked");
      // console.log("this.state.wordId : ",this.state.wordId);
    }

    onTextInputChange(event) {
      console.log("clicked");
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading books...
                </Text>
            </View>
        );
    }

    renderBook(book) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.secondContainer}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }
}

module.exports = BookList;
