import bcrypt from 'bcryptjs';
const { hash, compare } = bcrypt;

export const encrypt = async(pass)=>{
const passwordHash = await hash(pass, 10)
return passwordHash
}
export const verified=async(password, passwordHash)=>{
const isCorrect = await compare(password, passwordHash)
return isCorrect
}
