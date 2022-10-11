import {StatusBar} from 'expo-status-bar';
import {FlatList, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [people, setPeople] = useState([
        {name: 's', id: '1'},
        {name: 'fs', id: '2'},
        {name: 'ssfb', id: '3'},
        {name: 'dbs', id: '4'},
        {name: 'sfdb', id: '5'},
        {name: 'sbdf', id: '6'},
        {name: 'snfm', id: '7'},
        {name: 's.;.', id: '8'},
        {name: 'sfd', id: '9'},
        {name: 'ssef', id: '10'},
        {name: 'sthh', id: '11'}])

    const clickToFilter = (item) => {
        setPeople((p) => {
            return p.filter(person => person.id == item)
        })
    }
    const clickToRemoveItem = (item) => {
        setPeople((p) => {
            return p.filter(person => person.id != item)
        })
    }
    return (
        <View style={styles.container}>
            <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={people} renderItem={({item}) => (
                <TouchableOpacity onPress={() => {
                    click(item.name)
                }}>
                    <Text style={styles.item} onPress={() => {
                        clickToRemoveItem(item.id)
                    }}>{item.name}</Text>
                </TouchableOpacity>
                // another way
                /*<Text style={styles.item} onPress={() => {
                    click(item.name)
                }}>{item.name}</Text>
                */

            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 40
    }, item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 20
    }
});
