import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AdminDashboardScreen() {
    return (
        <LinearGradient colors = {["#6A5AE0", "#7EC8E3"]} style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>

                <Text style = {styles.header}>Admin Dashboard</Text>

                <View style = {styles.row}>
                    <View style = {styles.statCard}>
                        <Text style = {styles.statValue}>42</Text>
                        <Text style = {styles.statLabel}>Orders Today</Text>
                    </View>

                    <View style = {styles.statCard}>
                        <Text style = {styles.statValue}>R1.2k</Text>
                        <Text style = {styles.statLabel}>Revenue</Text>
                    </View>
                </View>

                <View style = {styles.chartCard}>
                    <Text style = {styles.sectionTitle}>Sales Overview</Text>

                    <View style = {styles.chartPlaceholder}>
                        <Text style = {styles.chartText}>Chart Placeholder</Text>
                    </View>
                </View>

                <View style = {styles.section}>
                    <Text style = {styles.sectionTitle}>Management</Text>

                    <TouchableOpacity style = {styles.mgmtBtn}>
                        <Text style = {styles.mgmtText}>Manage Food Items</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.mgmtBtn}>
                        <Text style = {styles.mgmtText}>View Orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.mgmtBtn}>
                        <Text style = {styles.mgmtText}>Restaurant Settings</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    scroll: { 
        padding: 20 
    },

    header: {
        fontSize: 30,
        fontWeight: "700",
        color: "white",
        marginBottom: 25
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    statCard: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.15)",
        padding: 20,
        marginRight: 10,
        borderRadius: 15,
        alignItems: "center"
    },
    statValue: {
        fontSize: 26,
        color: "white",
        fontWeight: "700"
    },
    statLabel: {
        color: "white",
        opacity: 0.9,
        marginTop: 5
    },

    chartCard: {
        backgroundColor: "rgba(255,255,255,0.15)",
        padding: 20,
        borderRadius: 15,
        marginBottom: 20
    },
    chartPlaceholder: {
        height: 180,
        backgroundColor: "rgba(255,255,255,0.25)",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    chartText: {
        color: "white",
        opacity: 0.8,
        fontStyle: "italic"
    },

    section: {
        marginBottom: 30
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white",
        marginBottom: 15
    },
    mgmtBtn: {
        backgroundColor: "white",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 12
    },
    mgmtText: {
        fontSize: 17,
        color: "#6A5AE0",
        fontWeight: "700"
    }
})