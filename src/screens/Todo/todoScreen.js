import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {slices} from '../..';
import {useNavigation} from '@react-navigation/native';

const TodoScreen = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const TodoList = ({item}) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
        <Text>{item.desc}</Text>
      </View>
    );
  };
  return (
    <View style={styles.rootContainer}>
      <Button
        title="navigate to Products"
        onPress={() => {
          navigation.navigate('products');
        }}
      />
      <View style={styles.todoContainer}>
        <TextInput
          style={styles.titleInput}
          value={title}
          placeholder={'Enter the synonym'}
          onChangeText={c => {
            settitle(c);
          }}
        />
        <TextInput
          style={styles.titleInput}
          value={desc}
          placeholder={'Enter the Antonym'}
          onChangeText={c => {
            setdesc(c);
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(slices.todo.actions.addTodoItem(title, desc));
          }}>
          <Text style={styles.btnText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.listContainer}
        data={todos}
        renderItem={TodoList}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  todoContainer: {
    marginTop: 30,
  },
  titleInput: {
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    width: '80%',
    padding: 12,
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'black',
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    width: '80%',
    marginTop: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 20,
  },
});
