import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HStack from './HStack';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '@constants/Colors'

const SearchBar = () => {
    return (
        <HStack style={styles.container}>
            <HStack style={styles.inputContainer}>
                <TouchableOpacity>
                    <Icon name="ios-search" size={15} style={styles.searchIcon} />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder='Restaurants, groceries, dishes' />
            </HStack>
            <TouchableOpacity>
                <Icon name='options' size={20} color={Colors.primary} />
            </TouchableOpacity>
        </HStack>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        padding: 4,
        gap: 10
    },
    searchIcon: {
        paddingLeft: 7,
        color: Colors.medium
    },
    input: {
        color: Colors.dark
    }
});

export default SearchBar;
