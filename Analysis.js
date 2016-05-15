'use strict';

var React = require('react-native');
var SearchBooks = require('./SearchBooks');

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

class Analysis extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
		            title: 'Word Analysis',
		            component: SearchBooks
            }}/>
        );
    }
}

module.exports = Analysis;
