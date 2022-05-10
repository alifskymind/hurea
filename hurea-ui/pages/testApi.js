
// set api path
export const getStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {

        props: {ninjas : data}
    }
}

// use api path
export default function TestApi ({ninjas})  {
  return (

    <div>

      <h1>List ninjas</h1>

      {ninjas.map(ninja => (

            <div key={ninja.id} >
              <a>
                  <h3>{ninja.name}</h3>
              </a>

              <a>
                  <h3>{ninja.address.street}</h3>
              </a>
            </div>
      ))}

    </div>

  )
}