import React, { useEffect, useState } from 'react';
import { getClients, addClient, deleteClient } from '../services/db';
import ClientCard from '../components/ClientCard';

const DashboardClienti = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newClient, setNewClient] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error('Errore nel recuperare i clienti:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleDeleteClient = async (clientId) => {
    try {
      await deleteClient(clientId);
      setClients(prevClients => prevClients.filter(client => client.id !== clientId));
    } catch (error) {
      console.error('Errore nell\'eliminare il cliente:', error);
    }
  };

  const handleAddClient = async () => {
    try {
      const newClientId = await addClient(newClient);
      setClients(prevClients => [...prevClients, { id: newClientId, ...newClient }]);
      setNewClient({ name: '', email: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Errore nell\'aggiungere il cliente:', error);
    }
  };

  if (loading) return <div>Caricamento clienti...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista Clienti</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showForm ? 'Annulla' : 'Aggiungi Cliente'}
      </button>

      {showForm && (
        <div className="mb-4 p-4 border rounded shadow">
          <input
            type="text"
            placeholder="Nome"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            className="border p-2 mb-2 w-full rounded"
          />
          <button
            onClick={handleAddClient}
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Salva Cliente
          </button>
        </div>
      )}

      <div className="grid gap-4">
        {clients.map(client => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={() => {}}
            onDelete={handleDeleteClient}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardClienti;

