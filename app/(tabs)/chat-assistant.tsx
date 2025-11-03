import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function ChatAssistantScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm FarmAI, your virtual farming assistant. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [quickQuestions] = useState([
    "Tomato blight identification",
    "Natural aphid control",
    "Best planting time for carrots",
    "Soil pH requirements for lettuce",
    "Water needs for potatoes",
  ]);

  const quickAnswers = {
    "Tomato blight identification": "Tomato blight appears as water-soaked spots on leaves that quickly turn brown or black. You may also see dark lesions on stems and fruits. Early blight has target-like rings, while late blight causes larger, greasy-looking spots.",
    "Natural aphid control": "To control aphids naturally, try: 1) Spraying plants with a mixture of water and a few drops of dish soap, 2) Introducing beneficial insects like ladybugs, 3) Planting companion plants like marigolds or garlic, 4) Using neem oil spray.",
    "Best planting time for carrots": "In Namibia, carrots can be planted year-round in most regions. In the Central zone, plant from January to April for harvest from April to August. In the North Central zone, plant from April to June for harvest from July to September.",
    "Soil pH requirements for lettuce": "Lettuce grows best in soil with a pH between 6.0 and 7.0. If your soil is too acidic, add lime. If it's too alkaline, add sulfur or organic matter like compost.",
    "Water needs for potatoes": "Potatoes need consistent moisture, especially during tuber development. They typically require 400-600mm of water per season. In the first part of the season, they need about 12-25mm per week, increasing to 30-35mm per week in the second part of the season.",
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    setTimeout(() => {
      let responseText = "";

      const matchedQuestion = Object.keys(quickAnswers).find(
        question => question.toLowerCase().includes(inputText.toLowerCase())
      );

      if (matchedQuestion) {
        responseText = quickAnswers[matchedQuestion as keyof typeof quickAnswers];
      } else if (inputText.toLowerCase().includes("hello") || inputText.toLowerCase().includes("hi")) {
        responseText = "Hello! How can I assist you with your farming questions today?";
      } else if (inputText.toLowerCase().includes("help")) {
        responseText = "I can help you with information about crop diseases, planting schedules, pest control, soil management, and more. Feel free to ask any farming-related question!";
      } else {
        responseText = "That's a great question! For specific information about this topic, I recommend consulting the NAB Vegetable Production Guide or contacting your local agricultural extension office. Is there anything else I can help you with?";
      }

      const assistantMessage = {
        id: messages.length + 2,
        text: responseText,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    handleSend();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <View style={styles.header}>
        <Text style={styles.title}>FarmAI Chat</Text>
        <Text style={styles.subtitle}>Your virtual farming assistant</Text>
      </View>

      <View style={styles.quickQuestions}>
        <Text style={styles.sectionTitle}>Quick Questions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {quickQuestions.map((question, index) => (
            <TouchableOpacity
              key={index}
              style={styles.quickQuestionButton}
              onPress={() => handleQuickQuestion(question)}
            >
              <Text style={styles.quickQuestionText}>{question}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === "user" ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                message.sender === "user" ? styles.userMessageText : styles.assistantMessageText,
              ]}
            >
              {message.text}
            </Text>
            <Text style={styles.timestamp}>
              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask a farming question..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  quickQuestions: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  quickQuestionButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  quickQuestionText: {
    fontSize: 12,
    color: "#333",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
  },
  assistantMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: "white",
  },
  assistantMessageText: {
    color: "#333",
  },
  timestamp: {
    fontSize: 10,
    color: "#999",
    marginTop: 5,
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});