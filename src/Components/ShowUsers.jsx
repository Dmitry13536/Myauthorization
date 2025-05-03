import React from "react";
import { useParams } from "react-router-dom";
import { useMyNavigate } from "../useMyNavigate";
import MyButton from "../UI/button/MyButton";

const ShowUsers = ({ users }) => {
  const { id } = useParams();
  const navigate = useMyNavigate();

  return (
    <div className="profile">
      <table>
        <thead>
          <th>id</th>
          <th scope="col">Name</th>
          <th>Surname</th>
          <th>Patronymic</th>
          <th>email</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.father}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyButton onClick={() => navigate(`/${id}`)}>Назад</MyButton>
    </div>
  );
};

export default ShowUsers;
