import { db } from './firebase'; 
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const clientsCollection = collection(db, 'clients');

// Create
export const addClient = async (clientData) => {
  const docRef = await addDoc(clientsCollection, clientData);
  return docRef.id;
};

// Read All
export const getClients = async () => {
  const snapshot = await getDocs(clientsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Read One
export const getClientById = async (clientId) => {
  const docRef = doc(db, 'clients', clientId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Cliente non trovato');
  }
};

// Update
export const updateClient = async (clientId, clientData) => {
  const docRef = doc(db, 'clients', clientId);
  await updateDoc(docRef, clientData);
};

// Delete
export const deleteClient = async (clientId) => {
  const docRef = doc(db, 'clients', clientId);
  await deleteDoc(docRef);
};

