const errors = {
    "UNKNOWN": {
        "code": 401,
        "message": "Internal Error, Please contact the Customer Service"
    },
    "MISSING_PARAMETERS": {
        "code": 400,
        "message": "One or more parameters missing. Please check documentation."
    },
    "INVALID_AGE": {
        "code": 400,
        "message": "Invalid or undefined age."
    }
};

export const throwError = (value) => {
    if(errors[value]!=undefined) {
        throw {
            code: errors[value].code,
            message: errors[value].message,
        };
    } else {
        throw {
            code: 401,
            message: 'Contact Support',
        }
    }
}