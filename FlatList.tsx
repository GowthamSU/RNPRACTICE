import React, { useState } from 'react'
import { View, Text, StyleSheet, RefreshControl, FlatList } from "react-native"
const Flatlist = () => {
    const [list, setList] = useState([
        { value: "List1" },
        { value: "List2" },
        { value: "List3" },
        { value: "List4" },
        { value: "List5" },
        { value: "List6" },
        { value: "List7" },
        { value: "List8" },
        { value: "List9" },
        { value: "List10" }
    ])

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setList([...list, { value: "List20" }])
        setRefreshing(false)
    }

    return (
        <FlatList
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={({ item }) => (
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "red", margin: 20 }}>
                    <Text style={styles.text}>
                        {item.value}
                    </Text>
                </View>
            )
            }

            refreshControl={
                < RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#00ff00']}
                />
            }
        />
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
        color: "white",
        margin: 10
    }
})
export default Flatlist