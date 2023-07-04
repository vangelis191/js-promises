function getObject() {
  let obj = [
    {
      id: 1,
      name: 'vangelis',
      age: 36,
    },
    {
      id: 2,
      name: 'Marios',
      age: 26,
    },
  ];

  return obj;
}
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = getObject();
      resolve(obj);
    }, 1500);
  });
  return promise;
};

function fetchDataById(id = undefined) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = getObject().find((item) => {
        return item.id === id;
      });

      if (id) resolve(obj);
      else reject(new Error('No matching object found'));
    }, 1500);
  });

  return promise;
}

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then((text) => {
      return fetchDataById(text[0]?.id);
    })
    .then((txt) => {
      console.log(txt);
    })
    .catch((err) => console.log(err));
}); //with promise

setTimeout(async () => {
  console.log('Timer is done!');
  try {
    const fData = await fetchData();
    const fDataByID = await fetchDataById(fData[0]?.id);
    console.log(fDataByID);
  } catch (err) {
    console.log(err);
  }
}); //with async await
