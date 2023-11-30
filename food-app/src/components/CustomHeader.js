import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '@constants/Colors'
import AppLabel from '@components/AppLabel'
import HStack from '@components/HStack';
import SearchBar from '@components/SearchBar';

const CustomHeader = () => {
    return (
        <View>
            <HStack style={styles.container}>
                <TouchableOpacity>
                    <Image
                        source={require('@assets/images/bike.png')}
                        style={styles.bike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer}>
                    <AppLabel.Body1 style={{ color: Colors.medium }}>Delivery • Now</AppLabel.Body1>
                    <View style={styles.locationName}>
                        <AppLabel.Button>San Francisco, CA</AppLabel.Button>
                        <Icon name="chevron-down" size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Icon name='person-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </HStack>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    bike: {
        width: 30,
        height: 30
    },
    titleContainer: {
        flex: 1
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default CustomHeader;