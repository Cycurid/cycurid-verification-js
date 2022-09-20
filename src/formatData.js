const valuesToLowerCase = (data) => {
  const entries = Object.entries(data);
  return Object.fromEntries(
    entries.map(([key, value]) => {
      console.log("value", value);
      return [key, value.toLowerCase()];
    })
  );
};

const formatData = (data) => {
  const { person, documents, callback, internal_reference } = data.verification;
  const formattedPerson = valuesToLowerCase(person);
  if (documents) {
    const formattedDocuments = valuesToLowerCase(documents);
    const formattedData = {
      verification: {
        callback,
        documents: formattedDocuments,
        person: formattedPerson,
        internal_reference,
      },
    };
    return formattedData;
  }

  const formattedData = {
    verification: {
      callback,
      person: formattedPerson,
      internal_reference,
    },
  };
  console.log(documents);

  console.log("formattedData", formattedData);
  return formattedData;
};

module.exports = formatData;
