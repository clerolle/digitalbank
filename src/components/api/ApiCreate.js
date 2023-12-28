
const ApiCreate = (user) => {

        fetch("http://127.0.0.1:8000/user/create",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(user)
            })
            .then((res) => res.json())
            .then((data) => {
                return data
          });

}

export { ApiCreate } 