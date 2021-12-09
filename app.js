

 var contentBox = document.getElementById("contentBox")


 function addBook(){
     var inputTitle = document.getElementById("inputTitle")
     var inputText = document.getElementById("inputText")

     if(inputTitle.value.length > 3 && inputText.value.length > 3){

        var div = document.createElement("div")
        div.className = "col-lg-3 col-md-5 col-sm-9 my-div"
        var h2 = document.createElement("h2")
        h2.className = "my-h2"
        var para = document.createElement("p")
        para.className = "my-para"
   
        var title = document.createTextNode(inputTitle.value)
        var text = document.createTextNode(inputText.value)
   
        h2.appendChild(title)
        para.appendChild(text)
        div.appendChild(h2)
        div.appendChild(para)
        contentBox.appendChild(div)
   
       var titleEditBtn = document.createElement("button");
       titleEditBtn.className="fal fa-h2 btn btn-primary titleEditBtn"
       titleEditBtn.setAttribute("onclick","titleEditList(this)");
   
       var editBtn = document.createElement("button");
       editBtn.className="far fa-text btn btn-primary textEditBtn"
       editBtn.setAttribute("onclick","editDiv(this)");
   
       var delBtn = document.createElement("button");
       delBtn.className="fas fa-trash btn btn-primary delBtn"
       delBtn.setAttribute("onclick","delDiv(this)");
   
       var btnSec = document.createElement("section")
       btnSec.className = "buttonSection"
       btnSec.appendChild(titleEditBtn)
       btnSec.appendChild(editBtn)
       btnSec.appendChild(delBtn)
   
       div.appendChild(btnSec)
       console.log(div)
   
       inputTitle.value = "";
       inputText.value = "";
     }

     else{
        alert("Please Check Input Value Your Input Is Empty ...")
     }

 }


 function titleEditList(t){
    var titleUpdate = prompt("Enter Title", t.parentNode.previousSibling.previousSibling.innerHTML);
    t.parentNode.previousSibling.previousSibling.innerHTML = titleUpdate;
 }

 function editDiv(t){    
      var textUpdate = prompt("Enter Title", t.parentNode.previousSibling.innerHTML);
      t.parentNode.previousSibling.innerHTML = textUpdate;
      console.log(textUpdate)
    }

 function clearContentBox(){
     contentBox.innerHTML = ""
 }
  
  function delDiv(e){
      e.parentNode.parentNode.remove()
  }   

