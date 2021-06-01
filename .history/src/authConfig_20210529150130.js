// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "2dec5b0e-839f-4ce6-ae63-93c8fe830ced", // "2fdd06f3-7b34-49a3-a78b-0cf1dd87878e",
        authority: "https://kdpassport.b2clogin.com/kdpassport.onmicrosoft.com/B2C_1_signupsignin1/", //"https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_susi",
        knownAuthorities: ["kdpassport.b2clogin.com"]
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
// export const loginRequest = {
//     scopes: ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
// };

// export const forgotPasswordRequest = {
//     authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset"
// }

export const loginRequest = {
    scopes: ["https://kdpassport.onmicrosoft.com/2dec5b0e-839f-4ce6-ae63-93c8fe830ced/helloapi/demo.read"]
};

export const forgotPasswordRequest = {
    authority: "https://kdpassport.b2clogin.com/kdpassport.onmicrosoft.com/B2C_1_passwordreset1/"
}
