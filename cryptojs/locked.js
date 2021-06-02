function unlock() {
  let image = document.getElementById("blocked");
  let passcode = document.getElementById("passcode").value;
  let content = document.getElementById("locked_content");
  let decrypted = CryptoJS.AES.decrypt(content.innerHTML, passcode);
  let output = decrypted.toString(CryptoJS.enc.Utf8);    
  let blocked =  document.getElementById("blocked");
  if (output != "") {
    content.innerHTML = output;
    content.style.display = "block";
    document.getElementById("title").innerHTML = "This page was locked";
    blocked.style.display="none";
} else {
    blocked.innerHTML="Unauthorised access declined!"
  }
}
