function User(username, firstname, lastname, role, _id, 
            password="", email="", phone="", dateOfBirth="") {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this._id = _id;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setFirstname = setFirstname;
    this.getFirstname = getFirstname;
    this.setLastname = setLastname;
    this.getLastname = getLastname;
    this.setRole = setRole;
    this.getRole = getRole;
    this.setUserId = setUserId;
    this.getUserId = getUserId;

    function setUsername(username) {
        this.username = username;
    }

    function getUsername(){
        return this.username;
    }

    function setFirstname(firstname) {
        this.firstname = firstname;
    }

    function getFirstname(){
        return this.firstname;
    }

    function setLastname(lastname) {
        this.lastname = lastname;
    }

    function getLastname() {
        return this.lastname;
    }

    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }

    function setUserId(id) {
        this._id = id;
    }

    function getUserId() {
        return this._id;
    }
}