import React from "react";
import { View, Text, StyleSheet } from "react-native"
const Flex = () => {
    return (
        <View style={styles.body}>
            <View style={styles.row1}>
                <View style={styles.view1}>
                    <Text style={styles.text1}>
                        1
                    </Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text1}>
                        2
                    </Text>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.text1}>
                        3
                    </Text>
                </View>
            </View>


            <View style={styles.row2}>
                <View style={styles.view4}>
                    <Text style={styles.text1}>
                        4
                    </Text>
                </View>
            </View>

            <View style={styles.row2}>
                <View style={styles.view5}>
                    <Text style={styles.text1}>
                        5
                    </Text>
                </View>
            </View>

            <View style={styles.row3}>
                <View style={styles.view6}>
                    <Text style={styles.text1}>
                        6
                    </Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.text1}>
                        7
                    </Text>
                </View>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1,
        // alignItems: "stretch",
        // justifyContent: "center"
    },
    row1: {
        flexDirection: "row",

    },
    row2: {
        flexDirection: "row",
        // flex:1
    },
    row3: {
        flex: 1,
        flexDirection: "row",
        // alignItems: "stretch",
        // justifyContent: "flex-end"
    },
    view1: {
        backgroundColor: "blue",
        flex: 1,
        width: 100,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view2: {
        backgroundColor: "red",
        flex: 2,
        width: 100,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view3: {
        backgroundColor: "yellow",
        flex: 3,
        width: 100,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view4: {
        backgroundColor: "pink",
        flex: 1,
        width: 100,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view5: {
        backgroundColor: "green",
        flex: 1,
        width: 100,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view6: {
        backgroundColor: "#00ffff",
        flex: 1,
        flexDirection: "column",
        width: 100,
        // height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    view7: {
        backgroundColor: "#ff00ff",
        flex: 1,
        width: 100,
        // height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    text1: {
        color: "black",
        fontSize: 30
    }
})
export default Flex;