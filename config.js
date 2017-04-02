System.config({
   baseURL: "/",
   defaultJSExtensions: true,
   transpiler: 'typescript',
   paths: {
       "deps/*": "node_modules/*"
   },
   packages: {
       "app/scripts": {
           "defaultExtension": "ts"
       },
       "app/test": {
           "defaultExtension": "ts"
       }
   },
    map: {

    }
});