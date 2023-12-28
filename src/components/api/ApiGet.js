const ApiGet = () => {

    let response;
    fetch("http://127.0.0.1:8000/user/get")
        .then((res) => res.json())
        .then((data) => {
            return data 
      });

}

export { ApiGet } 