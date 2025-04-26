import React, { useEffect, useState } from 'react';
import { getClients, deleteClient } from '../services/db';
import ClientCard from '../components/ClientCard';

const DashboardClienti = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Caricamento clienti...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista Clienti</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Aggiungi Cliente</button>
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

