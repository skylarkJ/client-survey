'use strict';

const successIndex = (data) => {
  for(let i=0;i<data.surveys.length;i++){
    $('.index-display').append(JSON.stringify((data.surveys)[i].question) + "<br>" + (data.surveys)[i].answer + "<br>");
  }
};

const failureIndex = (error) => {
  console.error(error);
};

const successSurveyCreate = (data) => {
  console.log(data);
};

const failureSurveyCreate = (error) => {
  console.log(error);
};

module.exports = {
  successIndex,
  failureIndex,
  successSurveyCreate,
  failureSurveyCreate,
};