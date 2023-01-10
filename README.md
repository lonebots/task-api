# API DOCUMENTATION

simple REST API implementation with following feature

- admin login
- admin can perform following functionality on the user
  - create ,update, delete for user

[live demo](https://task-api-znu4.onrender.com), please do use [PostMan](https://identity.getpostman.com) for testing the API.

## API Endpoints

### 1. Admin login :

```http
  POST /api/admin/login
```

```
defaul user
username : admin
password : admin
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. User name     |
| `password` | `string` | **Required**. User password |

## Protected Routes

`Authorisation Header` recieved during login need to be passed in `Header` as `Bearer Token`

### 1. Create User

```http
  POST /api/user
```

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `name`     | `string` | **Required**. Use's name             |
| `email`    | `string` | **Required**. User's email           |
| `password` | `string` | **Required**. User's password        |
| `image`    | `string` | **Required**. User's profile picture |
| `phone`    | `Number` | **Required**. User's phone number    |

### 2. Update User

```http
  PATCH /api/user/:id
```

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `name`     | `string` | **Required**. Use's name             |
| `email`    | `string` | **Required**. User's email           |
| `password` | `string` | **Required**. User's password        |
| `image`    | `string` | **Required**. User's profile picture |
| `phone`    | `Number` | **Required**. User's phone number    |
| `id`       | `string` | **Required**. passed in `Params`     |

### 3. Delete User

```http
  DELETE /api/user/:id
```

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `name`     | `string` | **Required**. Use's name             |
| `email`    | `string` | **Required**. User's email           |
| `password` | `string` | **Required**. User's password        |
| `image`    | `string` | **Required**. User's profile picture |
| `phone`    | `Number` | **Required**. User's phone number    |
| `id`       | `string` | **Required**. passed in `Params`     |

### 4. Get Single User

```http
  GET /api/user/:id
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. passed in `Params` |

### 5. Get All User

```http
  GET /api/users
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. passed in `Params` |


