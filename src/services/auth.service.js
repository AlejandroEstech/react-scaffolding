
export const getUser = () => {

    const user = localStorage.getItem('user')

    if(user){
        console.log('El usuario existe')
        return true
    }

    return false

}