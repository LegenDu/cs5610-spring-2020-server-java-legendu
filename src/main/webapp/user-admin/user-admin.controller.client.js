(function () {
    let userService = new AdminUserServiceClient()
    let users = []
    let tableBody = $(".wbdv-tbody");
    let usernameFld = $("#usernameFld");
    let passwordFld = $("#passwordFld");
    let firstNameFld = $("#firstNameFld");
    let lastNameFld = $("#lastNameFld");
    let roleFld = $("#roleFld");

    let createBtn = $(".wbdv-create")
    let updateBtn = $(".wbdv-update")

    const deleteUser = (index) => {
        const userId = users[index]._id
        userService.deleteUser(userId).then(response =>{
            users.splice(index, 1)
            renderUsers()
        })
    }

    const findUserById = (userId) => {
        return userService.findUserById(userId)
    }

    let currentUserId = -1
    const editUser = index => {
        const userId = users[index].getUserId();
        currentUserId = userId;
        findUserById(userId).then(user => {
            usernameFld.val(user.username)
            firstNameFld.val(user.firstname)
            lastNameFld.val(user.lastname)
            roleFld.val(user.role)
        })
    }

    const renderUser = (user, index) => {
        let row = $("<tr class=\"wbdv-template wbdv-user wbdv-hidden\">")
        let usernameFld = $("<td class=\"wbdv-username\">" + user.getUsername() + "</td>")
        let passwordFld = $("<td>&nbsp;</td>")
        let firstnameFld = $("<td class=\"wbdv-first-name\">" + user.getFirstname() + "</td>")
        let lastnameFld = $("<td class=\"wbdv-first-name\">" + user.getLastname() + "</td>")
        let roleFld = $("<td class=\"wbdv-role\">" + user.getRole() + "</td>")
        let actionFld = $("<td class=\"wbdv-actions\"></td>")
        let spanFld = $("<span class=\"float-right\">")
        let removeBtn = $("<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>")
        removeBtn.click(() => {
            deleteUser(index)
        })
        let editBtn = $("<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil wbdv-edit\"></i>")
        editBtn.click(() => {
            editUser(index)
        })
        spanFld.append(removeBtn)
        spanFld.append(editBtn)
        actionFld.append(spanFld)
        row.append(usernameFld)
        row.append(passwordFld)
        row.append(firstnameFld)
        row.append(lastnameFld)
        row.append(roleFld)
        row.append(actionFld)
        tableBody.append(row)
    }

    const renderUsers = () => {
        tableBody.empty()
        for(let u=0; u<users.length; u++) {
            renderUser(users[u], u)
        }
    }

    const findAllUsers = () => {
        users = []
        userService.findAllUsers()
            .then((theUsers) => {
                for(let i=0; i < theUsers.length; i++){
                    let user = new User(theUsers[i].username, 
                        theUsers[i].firstname, theUsers[i].lastname, 
                        theUsers[i].role, theUsers[i]._id)
                    users.push(user);
                }
                renderUsers()
            })     
    }

    const updateUser = () => {
        let username = usernameFld.val()
        let firstname = firstNameFld.val()
        let lastname = lastNameFld.val()
        let role = roleFld.val()
        const user = new User(username, firstname, lastname, role)
        clearForm()
        if(username === "" || firstname === "" || lastname ==="") 
            return
        userService.updateUser(currentUserId, user).then(newUser => {    
            findAllUsers()
        })
    }
    updateBtn.click(updateUser)

    const createUser = () => {
        const username = usernameFld.val() 
        const firstname = firstNameFld.val()
        const lastname = lastNameFld.val()
        const role = roleFld.val()
        clearForm()  
        if(username === "" || firstname === "" || lastname ==="") 
            return
        const user = new User(username, firstname, lastname, role)
        userService.createUser(user).then(newUser => {
                findAllUsers()
            })
    }
    createBtn.click(createUser) 

    const clearForm = () => {
        usernameFld.val("")
        firstNameFld.val("")
        lastNameFld.val("")
        roleFld.val("FACULTY")
    }

    findAllUsers()
})();
