import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp} from '../../components/responsiveUi';
import CustomHeader from '../../components/customHeader';
import styles from './style';
import {deleteFormData, formData} from '../../action';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';

const FormData = props => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [allData, setAllData] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const AddData = () => {
    const Emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const ContactReg = /^[0]?[789]\d{9}$/;
    if (Emailreg.test(email) && ContactReg.test(contact)) {
      let data = {
        emp_id: employeeId,
        name: name,
        contact: contact,
        email: email,
      };
      dispatch(formData(data));
    } else {
      alert(' Email or Phone number not valid format ');
    }
  };
  const onDelete = item => {
    dispatch(deleteFormData(item));
  };

  const searchFilter = text => {
    if (text) {
      const newData = filterData.filter(item => {
        const itemData = item?.name
          ? item?.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setAllData(newData);
      setSearch(text);
    } else {
      setAllData(filterData);
      setSearch(text);
    }
  };
  useEffect(() => {
    setAllData(props.formdata);
    setFilterData(props.formdata);
  }, [props.formdata]);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mainView}>
        <View>
          <Text style={styles.text}>{item?.emp_id}</Text>
          <Text style={styles.text}>{item?.name}</Text>
          <Text style={styles.text}>{item?.email}</Text>
          <Text style={styles.text}>{item?.contact}</Text>
        </View>
        <TouchableOpacity
          style={styles.deletebtn}
          onPress={() => onDelete(index)}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  console.log('formdata', props.formdata);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: hp(20)}}>
        <CustomHeader
          headerTitle={'Form Data'}
          leftOnPress={() => props.navigation.goBack()}
          rightOnPress={() => props.navigation.navigate('EmployeeDetails')}
          right
          left
        />
        <TextInput
          style={[styles.textInput, {marginTop: hp(50)}]}
          placeholder="Enter employee id"
          value={employeeId}
          keyboardType="numeric"
          onChangeText={text => setEmployeeId(text)}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder={'Enter the email'}
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder={'Enter the contact no.'}
          style={styles.textInput}
          value={contact}
          keyboardType="numeric"
          onChangeText={text => setContact(text)}
        />
        <TouchableOpacity
          style={styles.submit}
          onPress={() => AddData()}
          activeOpacity={0.8}>
          <Text>Add Data</Text>
        </TouchableOpacity>
        <TextInput
          placeholder={'Search by name.'}
          style={styles.textInput}
          value={search}
          onChangeText={text => searchFilter(text)}
          underlineColorAndroid={'transparent'}
        />
        <FlatList data={allData} renderItem={renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  console.log('state', state);
  return {
    formdata: state.formdata.users,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormData);
