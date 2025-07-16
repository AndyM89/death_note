// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [note, setNote] = useState(''); // texte de la nouvelle note
  const [notes, setNotes] = useState<string[]>([]); // liste des notes

  const ajouterNote = () => {
    if (note.trim() !== '') {
      setNotes([note, ...notes]); // ajoute la note en haut
      setNote(''); // efface la zone de saisie
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>📝 Bloc-notes</Text>

      <TextInput
        style={styles.input}
        placeholder="Écris ta note ici..."
        value={note}
        onChangeText={setNote}
        multiline
      />

      <Button title="Sauvegarder la note" onPress={ajouterNote} />

      <ScrollView style={styles.notes}>
        {notes.map((n, index) => (
          <Text key={index} style={styles.note}>{n}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  titre: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    height: 100,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f9f9f9'
  },
  notes: { marginTop: 20 },
  note: {
    padding: 10,
    backgroundColor: '#e6f7ff',
    marginBottom: 10,
    borderRadius: 6
  }
});
