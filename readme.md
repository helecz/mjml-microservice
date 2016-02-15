# Hele.cz mjml microservice

## Installation

Install and run project:

```
> npm install
> npm run-script start
```


## Usage

```
curl -X POST http://localhost:8900/compile -d '<mj-body>Hello world!</mj-body>'
```

**Responses**

- `200` - success
- `422` - invalid input
