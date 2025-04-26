import React from 'react';

const ClientCard = ({ client, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{client.name || 'Senza Nome'}</h2>
      <p className="text-gray-600">{client.email || 'Senza Email'}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(client)}
          className="bg-yellow-400 text-white px-4 py-2 rounded"
        >
          Modifica
        </button>
        <button
          onClick={() => onDelete(client.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Elimina
        </button>
      </div>
    </div>
  );
};

export default ClientCard;

