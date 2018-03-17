{
  "title": "Dummy Post",
  "date": "2020-11-30",
  "tags": "['test-tag', 'new-tag']",
    "draft": "true"
}
---ENDFRONTMATTER---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# exercitation ullamco laboris

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```
const extractedCsv = `${__dirname}/dummyData.csv`;

    // Format the data in to a JSON payload

    const stream = fs.createReadStream(extractedCsv);

    csv
      .fromStream(stream, { headers: true })
      .on('data', (data) => {
        const UPSERT_SQL = "INSERT INTO gmc(data) VALUES($1) ON CONFLICT ((data->>'GMC Ref No')) DO UPDATE SET data = EXCLUDED.data";
        const jsonData = JSON.stringify(data);
        executeQuery(log, UPSERT_SQL, [jsonData]);
        console.log('queried');
      })
      .on('end', () => {
        console.log("done");
      });

```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    .on('end', () => {
      console.log("done");
    });

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![alt text](media/photo1.jpg "Logo Title Text 1")
