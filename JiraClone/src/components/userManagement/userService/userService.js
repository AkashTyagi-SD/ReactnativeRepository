import * as constant  from '../../../constant/constant';

export const BASE_URL=constant.BASE_URL_DEV;

/**
 * Description:To do registration of user
 * @param {*} firstname 
 * @param {*} lastname 
 * @param {*} emailid 
 * @param {*} password 
 * @param {*} isremember 
 */
export function registration(firstname,lastname,emailid,password,isremember) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ firstname,lastname,emailid,password,isremember})
    };

    return fetch(BASE_URL+'register', requestOptions)
    .then((response) => response.json())
    .then(response => {
        return response;
    });
}
