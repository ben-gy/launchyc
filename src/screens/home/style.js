import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 7,
  },
  itemDesc: {
    fontSize: 10,
    color: '#C6C6C6',
    fontWeight: '500',
  },
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
  },
  tagsContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    backgroundColor: '#DFDFDF',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontWeight: '700',
    fontSize: 12,
  },
  clear: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
    paddingBottom: 26,
    paddingTop: 20,
    alignItems: 'center',
  },
  clearText: {
    color: '#F26522',
    fontWeight: '700',
    fontSize: 12,
  }
})
