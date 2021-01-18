function postStudent(body){
    let isOk = false
    let ok = validate(body)
    if(ok){
        isOk=true
    }
    return isOk
}

function validate(body){
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length> 0){
        if(body.hasOwnProperty('firstname') && body.firstname !== '' && body.firstname.length > 3){
            if(body.hasOwnProperty('lastname') && body.lastname !== '' && body.lastname.length > 3){
                if(body.hasOwnProperty('age') && body.age < 20 && body.age > 10){
                    ok=true
                }
            }
        }
    }
    return ok
}

module.exports={
    postStudent
}