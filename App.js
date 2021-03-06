import React from 'react';
import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';
import SwipeView from 'react-native-swipeview';

import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './app/navigation/AppNavigator';

import config from './app/config';

import * as TodoActionCreators from './redux/actions/TodoActionCreators';

//import * as TodoActionCreators from './redux/actions/TodoActionCreators';

//import * as TodoActionCreators from '../redux/actions/TodoActionCreators';

import Title from './app/components/Title'
import Input from './app/components/Input';
import TodoRowItem from './app/components/TodoRowItem';
import DateView from './app/components/DateView';

export default function App() {

  // const {todosReducer} = this.props;
  // const {active} = todosReducer;
  // const {todos} = active;
  // const {addTodo, completeTodo, deleteActiveTodo} = this.props;

  // this.leftOpenValue = Dimensions.get('window').width;
  // this.rightOpenValue = -Dimensions.get('window').width;


  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 30}}>Yoshi 1</Text>

      { Title(config.constants.active_todos_screen.title) }

        <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Input
              placeholder={config.constants.active_todos_screen.add_todo_placeholder}
              placeholderTextColor={config.colors.white}
              selectionColor={config.colors.golden}
              underlineColorAndroid={config.colors.transparent}
              maxLength={config.constants.active_todos_screen.add_todo_input_maxlength}
              clearTextOnFocus={config.constants.active_todos_screen.add_todo_input_clear_text_on_focus}
              onSubmitEditing={ function() {console.log('on submit') } }
            />
          </View>
          <DateView />
        </View>

      <Image
        style={{width: 300, height: 200}}
        source={{uri: 'data:image/png;base64,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lQaOsipytdsQV6a6DwPEmbP/a+awHiSGAyIpfxGbh/hlI4SVvjREV8gGEN/+9tSpIx2x2GmlypvND5XaT9G1e23No0EVzY6EjWkWy5DBL1okaWENzEhIPn93rScioxetGjBaCYOyemXm5Ndff/XgoYj3wE88EC/qUHO2z0Ls6as+hChCun0YWvOOt7/tcb3Todu1f+982aekOCkHWXFttLltNEjSwfCKnBWTWrDCcWBX2UKPcITb0d3bG3X6LVaG55yTrTMadevf/vZg84Pr976A4hkfRSwQhYvIEo94oUTdpfuyvrG6pz5e11IDCY6rD7LEkwcP1rtGO7YfOPqHP2bWfRtTBQuyRIDokUe0iy2KyivusXviZK1R4zjp3+88+Oqbr7+5s/new813Nt95EMW4ET8WiFTVLqDY/qpBcm67/WXjlu46V38/Ytiy5bJWG93iqqs5deA3z5/+7//5R2eekqWiEyCeDAbek4p2JpVe+mpzSg+/ee7BgzubN/8dYycEDogq1nNLp+vQxbYfGRzcNlC3p99VA6aIksRDWpQlttS31H1yreuDfwDEPAwB4ldtFzwnbEU7AoghpL+nGN755psHDx989HDzf641iGTgTdSeUf97R/uOU92oHffX16Po3NNTB/+pb3H9B3i/S/FPMvvCmmYbNVji51qniLOLL1vgPO9tztDDe1gtkcKjfbt0sZgCUtd+9KVG4OZK54nKl7oW12+BV9el/0qHlI0bm7o6T9+9e/e00icx3XyvuKfp6okv7mRS/PhOHKPZV+HQvqrdr0HJktbt6rqWFgXgli116XSxsX/bp59++pe7TRvB/Lo693Z23X3vr06bzRbVfvLh6Q9eaL6wobjyx+89N697A78P43ttQoNJ47dnGXbEXu13gQW21PRorx9K54tb+qBi6Wj/8e6/de69tN9ouzzUqtFUImkqNcmx6d8Npb4rnhZcMb6XJhauQi9MyW0xXao5xzpi21BXYktd3+gXEFRQvuj68lXl6UGnz+aG9HgA9QNkaCzfcviyETaI6obbHSmniJKdHw+D8VV/fP76HojTNTU9G15NAd7uJfR2u9t948qiW1qUofBB1FzZ3jFrjLrbR3t6tFAQf37Z1VJf07hH+86t24OD7e23RAtn5dwHe1uxve8aED6I6uT3P+nSxgjt9uBLo5891/ZmH7JE132NJjkz0zo+fuWgz66d3H3uqWKIE6I6OXkrjRAi9U8vf9HcfHIPJImQaB+f/ZGZtzYQlnHw6RjftvTCCVFdOb6tHWFUzLH9QlvzUVfNlpcO1fTMb5xZOWS7cfwxL1GWwgoRGSOKIKn4smO07WhdvRY++jM2/9CMjeVuo1n2+n/dExJg4rYFLwAAAABJRU5ErkJggg=='}}
      />

      <Button
        title="Oink"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>

    // <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
    //     <AppNavigator navigation={addNavigationHelpers({
    //         dispatch: this.props.dispatch,
    //         state: this.props.nav,
    //     })} />
    // </View>

  );
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(TodoActionCreators, dispatch);
// };

// const mapStateToProps = (state) => ({
//   todosReducer: state.todosReducer,
//   nav: state.nav,
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
