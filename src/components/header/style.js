import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 22,
    lineHeight: 27,
    fontFamily: 'Montserrat',
    marginLeft: 7,
    fontWeight: '700',
    color: '#000000',
    marginRight: 'auto',  
  },
  badge: {
    backgroundColor: '#000000',
    width: 15,
    height: 15,
    borderRadius: 10,
    marginRight: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  }
})
