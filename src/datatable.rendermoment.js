/*! RenderMoment 0.1.1
 * © 2019 Thomas Pulzer <t.pulzer@thesecretgamer.de>
 */
/**
 * @summary     Simple-DataTables-RenderMoment
 * @description Extension for Simple-DataTables allowing rendering dates with
 *              MomentJS
 * @version     0.1.1
 * @file        datatable.rendermoment.js
 * @author      Thomas Pulzer
 * @contact     t.pulzer@thesecretgamer.de
 * @copyright   Copyright 2019 Thomas Pulzer
 *
 */
if (window.DataTable) {
  window.DataTable.extend('rendermoment', function (options) {

    /**
     * Default configuration
     * @type {Object}
     */
    let config = {
      // format is the date format used for parsing the date
      format: 'YYYY-MM-DD'
    };

    const DateTimeRenderer = function () {
      // To use the render function as a kind of static method, the config
      // property has to be set on the object, if it is not instantiated
      if (!this.initialised) {
        config = Object.assign(config, options);
      }
    };

    /**
     * Initialise instance of DateTimeRenderer
     * @return {void}
     */
    DateTimeRenderer.prototype.init = function () {
      if (!this.initialised) {
        this.config = Object.assign(config, options);
        this.initialised = true;
      }
    };

    /**
     * Render the date in the desired format
     *
     * Parse a date with the configured format and return it in the format
     * needed for DataTable's sort algorithm, if
     *
     * a) The corresponding table head row has the data property type set
     * b) The data property type is set to date
     * c) The parsed date is valid
     *
     * If a or b fails, the raw input data will be returned
     * If c fails, an empty string will be returned.
     *
     * @param {String} data The cell's content (innerHTML)
     * @param {Object} cell The HTMLTableCellElement
     * @param {Object} row The cell's parent HTMLTableRowElement
     * @return {String} The date or an empty string
     */
    DateTimeRenderer.prototype.render = function (data, cell, row) {
      let th = row.closest('table').tHead.children[0].children[cell.cellIndex];
      if (!th.dataset.hasOwnProperty('type') || 'date' !== th.dataset.type) {
        return data;
      }
      // renderer is the format used for sorting and displaying the date
      let renderer = th.dataset.format;
      let format = this.initialised ? this.config.format : config.format;
      let date = moment(data, format);
      if (!date.isValid()) {
        return '';
      }
      return date.format(renderer);
    };

    return new DateTimeRenderer();
  })
}