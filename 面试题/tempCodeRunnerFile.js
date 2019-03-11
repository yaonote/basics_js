const protectPhone = (phone) => {
    return phone.split('').splice(3,4,'****').join('')
}

console.log(protectPhone('18512341234'))