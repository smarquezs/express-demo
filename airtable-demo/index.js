const Airtable = require('airtable');
const { API_KEY, BASE_ID, TABLE } = process.env;

const base = new Airtable({apiKey: API_KEY}).base(BASE_ID);

base(TABLE).select({
  pageSize: 3
}).eachPage((records, fetchNextPage) => {
  records.forEach(function(record) {
    console.log(record.id);
    console.log(record.fields);
  });

  fetchNextPage();
}, (err) =>  {
  if (err) { console.error(err); return; }
});
