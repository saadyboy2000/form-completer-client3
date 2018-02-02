export const SIGNUP_SENT = 'SIGNUP_SENT';
export const signupSent = userData => ({
    type: SIGNUP_SENT,
    userData
});

export const SIGNUP_COMPLETE = 'SIGNUP_COMPLETE';
export const signupComplete = () => ({
    type: SIGNUP_COMPLETE
});