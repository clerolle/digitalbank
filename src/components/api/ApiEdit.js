
const ApiEdit = (user) => {

    fetch("http://127.0.0.1:8000/user/update",{
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
      });

}

export { ApiEdit } 