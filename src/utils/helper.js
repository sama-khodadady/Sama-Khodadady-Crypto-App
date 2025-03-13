const convertData = (data, type) => {
    const convertedData = data[type].map((item) => {
      //each item is each array in for example data type prices
      return {
        date: item[0], //index 0 is for date
        [type]: item[1], //index 1 is for price
      };
    });
    return convertedData;
  };
  
  export { convertData };
  