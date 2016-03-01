'use strict';
 
var React = require('react-native');
 
var {
    Image,
    StyleSheet,
    Text,
    TextInput,
    ListView,
    View,
    TouchableHighlight,
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
            })
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
                <TextInput style={styles.textinput}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderBook.bind(this)}
                    style={styles.listView}
                />
            </View>             
        );
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