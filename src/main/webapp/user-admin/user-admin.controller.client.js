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

    function main(){}

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
    let currentIndex = -1
    const editUser = index => {
        const userId = users[index].getUserId();
        currentUserId = userId;
        currentIndex = index;
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
        if(username === "" || firstname === "" || lastname ==="" || role ==="") 
            return
        userService.updateUser(currentUserId, user).then(newUser => {   
            user.setUserId(newUser._id)
            users[currentIndex] = user
            renderUsers()
        })
    }
    updateBtn.click(updateUser)

    const createUser = () => {
        const username = usernameFld.val() 
        const firstname = firstNameFld.val()
        const lastname = lastNameFld.val()
        const role = roleFld.val()
        clearForm()  
        if(username === "" || firstname === "" || lastname ==="" || role ==="") 
            return
        const user = new User(username, firstname, lastname, role)
        userService.createUser(user).then(newUser => {
                user.setUserId(newUser._id)
                users.push(user)
                renderUser(user, users.length - 1)
            })
    }
    createBtn.click(createUser)

    const checkDiff = (val1, val2) => {
        if(val1 === "")
            return true
        else if(val1 === val2)
            return true
        else
            return false
    }
    
    const searchUser = () => {
        const username = usernameFld.val()
        const firstname = firstNameFld.val()
        const lastname = lastNameFld.val()
        const role = roleFld.val()
        userService.findAllUsers()
            .then((theUsers) => {
                users = []
                for(let i=0; i < theUsers.length; i++){
                    if(checkDiff(username, theUsers[i].username) && checkDiff(firstname, theUsers[i].firstname)
                    && checkDiff(lastname, theUsers[i].lastname) && checkDiff(role, theUsers[i].role)){
                        let user = new User(theUsers[i].username, 
                            theUsers[i].firstname, theUsers[i].lastname, 
                            theUsers[i].role, theUsers[i]._id)
                        users.push(user);
                    }    
                }
                renderUsers()
            })
    }
    searchBtn.click(searchUser)

    const clearForm = () => {
        usernameFld.val("")
        passwordFld.val("")
        firstNameFld.val("")
        lastNameFld.val("")
        roleFld.val("")
    }
    findAllUsers()
})();
