(function () {
    let userService = new AdminUserServiceClient()
    let users = []
    let tableBody = $(".wbdv-tbody")
    let usernameFld = $("#usernameFld")
    let firstnameFld = $("#firstNameFld")
    let lastnameFld = $("#lastNameFld")
    let roleFld = $("#roleFld")

    const deleteUser = (index) => {
        const userId = users[index]._id
        userService.deleteUser(userId).then(response =>{
            users.splice(index, 1)
            renderUsers()
        })
    }

    let currentUserId = -1
    const editUser = index => {
        const userId = users[index].getUserId();
        currentUserId = userId;
        userService.findUserById(userId).then(user => {
            usernameFld.val(user.username)
            firstnameFld.val(user.firstname)
            lastnameFld.val(user.lastname)
            roleFld.val(user.role)
        })
    }

    const renderUsers = () => {
        tableBody.empty()
        for(let u=0; u<users.length; u++) {
            let row = $("<tr class=\"wbdv-template wbdv-user wbdv-hidden\">")
            let usernameFld = $("<td class=\"wbdv-username\">" + users[u].getUsername() + "</td>")
            let passwordFld = $("<td>&nbsp;</td>")
            let firstnameFld = $("<td class=\"wbdv-first-name\">" + users[u].getFirstname() + "</td>")
            let lastnameFld = $("<td class=\"wbdv-first-name\">" + users[u].getLastname() + "</td>")
            let roleFld = $("<td class=\"wbdv-role\">" + users[u].getRole() + "</td>")
            let actionFld = $("<td class=\"wbdv-actions\"></td>")
            let spanFld = $("<span class=\"float-right\">")
            let removeBtn = $("<i id=\"wbdv-remove\" class=\"fa-2x fa fa-times wbdv-remove\"></i>")
            removeBtn.click(() => {
                deleteUser(u)
            })
            let editBtn = $("<i id=\"wbdv-edit\" class=\"fa-2x fa fa-pencil wbdv-edit\"></i>")
            editBtn.click(() => {
                editUser(u)
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
        let firstname = firstnameFld.val()
        let lastname = lastnameFld.val()
        let role = roleFld.val()
        const user = new User(username, firstname, lastname, role)
        clearForm()
        if(username === "" || firstname === "" || lastname ==="") 
            return
        userService.updateUser(currentUserId, user).then(newUser => {    
            findAllUsers()
        })
    }
    const updateBtn = $(".wbdv-update")
    updateBtn.click(updateUser)

    const createUser = () => {
        const username = usernameFld.val() 
        const firstname = firstnameFld.val()
        const lastname = lastnameFld.val()
        const role = roleFld.val()
        clearForm()  
        if(username === "" || firstname === "" || lastname ==="") 
            return
        const user = new User(username, firstname, lastname, role)
        userService.createUser(user).then(newUser => {
                findAllUsers()
            })
    }
    let createBtn = $(".wbdv-create")
    createBtn.click(createUser) 

    const clearForm = () => {
        usernameFld.val("")
        firstnameFld.val("")
        lastnameFld.val("")
        roleFld.val("FACULTY")
    }

    findAllUsers()
})();
