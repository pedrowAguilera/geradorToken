import React, {useState} from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons/'
import * as Clipboard from 'expo-clipboard'

export function CaixaToken({ token, removerToken }) {
    const [lixo, setLixo] = useState("trash");

    const copiarToken = async () => {
        await Clipboard.setStringAsync(token);
        alert("Token copiado para área de transferência.");
    };

    const deleteTokens = () => {
        setTimeout(() => {
            setLixo("trash-outline");
            setTimeout(() => {
                removerToken();
            }, 300);
        }, 100);
    };

    return (
        <View style={ESTILOS.caixa}>
            <Pressable onPress={copiarToken}>
                <Text style={ESTILOS.text}>
                    {token}
                </Text>
            </Pressable>
            <Pressable onPress={deleteTokens}>
                <Ionicons size={25} color={"#fff"} name={lixo} />
            </Pressable>
        </View>
    );
}

const ESTILOS = StyleSheet.create({
    caixa: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff"
    }
})