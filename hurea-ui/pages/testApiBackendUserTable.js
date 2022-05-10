import { React, useState, useEffect } from "react";

// test calling rest api
const TestApiBackendUserTable = ({ user }) => {

    // default attributes for rest api calls
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [responseUser, setResponseUser] = useState(null);

    // get method using useEffect
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(USER_API_BASE_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const users = await response.json();
          setUsers(users);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [user, responseUser]);

    // view to show
    return (

        <div>

        {/* test show basic header */}
        {users?.map(user => (

            <div key={user.id} >

                <a>
                    <h3>{user.firstName}</h3>
                </a>

            </div>
        ))}


            {/* test show on table */}
            <div class="overflow-x-auto">

                <table class="table w-full">

                    {/* header */}
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>password</th>
                        </tr>
                    </thead>

                    {/* data */}
                    <tbody>

                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
  };

  export default TestApiBackendUserTable;