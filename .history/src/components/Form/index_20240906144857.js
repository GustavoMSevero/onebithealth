import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeigth] = useState(null)
    const [messageImc, SetMessageImc] = useState("Preencha o peso e altura")
    const [] = useState(null)
    const [] = useState(null)

    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Button title="Calcular IMC" />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}