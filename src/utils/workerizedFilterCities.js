import makeFilterCitiesWorker from 'workerize!./filterCities'

const {getItems} = makeFilterCitiesWorker()

export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
