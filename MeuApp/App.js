import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from "react-native";

export default function App() {
  const [mensagem, setMensagem] = useState("");

  const [conversa, setConversa] = useState([
    {
      autor: "Loja",
      texto: "Olá! Bem-vindo ao Odisseia 🍔",
    },
    {
      autor: "Loja",
      texto: "O que você deseja pedir hoje?",
    },
  ]);

function enviarMensagem() {
    if (mensagem.trim() === "") return;

    const novaConversa = [
      ...conversa,
      {
        autor: "Cliente",
        texto: mensagem,
      },
      {
        autor: "Loja",
        texto: "✅ Pedido recebido! Já estamos preparando.",
      },
    ];

    setConversa(novaConversa);
    setMensagem("");
  }

  return (
    <View style={styles.tela}>

      <View style={styles.celular}>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.titulo}>
          Odisseia
        </Text>

        <ScrollView style={styles.chat}>

          {conversa.map((msg, index) => (

            <View
              key={index}
              style={[
                styles.bolha,
                msg.autor === "Cliente"
                  ? styles.cliente
                  : styles.loja,
              ]}
            >

              <Text style={styles.autor}>
                {msg.autor}
              </Text>

              <Text style={styles.texto}>
                {msg.texto}
              </Text>

            </View>

          ))}

        </ScrollView>

        <TextInput
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
          style={styles.input}
        />

        <Button
          title="Enviar"
          onPress={enviarMensagem}
          color="#ff5a00"
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
  },

  celular: {
    width: 340,
    height: 680,
    backgroundColor: "#fff",
    borderRadius: 35,
    padding: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff5a00",
    marginBottom: 15,
  },

  chat: {
    flex: 1,
    marginBottom: 15,
  },

  bolha: {
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    maxWidth: "80%",
  },

  cliente: {
    backgroundColor: "#dbeafe",
    alignSelf: "flex-end",
  },

  loja: {
    backgroundColor: "#ffe5d4",
    alignSelf: "flex-start",
  },

  autor: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  texto: {
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
});
  
