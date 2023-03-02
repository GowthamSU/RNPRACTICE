import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native"
const List = () => {
    const [list, setList] = useState([
        { key: 1, value: "List1" },
        { key: 2, value: "List2" },
        { key: 3, value: "List3" },
        { key: 4, value: "List4" },
        { key: 5, value: "List5" },
        { key: 6, value: "List6" },
        { key: 7, value: "List7" },
        { key: 8, value: "List8" },
        { key: 9, value: "List9" },
        { key: 10, value: "List10" }
    ])
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setList([...list, { key: 20, value: "List20" }])
        setRefreshing(false)
    }

    return (
        <ScrollView style={{ flex: 1, flexDirection: "column" }}
            refreshControl={
                < RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#00ff00']}
                />
            }
        >
            {
                list.map((lists, i) => {
                    return (
                        <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "red", margin: 20 }} key={lists.key}>
                            <Text style={styles.text}>
                                {lists.value}
                            </Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60,
        color: "white",
        margin: 10
    }
})
export default List