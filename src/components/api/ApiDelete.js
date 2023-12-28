
const ApiDelete = (ids) => {
    let info = {"id": ids}
    fetch("http://127.0.0.1:8000/user/update",{
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
      });

}

export { ApiDelete } 