# Simple-DataTables Moment Plugin
[![license](https://img.shields.io/github/license/Faldon/Simple-DataTables-RenderMoment.svg?style=plastic)](https://github.com/Faldon/Simple-DataTables-RenderMoment/blob/master/LICENSE)
![](https://img.shields.io/github/size/Faldon/Simple-DataTables-RenderMoment/src/datatable.rendermoment.js.svg?style=plastic)
![](https://img.shields.io/github/size/Faldon/Simple-DataTables-RenderMoment/dist/datatable.rendermoment.min.js.svg?label=minified&style=plastic)

Plugin for [fiduswriter/Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables) that enables individual
rendering and sorting of date-type columns. 

---

## Install
You can download the [latest regular script](https://raw.githubusercontent.com/Faldon/Simple-DataTables-RenderMoment/master/src/datatable.rendermoment.js) 
or choose to use the [latest minified version](https://raw.githubusercontent.com/Faldon/Simple-DataTables-RenderMoment/master/dist/datatable.rendermoment.min.js)
for production environments. 

### Usage
Make sure the plugin is included __after__ Simple-DataTables:
 
```html
   <script src="path/to/datatables.min.js"></script>
   <script src="path/to/datatable.rendermoment.min.js"></script>
```
If you encounter problems when trying to use Simple-DataTables in browser mode, I forked it and adjusted the build
configuration to build an iife module [here](https://github.com/Faldon/Simple-DataTables/tree/iife).

then:
 
 ```javascript
 datatable = new window.DataTable("#phonenumbers", {
            columns: [
                {
                    select: 0,
                    type: "date",
                    format: "DD.MM.YYYY",
                    render: window.DataTable.prototype.rendermoment({format: "YYYY-MM-DD"}).render
                }
            ]
        });
 ```
 
It is important, that you define the desired columns as `type: 'date'` and, for the sorting algorithm, assign the format
you wish the date to be displayed, e.g. `format: 'DD.MM.YYYY'`

Than you assign the render function as `render: window.DataTable.prototype.rendermoment({format: %format%}).render`,
where `%format%` should be the date format your data will be served to the table.  
 
That's it!

---
  
Copyright © 2019 Thomas Pulzer | BSD Clause 3 license