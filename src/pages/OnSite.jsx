import React, { useEffect, useState } from 'react'
import Header from '../component/common/Header';
import PageForm from '../component/common/PageForm';
import Table from '../component/common/Table';

const OnSite = () => {
  const [onsiteTableData,setOnsiteTableData] = useState([])
  // async function logMovies() {
  //   const response = await fetch("https://py-dev-api.e4score.com/api/task/v2/searchOnSite");
  //   const tableData = await response.json();
  //   console.log(tableData);
  // }

  // logMovies()

  
  // async function postData(url = "", data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "include", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  
  // postData("https://py-dev-api.e4score.com/api/task/v2/searchOnSite", { answer: 42 }).then((data) => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
  // async function loginData(url) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  // async function loginData() {
  // //  const data = {}
  //   const response = await fetch({
  //     url:'https://py-dev-api.e4score.com/authentication/v2/login',
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow", 
  //     referrerPolicy: "no-referrer", 
  //      body: {}, 
  //   });
  //   return response.json(); 
  // }
  
  // loginData()
  // const Config = {
  //   primaryApiServer: "https://poweryard-stage-api.lazerspot.com",
  // }
  function postLoginUserV2(request, onSuccess, onFailure) {
    httpPost(
      'https://poweryard-stage-api.lazerspot.com/authentication/v2/login',
      request,
      onSuccess,
      onFailure
    );
  }
   function downloadNonNullMoveToTasksV2(data, onSuccess, onFailure) {
    console.log(data, `data in onsite api`)
    httpPost(
      'https://poweryard-stage-api.lazerspot.com/api/task/v2/searchOnSite',
      data,
      onSuccess,
      onFailure
    );
  }
   function httpPost(url = ``, data = {}, onsuccess, onerror) {
    return invokeHttpMethod("POST", url, data, onsuccess, onerror);
  }

   function invokeHttpMethod(
    method,
    url = ``,
    data = {},
    onsuccess,
    onerror
  ) {
    // Default options are marked with *
    return fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new ResponseCodeError(
            response.statusText,
            response.status,
            null,
            response,
            response.hideToast
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (onsuccess) onsuccess(data);
      })
      .catch((error) => {
        if (error && error.authError && error.authError()) {
          document.location.reload(true);
          error = new ResponseCodeError(
            error.response.statusText,
            error.response.status,
            null,
            null,
            error.response.hideToast
          );
          if (onerror) onerror(error);
        } else {
          if (error.response) {
            error.response.json().then((body) => {
              let message = body.message
                ? body.message
                : error.response.statusText
                ? error.response.statusText
                : "Failed request";
              error = new ResponseCodeError(
                message,
                error.response.status,
                body,
                null,
                body.hideToast
              );
              if (onerror) onerror(error);
            });
          } else {
            error = new ResponseCodeError(null, null, null, null, true);
            if (onerror) onerror(error);
          }
        }
      });
  }
  postLoginUserV2(
    { username: 'lstest.admin@e4score.com', password: 'Test123' },
    (user) => {
      localStorage.setItem('taskPopUpCheck', false);
    },
    () => {
      console.log("You could not be logged in. Please check your credentials.");
    }
  );
  
  class ResponseCodeError extends Error {
    constructor(message, statusCode, formError, response, hideToast) {
      super();
      this.message = message;
      this.statusCode = statusCode;
      this.formError = formError;
      this.response = response;
      this.hideToast = hideToast;
    }
  
    authError() {
      return this.statusCode === 401;
    }
  }
  let searchRequest = {
    page: 0,
    pageSize: 200,
    sorted: [],
    filtered: [{ id: "taskLocationUuid", value: "fdd9fe9e-29f5-4bcc-a87e-5aa65a198f57" }],
};
useEffect(() => {
  downloadNonNullMoveToTasksV2(searchRequest,
    (success) => {
        if (success.code === "200") {
          setOnsiteTableData(success.content.results)
            // this.setState({
            //     pages: success.content.totalPages,
            //     tableData: ,
            //     loading: false,
            //     pageCount: success.content.totalPages
            // });
            success.content.request = searchRequest;
            // this.props.successCallback && this.props.successCallback(success)
            // if (this.state.page > success.content.totalPages) {
            //     this.setState({ page: 0, forcePage: 0 });
            // }
        }
        else if (success.code === "1000") {
            console.log(success.message);
            // this.setState({
            //     loading: false,
            // })
        }
        else {
            console.log(success.message)
            // this.setState({
            //     loading: false,
            // })
        }
    },
    (failure) => {
        if (!failure.hideToast) {
            console.log("Could not load data");
        }
        // this.props.failureCallback && this.props.failureCallback(failure)
    }
    )
}, [])

  
  console.log(onsiteTableData, `onsite table data`)
  return (
    <div className='page_top_margin p-3'>
      <Header pageName="on-Site" />
      <PageForm />
          <Table data = {onsiteTableData} />
    </div>
  );
};

export default OnSite;