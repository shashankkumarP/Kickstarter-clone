 //superhero api
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://superhero-search.p.rapidapi.com/api/heroes',
  //     headers: {
  //       'X-RapidAPI-Key': 'f3fe02bcbamshbf696f35dc9fc92p1e4116jsn73c7dd0d0536',
  //       'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  //     }
  //   };
    
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  //   axios.get("https://superhero-search.p.rapidapi.com/api/villains",{
  //     headers: {
  //         'X-RapidAPI-Key': 'f3fe02bcbamshbf696f35dc9fc92p1e4116jsn73c7dd0d0536',
  //         'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  //          }
  //   }).then((r)=>console.log("villan",r.data))
  // },[])

  //login api
  
  // useEffect(()=>{
  //    fetch(
  //     "https://masai-api-mocker.herokuapp.com/auth/register",
  //     {
  //       method: "POST",
  //       body: form_data,
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   ).then((r)=>r.json()).then((r)=>console.log(r))

    
  
  // },[])
  let register = async (e) =>{
    e.preventDefault();
    let form_data ={
        name:vl("name"),
        email:vl("email"),
        password:vl("password"),
        username:vl("username"),
        mobile:vl("mobile"),
        description:vl("discription"),

    }
    console.log(form_data);
    form_data = JSON.stringify(form_data);
    let resp = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body:form_data,
        // mode:"no-cors",
        headers:{
            "Content-Type": "application/json",

        },
    });
    let data = await resp.json();
    console.log("data",data);


};




//login



let login = async () => {
    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,
      // mode:"no-cors",

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let username = document.getElementById('username').value;
    console.log(data);
    getUserDetail(username, data.token);
    
  };

    document.getElementById("submit").addEventListener("click",login);
    let getUserDetail = async (username, token) => {
      console.log("here");
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        method:"GET",
        // mode:"no-cors",
        
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let data = await res.json();
    console.log("user data: ", data);
  };

