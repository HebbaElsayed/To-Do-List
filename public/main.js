
        const btn = document.querySelectorAll(".delete")
        btn.forEach((elment,i)=>{
  element.addEventListener("click",(eo)=> {
        fetch(`/${taskID}`,{method:"DELETE"})
        .then((response) => response.json())
        .then((data) =>  window.location.href= data.link)
        .catch((err) => { console.log(err);  })  
        
      })
    })

     