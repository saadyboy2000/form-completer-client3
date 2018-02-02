export const LOGIN_SENT = 'LOGIN_SENT';
export const loginSent = userData => ({
    type: LOGIN_SENT,
    payload: userData
});

export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const loginComplete = () => ({
    type: LOGIN_COMPLETE
});