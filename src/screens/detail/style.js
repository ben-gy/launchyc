import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  titleBody: {
    paddingHorizontal: 25,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F26522',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '900',
  },
  titleFooter: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  link: {
    color: '#4986C9',
    fontSize: 9,
  },
  itemDesc: {
    fontSize: 9,
    color: '#C6C6C6',
    marginLeft: 'auto',
  }
});

export const markdownStyles = StyleSheet.create({
  link: {
    color: '#4986C9',
  },
});
