
// set api path
export const getStaticProps = async() => {

    const res = await fetch('http://localhost:8080/api/v1/users');
    const data = await res.json();

    return {

        props: {users : data}
    }
}

// use api path
export default function TestApiBackend ({users})  {
    return (

        <div>

        <h1>List ninjas</h1>

        {users.map(user => (

                <div key={user.id} >
                <a>
                    <h3>{user.firstName}</h3>
                </a>

                </div>
        ))}

        </div>

    )
}