import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeigth] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        // const imcValue = (weight/(height*height));
        // if()
        // return setImc((weight/(height*height)).toFixed(2))
        return parseFloat(setImc((weight/(height*height))))
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeigth(null)
            setMessageImc("Se imc é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    onChange={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChange={setWeigth}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validationImc()}
                    title={textButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}