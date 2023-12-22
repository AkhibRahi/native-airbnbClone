import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  guestContainer: {
    paddingVertical: 30,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  guestTitleContainer: {
    alignContent: 'center',
    position: 'absolute',
    left: '35%',
  },
  guestTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  guestDate: {
    textAlign: 'center',
  },
  category: {
    marginHorizontal: 15,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',

  },
  categoryAdults:{
    fontWeight: 'bold',
    color: '#000'
  },
  counts:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  countButton:{
    width: 30,
    height: 30,
    borderRadius: 15,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#000'
  },
  number:{
    marginHorizontal: 20,
    fontSize: 18,
    color: '#000'
  }
});
export default styles;
