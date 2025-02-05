 const downloadedChangelog = require("../../ditto-changelog.json");
 const common = require('../common/sidebar.js')
 
 module.exports = {
    docs: [
        "installation",
        {
          type: "category",
          label: "Main Concepts",
          collapsed: false,
          items: [
            'common/concepts/documents',
            'common/concepts/update',
            'common/concepts/upsert',
            'common/concepts/querying',
            'common/concepts/remove',
            "timeseries",
          ]
        },

        {
            type: "category",
            label: "Data Model",
            items: [
              'common/datamodel/register',
              'common/datamodel/map',
            ]
          },
        "api",
        "how-it-works",
    ]
}
 
 