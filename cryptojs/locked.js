window.onload = function () {
  var show = document.getElementById("show");
  const select = document.getElementById("select");
  select.onclick = async () => {
    var roku_options ={
      types: [
        {
          description: 'scrolls',
          accept: {
            'scrolls/*': ['.scrol']
          }
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false
    };
    const [fileHandle] = await showOpenFilePicker(roku_options)
    const roku = await fileHandle.getFile();
    const contents = await roku.text();
    show.innerText = contents;
  }
}

let count = 0;
function unlock() {
  let passcode = document.getElementById("passcode").value;
  let content = document.getElementById("locked_content");
  let decrypted = CryptoJS.AES.decrypt(content.innerHTML, passcode);
  let output = decrypted.toString(CryptoJS.enc.Utf8);
  if (output != "") {
    content.innerHTML = output;
    content.style.display = "block";
    document.getElementById("locked").style.display = "none";
    document.getElementById("inputs").style.display = "none";

  } else {
    count++;
    document.getElementById("locked").innerHTML += "Rokutal says, " + (3 - count) + " attempts remaining <br>"
  }
  if (count == 3) {
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = "Rokutal Flew Away"
    body.style = "font-size:50px;text-align: center;"
  }
}
