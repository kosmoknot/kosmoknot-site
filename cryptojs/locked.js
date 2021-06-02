let count = 0; 
function unlock() {
  let passcode = document.getElementById("passcode").value;
  let content = document.getElementById("locked_content");
  let decrypted = CryptoJS.AES.decrypt(content.innerHTML, passcode);
  let output = decrypted.toString(CryptoJS.enc.Utf8);    
  if (output != "") {
    content.innerHTML = output;
    content.style.display = "block";
    document.getElementById("title").innerHTML = "This page was locked";
    document.getElementById("locked").style.display="none";
    document.getElementById("inputs").style.display="none";
    
} else {
    count++;
    document.getElementById("locked").innerHTML+="Nope! "+(10-count)+" attempts remaining <br>"
  }
  if(count==10){
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML="Mission Failed!"
    body.style="font-size:50px;text-align: center;"
  }
}
