import React, { useEffect, useState } from 'react';
import { getClients } from '../services/db';
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
            onDelete={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardClienti;

