# Hele.cz mjml microservice

## Installation

Install and run project:

```
> npm install
> npm run-script start
```


## Usage

```
curl -X POST http://localhost:8900/compile -d '\
<mjml>\
  <mj-body>\
    <mj-container>\
      <mj-section>\
        <mj-column>\
          <mj-text>\
            Hello World!\
          </mj-text>\
        </mj-column>\
      </mj-section>\
    </mj-container>\
  </mj-body>\
</mjml>'
```

**Responses**

- `200` - success
- `422` - invalid input
