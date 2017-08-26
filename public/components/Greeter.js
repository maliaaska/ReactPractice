function greeter () {
    document.write('From greeter function');
}

//by setting up module.exports = greeter 
//anybody who requires this file is gonna get an access
// to this function
module.exports = greeter;