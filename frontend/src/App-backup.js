// src/App.js
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);

    // Função para cadastrar um novo usuário
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/users", { name, email });
            setName(""); // Limpa o campo de nome
            setEmail(""); // Limpa o campo de email
            fetchUsers(); // Atualiza a lista de usuários após o cadastro
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
        }
    };

    // Função para buscar usuários cadastrados
    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    // useEffect para buscar usuários quando o componente é montado
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Cadastro de Usuários</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>

            <h2>Usuários Cadastrados</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
