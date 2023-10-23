const container = document.querySelector(".container"),
      pwShowHide1 = document.querySelectorAll(".showHidePw1"),
      pwShowHide2 = document.querySelectorAll(".showHidePw2"),
      pwFields1 = document.querySelectorAll(".password1"),
      pwFields2 = document.querySelectorAll(".password2"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide1.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields1.forEach(pwField1 =>{
                if(pwField1.type ==="password"){
                    pwField1.type = "text";

                    pwShowHide1.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField1.type = "password";

                    pwShowHide1.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    pwShowHide2.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields2.forEach(pwField2 =>{
                if(pwField2.type ==="password"){
                    pwField2.type = "text";

                    pwShowHide2.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField2.type = "password";

                    pwShowHide2.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });