import React, { useState } from 'react'
import { View, Text, StyleSheet, RefreshControl, SectionList } from "react-native"
const Sectionlist = () => {


    const sectionData = [
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
        },
        {
            title: 'Title 2',
            data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
        },
        {
            title: 'Title 3',
            data: ['Item 3-1'],
        },
        {
            title: 'Title 4',
            data: ['Item 4-1', 'Item 4-2'],
        },
    ]

    // const [sectionData, setSectionData] = useState([
    //     {
    //         title: 'Title 1',
    //         data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    //     }
    // ])

    const [refreshing, setRefreshing] = useState(false);

    // const onRefresh = () => {
    //     setRefreshing(true);
    //     const add = sectionData.length + 1;
    //     setSectionData([...sectionData,
    //     {
    //         title: "Title" + add,
    //         data: ['Item' + add + "-1", 'Item' + add + "-2", 'Item' + add + "-3"]
    //     }
    //     ])
    //     setRefreshing(false)
    // }

    return (

        <SectionList
            keyExtractor={(item, index) => index.toString()}
            sections={sectionData}
            renderItem={({ item }) => (
                <View style={{ alignItems: "center", justifyContent: "center", margin: 20 }}>
                    <Text style={styles.text}>
                        {item}
                    </Text>
                </View>
            )
            }
            renderSectionHeader={({ section }) => (
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "red", margin: 20 }}>
                    <Text style={styles.text}>
                        {section.title}
                    </Text>
                </View>
            )}

        // refreshControl={
        //     < RefreshControl
        //         refreshing={refreshing}
        //         onRefresh={onRefresh}
        //         colors={['#00ff00']}
        //     />
        // }
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
export default Sectionlist