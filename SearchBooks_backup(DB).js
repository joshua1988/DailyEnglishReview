// 'use strict';
//
// var React = require('react-native');
// var Button = require('react-native-button');
// var DB = require('./db.js');
// var DBEvents = require('react-native-db-models').DBEvents
//
// var {
//     StyleSheet,
//     View,
//     Text,
//     TextInput,
//     ListView,
//     Component
//    } = React;
//
// DBEvents.on("all", function(){
// 	console.log("Database changed");
// })
//
// var styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       // flexDirection: 'row',
//       // justifyContent: 'center',
//       // alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//       padding: 10,
//       marginTop: 60,
//   },
//   textinput: {
//       height: 40,
//       marginBottom: 10,
//       borderColor: 'gray',
//       borderWidth: 1
//   },
//   listView: {
//      backgroundColor: '#F5FCFF'
//   },
//   title: {
//       fontSize: 20,
//       marginBottom: 8
//   },
//   author: {
//       color: '#656565'
//   },
//   separator: {
//       height: 1,
//       backgroundColor: "#dddddd",
//   },
//   secondContainer: {
//       flexDirection: 'row',
//       backgroundColor: "yellow"
//   },
// });
//
// // for db temp data
// var temp = "";
//
// class SearchBooks extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             wordId: "",
//             dataSource: new ListView.DataSource({
//               rowHasChanged: (row1, row2) => row1 !== row2
//             }),
//             dbData: ""
//         };
//         console.log("constructor done");
//     }
//
//     render() {
//         return (
//           <View style={styles.container}>
//             <TextInput
//                 style={styles.textinput}
//                 placeholder="Type what you have learned today"
//                 value={this.state.wordId}
//                 onChangeText={wordId => this.setState({wordId})}
//                 onSubmitEditing={this._submitForm}
//             />
//             <Button
//               containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
//               style={{fontSize: 20, color: 'green'}}
//               onPress={this._submitForm}>
//               Save
//             </Button>
//             <ListView
//               dataSource={this.state.dataSource}
//               renderRow={this.renderWords.bind(this)}
//               style={styles.listView}
//               />
//           </View>
//         );
//     }
//
//     // Button submit & clear text
//     _submitForm = () => {
//       // const { wordId } = this.state
//       console.log(this.state.wordId);
//
//       this.add_word();
//       // this.get_users();
//       // this.setState({
//       //   wordId: ''
//       // });
//     };
//
//     // DB get
//     get_users(){
//   		DB.users.get_all(function(result){
//   			console.log("all data : ",result);
//         temp = result;
//         console.log("temp : ",temp);
//       });
//       // console.log("this.state.dbData : ",this.state.dbData);
//   	}
//
//     // DB add
//     add_word() {
//       DB.users.add({content:this.state.wordId, id: 1}, function(added_data){
//       	console.log("added_data : ",added_data);
//       })
//     }
//
//     // ListView
//     renderWords(word) {
//        return (
//             <TouchableHighlight>
//                 <View>
//                     <View style={styles.secondContainer}>
//                         <View style={styles.rightContainer}>
//                             <Text style={styles.title}>{word.content}</Text>
//                             <Text style={styles.author}>{word.id}</Text>
//                         </View>
//                     </View>
//                     <View style={styles.separator}/>
//                 </View>
//             </TouchableHighlight>
//        );
//    }
//
//
// }
//
// module.exports = SearchBooks;
