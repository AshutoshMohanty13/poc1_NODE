# POC 

- [Introduction](#introduction) 

- [Get User](#get-user) 
  - [Get user API](#get-user-api) 
  - [Response Example Json](#response-example-json)

- [Get User By ID](#get-user-by-id) 
  - [Get user by id API](#get-user-by-id-api) 
  - [Response Example Json](#response-example-json)  
  - [Status Codes](#status-codes)
  
- [Add User](#add-user) 
  - [Add user API](#add-user-api)
  - [Request Example Json](#request-example-json)  
  - [Response Example Json](#response-example-json)  
  - [Status Codes](#status-codes)
  
- [Update User](#update-user) 
  - [Update user API](#update-user-api)
  - [Request Example Json](#request-example-json)  
  - [Response Example Json](#response-example-json)  
  - [Status Codes](#status-codes)
  
- [Delete User](#delete-user) 
  - [Delete user API](#delete-user-api) 
  - [Response Example Json](#response-example-json)
  - [Status Codes](#status-codes)


# Introduction 

CRUD operations performed.

# Get User 

## Get user API 

`GET /user/` 

## Response Example Json 

```json 
{
        "id": 1,
        "name": "puneet",
        "password": "password1",
        "profession": "manager"
		},
		{
        "id": 2,
        "name": "mohit",
        "password": "password2",
        "profession": "lead"
		}
		

``` 

# Get User By ID 

## Get user by id API 

`GET /user/id/{1}` 

## Response Example Json 

```json 
{
        "id": 1,
        "name": "puneet",
        "password": "password1",
        "profession": "manager"
		}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
404        |                    Not found 
500        |                    FAILED 


# Add User

## Add user API 

`POST /user/` 

## Request Example Json 

```json 
{
        "id": 3,
        "name": "Sanath",
        "password": "password3",
        "profession": "Lead"
		}

``` 

## Response Example Json 

```json 
{
        "id": 3,
        "name": "Sanath",
        "password": "password3",
        "profession": "Lead"
		}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 

# Update User

## Update user API 

`PUT /user/id/{3}` 

## Request Example Json 

```json 
{
        "profession": "Reporting Manager"
		}

``` 

## Response Example Json 

```json 
{
        "id": 3,
        "name": "Sanath",
        "password": "password3",
        "profession": "Reporting Manager"
		}

``` 

## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 



# Delete User 

## Delete user API 

`DELETE /user/id/{3}` 

## Response Example Json 

```json 
{
        "id": 3,
        "name": "Sanath",
        "password": "password3",
        "profession": "Reporting Manager"
		}
		

``` 
## Status Codes 

Error code |                         Error Message 
---------- | :-----------------------------------------------------------: 
500        |                    FAILED 


