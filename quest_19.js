function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = { name, email, phone };
    axios.post("https://crudcrud.com/api/561a058f6b2d4b70a1b66ac0c26f82b8/appointmentData", obj)
    .then((response) => {
        showUserOnScreen(response.data);
        console.log(response);
    })
    .catch((err) => {
        document.body.innerHTML += "<h4>Something went wrong</h4>";
        console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/561a058f6b2d4b70a1b66ac0c26f82b8/appointmentData")
    .then((response) => {
        console.log(response);
        response.data.forEach((obj) => showUserOnScreen(obj));
    })
    .catch((err) => {
        console.log(err);
    });
});

function showUserOnScreen(obj) {
    const parentNode = document.getElementById('listofitems');
    const childnode = `<li id=${obj._id}>${obj.name} - ${obj.email} - ${obj.phone} 
                    <button onclick=DeleteUser('${obj._id}')>Delete User</button>
                    <button onclick="editUserDetails('${obj._id}','${obj.name}','${obj.email}','${obj.phone}')">Edit User</button>
                    </li>`;
    parentNode.innerHTML += childnode;
}

function editUserDetails(id, name, email, phone) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    DeleteUser(id);
}

function DeleteUser(id) {
    axios.delete(`https://crudcrud.com/api/561a058f6b2d4b70a1b66ac0c26f82b8/appointmentData/${id}`)
    .then((res) => {
        removeUserFromScreen(id);
    })
    .catch((err) => {
        console.log(err);
    });
}

function removeUserFromScreen(id) {
    const parentNode = document.getElementById('listofitems');
    const childNodeToBeRemoved = document.getElementById(id);
    if (childNodeToBeRemoved) {
        parentNode.removeChild(childNodeToBeRemoved);
    }
}
