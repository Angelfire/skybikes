/**
 * 
 * @param {*} mail 
 * @param {*} users 
 */ 
export const isUser = (mail, users) => users.find((u) => u.mail === mail);
