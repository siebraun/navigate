import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDarray = pageID.split("/");
  pageID = pageIDarray[0];
  let subPageID = pageIDarray[1];

  console.log("hash " + pageID);
  //   MODEL.changePage(pageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(pageID);
    } else {
      MODEL.changePage(pageID, subPageID);
    }
  }
}

function initListeners() {
  //   $("nav a").click((e) => {
  //     let btnID = e.currentTarget.id;
  //     console.log("get clicked " + btnID);
  //   });
}

function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
  initListeners();
});
