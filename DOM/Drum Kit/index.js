for i in i = 0; i <document.querySelectorAll(".drum").length; i++) {  

    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

        function handleclick() {
        alert("I got clicked");
        }
}