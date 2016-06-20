'use strict';

var React = require('react-native');
var WordList = require('./WordList');

var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Note extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                  title: 'Daily Enligh Review',
                  component: WordList
                }}
            />
        );
    }
}

module.exports = Note;
