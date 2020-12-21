const { createUpwardServer } = require('@magento/upward-js')

createUpwardServer({
    upwardPath: 'spec.yml',
    bindLocal: true,
    logUrl: true,
    port: 8080
});