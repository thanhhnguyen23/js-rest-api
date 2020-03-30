# JS-REST-API
---

## Technologies Used
* nodejs
* express
* mongodb

## Create New Tutorial
```
curl --location --request POST 'http://localhost:8080/api/tutorials' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Node Tutorial #4",
	"description": "Tutorial #4 Description"
}'
```

## List Tutorials
```
curl localhost:8080/api/tutorials | jq .
```

## Retrieve a Tutorial by Id
```
curl --location --request GET 'http://localhost:8080/api/tutorials/5e8182b0cca412687e3a9ddb'
```

## Update Tutorial by Id
```
curl --location --request PUT 'http://localhost:8080/api/tutorials/5e8182b0cca412687e3a9ddb' \
--header 'Content-Type: application/json' \
--data-raw '{
    "_id": "5e8182b0cca412687e3a9ddb",
    "title": "Node Tutorial #11"
}'
```

## Retrieve only published Tutorials
```
curl --location --request GET 'http://localhost:8080/api/tutorials/published'
```

## Find Tutorials by title string
```
curl --location --request GET 'http://localhost:8080/api/tutorials?title=InputSearchStringHere
```

## Delete Tutorial by Id
```
curl --location --request DELETE 'http://localhost:8080/api/tutorials/5e818642cca412687e3a9dde' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "This is the title TO BE DELETED",
	"description": "This is the description TO BE DELETED"
}'
```

## Delete All Tutorials
```
curl --location --request DELETE 'http://localhost:8080/api/tutorials/'
```
