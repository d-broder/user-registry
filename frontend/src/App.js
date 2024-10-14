import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <div className="container mt-4">
            <h1 className="mb-4">Cadastro de Usuários</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>
                    <input type="text" id="name" className="form-control" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </form>

            <h2>Usuários Cadastrados</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
