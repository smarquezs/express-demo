const Airtable = require('airtable');
const { API_KEY, BASE_ID, TABLE } = process.env;

const base = new Airtable({apiKey: API_KEY}).base(BASE_ID);

exports.getAllRecords = () => {
  let = allRecords = [];

  return new Promise((resolve, reject) => {
    if (allRecords.length > 0) {
      resolve(allRecords);
    }

    const processPage = (records, fetchNextPage)  => {
      allRecords = [...allRecords, ...records];
      fetchNextPage()
    }

    const processRecors = (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(allRecords);
    }

    base(TABLE).select().eachPage(processPage, processRecors);
  });
};

