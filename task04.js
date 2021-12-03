let username=prompt("username daxil edin:")
let password=prompt("password daxil edin:")

    if(username=="" || password==""){
        alert("Deyerler bos ola bilmez");
    }else{
        if(username=='admin' && password==123456){
            alert("Tebrikler siz sisteme daxil oldugunuz");
        }else{
            alert("username duz deyil");
        }
    }
    
    