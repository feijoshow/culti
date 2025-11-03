// app/screens/ChatAssistantScreen.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, spacing, typography } from '../lib/theme';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatAssistantScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm FarmAI, your virtual farming assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const quickQuestions = [
    "Tomato blight identification",
    "Natural aphid control",
    "Best planting time for carrots",
    "Soil pH requirements for lettuce",
    "Water needs for potatoes",
    "How to control cutworms",
    "Best fertilizer for cabbage",
    "When to harvest broccoli",
  ];

  const quickAnswers: { [key: string]: string } = {
    "tomato blight": "Tomato blight appears as water-soaked spots on leaves that quickly turn brown or black. You may also see dark lesions on stems and fruits. Early blight has target-like rings, while late blight causes larger, greasy-looking spots. Remove infected leaves and apply copper-based fungicide.",
    "aphid control": "To control aphids naturally: 1) Spray plants with a mixture of water and a few drops of dish soap, 2) Introduce beneficial insects like ladybugs, 3) Plant companion plants like marigolds or garlic, 4) Use neem oil spray weekly.",
    "carrots planting": "In Namibia, carrots can be planted year-round in most regions. In the Central zone, plant from February to March for harvest from May to June. In the North Central zone, plant from January to May for harvest from March to July.",
    "lettuce ph": "Lettuce grows best in soil with a pH between 6.0 and 7.0. If your soil is too acidic, add lime. If it's too alkaline, add sulfur or organic matter like compost.",
    "potatoes water": "Potatoes need consistent moisture, especially during tuber development. They typically require 400-600mm of water per season. In the first part of the season, they need about 12-25mm per week, increasing to 30-35mm per week in the second part.",
    "cutworms": "To control cutworms: 1) Place cardboard collars around seedlings, 2) Remove weeds from around plants, 3) Apply beneficial nematodes to soil, 4) Use Bacillus thuringiensis (Bt) as biological control, 5) Hand-pick at night with a flashlight.",
    "cabbage fertilizer": "Cabbage is a heavy feeder. Apply 374kg N, 66kg P, and 396kg K per hectare. Split nitrogen applications: half at planting, quarter 3 weeks later, and quarter 6 weeks after planting.",
    "broccoli harvest": "Harvest broccoli when the head is firm, tight, and dark green before the flowers open. Cut the central head with 5-6 inches of stem. Side shoots will continue to produce smaller heads for additional harvests.",
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responseText = generateResponse(inputText);
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prevMessages => [...prevMessages, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Check for specific keywords in the query
    for (const [keyword, answer] of Object.entries(quickAnswers)) {
      if (lowerQuery.includes(keyword)) {
        return answer;
      }
    }
    
    // General responses
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello! How can I assist you with your farming questions today?";
    }
    
    if (lowerQuery.includes('help')) {
      return "I can help you with information about crop diseases, planting schedules, pest control, soil management, and more. Feel free to ask any farming-related question!";
    }
    
    if (lowerQuery.includes('disease')) {
      return "For disease identification, I recommend using the Crop Doctor feature to take a photo of your plant. You can also ask me about specific disease symptoms and treatments.";
    }
    
    if (lowerQuery.includes('planting')) {
      return "For planting schedules, check the Weather & Calendar feature and select your region. This will show you the optimal planting times for various crops in your area.";
    }
    
    if (lowerQuery.includes('fertilizer')) {
      return "Use the Planning Tools calculator to determine exact fertilizer requirements for your crops. You'll need to select the crop and field size to get precise recommendations.";
    }
    
    // Default response
    return "That's a great question! For specific information about this topic, I recommend checking the relevant features in the app or consulting the NAB Vegetable Production Guide. Is there anything else I can help you with?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSend(), 100);
  };

  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                message.sender === 'user' ? styles.userMessageText : styles.assistantMessageText,
              ]}
            >
              {message.text}
            </Text>
            <Text style={styles.timestamp}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        ))}
        
        {isTyping && (
          <View style={[styles.messageContainer, styles.assistantMessage]}>
            <View style={styles.typingIndicator}>
              <View style={[styles.typingDot, { backgroundColor: colors.textLight }]} />
              <View style={[styles.typingDot, { backgroundColor: colors.textLight }]} />
              <View style={[styles.typingDot, { backgroundColor: colors.textLight }]} />
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask a farming question..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !inputText.trim() && styles.disabledButton]} 
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: '#fff',
  },
  subtitle: {
    ...typography.body2,
    color: '#fff',
    marginTop: spacing.xs,
  },
  sectionTitle: {
    ...typography.body1,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
    color: colors.text,
  },
  quickQuestions: {
    padding: spacing.md,
    backgroundColor: colors.card,
    margin: spacing.sm,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  quickQuestionButton: {
    backgroundColor: colors.background,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    marginRight: spacing.xs,
  },
  quickQuestionText: {
    ...typography.caption,
    color: colors.text,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  messagesContent: {
    paddingVertical: spacing.sm,
  },
  messageContainer: {
    marginVertical: spacing.xs,
    maxWidth: '80%',
    padding: spacing.sm,
    borderRadius: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.card,
  },
  messageText: {
    ...typography.body2,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  assistantMessageText: {
    color: colors.text,
  },
  timestamp: {
    ...typography.caption,
    color: colors.textLight,
    marginTop: spacing.xs,
    alignSelf: 'flex-end',
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.xs,
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    backgroundColor: colors.background,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: colors.border,
  },
});

export default ChatAssistantScreen;