let buttonLogin = document.getElementById('login');
buttonLogin.addEventListener('click', ()=>{
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    login(email, pass);
})

const login = async (email,pass) =>
{
    try
    {
        const response = await fetch("https://fakestoreapi.com/users/");
        const users = await response.json();
        console.log("users from json: " , users);
        localStorage.setItem('users', JSON.stringify(users));
        let found = false;
        for (const user of users)
        {
            if(email.toLowerCase() === user.email && pass === user.password)
            {
                console.log('login correcto');
                localStorage.setItem('user', JSON.stringify(user));
                found = true;
                window.location.href = "index.html";
            }
        }
        if(!found)
        {
            console.log('usuario y/o contraseñas incorrectas');
        }
    }
    catch(error)
    {
        console.log(error);
    }
}