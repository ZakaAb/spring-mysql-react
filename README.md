# Spring Boot + MYSQL + React

## Vs code Extensions

- Extension pack for java
- Spring Boot Extension pack
- Lombok annotations

## To init the project on Vscode

#### Ctrl +p : Spring Initializr: Create Maven Proejct

| Parameter           | Value     |
| :------------------ | :-------- |
| `Boot Version`      | `2.7.2`   |
| `Language`          | `java`    |
| `Input Group Id`    | `io.zack` |
| `Input Artifact Id` | `Backend` |
| `packaging type`    | `WAR`     |
| `Java Version`      | `17`      |

## Dependencies

| Dep  | Name            |
| ---- | --------------- |
| Dep1 | Spring Web      |
| Dep2 | MySQL driver    |
| Dep3 | Spring Data JPA |
| Dep4 | Lombok          |

## MySQL DATABASE

Set up Database with Docker

```bash
  docker pull mysql
  docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mysqldb -d -p 3407:3306 mysql:latest
```
