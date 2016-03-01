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

var FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
];
 
class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        var books = FAKE_BOOK_DATA;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(books)
        });
    }

    render() {
    var book = FAKE_BOOK_DATA[0];
        return (
            <View style={styles.container}>
                <Text style={styles.init}>
                    Welcome to DER
                </Text>
                <TextInput style={styles.textinput}/>
                // <View style={styles.secondContainer}>
                //     <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                //                 style={styles.thumbnail} />
                //     <View style={styles.rightContainer}>
                //         <Text style={styles.title}>{book.volumeInfo.title}</Text>
                //         <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                //     </View>
                // </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderBook.bind(this)}
                    style={styles.listView}
                />
            </View>             
        );
    }
    
    renderBook(book) {
       return (
            <TouchableHighlight>
                <View>
                    <View style={styles.container}>
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