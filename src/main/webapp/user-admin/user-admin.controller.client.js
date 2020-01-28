(function () {
    let userService = new AdminUserServiceClient()
    let users = []
    let tableBody = $(".wbdv-tbody");
    let usernameFld = $("#usernameFld");
    let passwordFld = $("#passwordFld");
    let firstNameFld = $("#firstNameFld");
    let lastNameFld = $("#lastNameFld");
    let roleFld = $("#roleFld");
    let userRowTemplate = $(".wbdv-template")

    let createBtn = $(".wbdv-create")
    let updateBtn = $(".wbdv-update")
    let searchBtn = $(".wbdv-search")

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
        let newRow = userRowTemplate.clone()
        newRow.removeClass("wbdv-template wbdv-hidden")
        newRow.find(".wbdv-username").html(user.getUsername())
        newRow.find(".wbdv-first-name").html(user.getFirstname())
        newRow.find(".wbdv-last-name").html(user.getLastname())
        newRow.find(".wbdv-role").html(user.getRole())
        newRow.find(".wbdv-remove").click(() => {
            deleteUser(index)
        })
        newRow.find(".wbdv-edit").click(() => {
            editUser(index)
        })
        tableBody.append(newRow)
    }

    const renderUsers = () => {
        tableBody.empty()
        for(let u=0; u<users.length; u++) {
            renderUser(users[u], u)
            console.log(users[u].getUserId())
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
                user.setUserId(newUser._id)
                users.push(user)
                renderUser(user, users.length - 1)
                console.log(users.length - 1)
                console.log(users)
            })
    }
    createBtn.click(createUser)
    
    // const searchUser = () => {
    //     const username = usernameFld.val() 
    //     const firstname = firstNameFld.val()
    //     const lastname = lastNameFld.val()
    //     const role = roleFld.val()
        
    // }
    // searchBtn.click(searchUser)

    const clearForm = () => {
        usernameFld.val("")
        firstNameFld.val("")
        lastNameFld.val("")
        roleFld.val("FACULTY")
    }

    findAllUsers()
})();
