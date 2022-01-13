const submissionHandling = document.addEventListener(
  "submit",
  function (event) {
    event.preventDefault(); //Overiding automatic submission

    let listItem = document.getElementById("list-item").value;
    let newLi = document.createElement("li"); //New empty li element
    newLi.append(listItem); //add submitted item to empty li
    document.getElementById("list").appendChild(newLi);
  }
);
