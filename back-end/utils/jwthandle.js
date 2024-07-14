import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

const jwtSecret= 'palabraSecreta'

export const generateToken =(id)=>{
const jwt =  sign({id}, jwtSecret,{expiresIn: "3h"})
return jwt
}
export const verifiyToken = (jwt)=>{
    try{

        const isVerify= verify(jwt, jwtSecret)
        return isVerify
    }catch(error){
        console.error('Token verification failed:', error);
    return null;
    }

}