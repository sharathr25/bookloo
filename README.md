# Bookloo

## Before you start dev server

### Install MongoDB

- You need `MongoDB` database for this project
- Go here https://www.mongodb.com/docs/manual/administration/install-community/
- and follow steps which suits your OS and install mongodb
- run `mongosh` to check installation is successful

### Install Bun

- You need `bun` to run this project
- Go here https://bun.sh/docs/installation
- and follow steps which suits your OS and install bun
- run `bun -v` to check installation is successful

### Install Minio server

- You need `Minio` to store image files that comes along with requests
- Go here https://min.io/download
- and follow steps which suits your OS and install minio server
- run `minio -v` to check installation is successful

### Install deps

- Run below command inside the project

```bash
bun install
```

## To start dev server

### Start Mongodb

- Ensure your running mongodb at mongodb://127.0.0.1:27017

### Start Minio

- Start minio server using below command

```bash
minio server <path where you want to store files>
```

### Start this project

- Run below command

```bash
bun run dev
```

- Open http://localhost:3000/swagger with your browser to see documentation.
