/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
 
var React = require('react-native');
var Main = require('./Main');
var Analysis = require('./Analysis');
 
var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;
 
class DailyEnglishReview extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'main'}
                    icon={{uri:'main'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'main'
                        });
                    }}>
                    <Main/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'analysis'}
                    icon={{uri:'analysis'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'analysis'
                        });
                    }}>
                    <Analysis/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('DailyEnglishReview', () => DailyEnglishReview);
