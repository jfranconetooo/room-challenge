export default {
  "ERROR:DEFAULT": {
    "status": 500,
    "body": {
      "code": 1,
      "message": "Unexpected error"
    }
  },
  "ERROR:FORBIDDEN": {
    "status": 403,
    "body": {
      "code": 2,
      "message": "Forbidden"
    }
  },
  "ERROR:NOT_FOUND": {
    "status": 404,
    "body": {
      "code": 3,
      "message": "Not found"
    }
  },
  "ERROR:UNAUTHORIZED": {
      "status": 401,
      "body": {
        "code": 3,
        "message": "Unauthorized"
      }
  },
  "ERROR:INVALID_PASSWORD": {
      "status": 400,
      "body": {
        "code": 4,
        "message": "Invalid password"
      }
  },
  "ERROR:INVALID_USERNAME": {
      "status": 400,
      "body": {
        "code": 5,
        "message": "Invalid username"
      }
  },
  "ERROR:CANT_CHANGE_HOST": {
    "status": 400,
    "body": {
      "code": 6,
      "message": "There is not user to change the host."
    }
  },
  "ERROR:ROOM_REACHED_LIMIT": {
    "status": 400,
    "body": {
      "code": 7,
      "message": "Room limit reached."
    }
  }
}