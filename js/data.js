var project = {
  "projects": [{
    "name": "BuildFIT Marketing & Interface",
    "desc": "brand design and user interface development",
    "thumb": "design/thumb_buildfit.png",
    "images": ["design/thumb_buildfit.png","design/thumb_pnc.png","design/thumb_pitts2.png","design/thumb_poster.png"],
    "captions":["image","image2","image3","image4"]
  }, {
    "name": "PNC Building Portfolio Utility Report",
    "desc": "energy benchmarking data analysis and infographics",
    "thumb": "design/thumb_pnc.png",
    "images": ["design/thumb_buildfit.png","design/thumb_pnc.png","design/thumb_pitts2.png","design/thumb_poster.png"],
    "captions":["image","image2","image3","image4"]
  },{
    "name": "City of Pittsburgh Utility App",
    "desc": "web interface built on DOE's SEED platform",
    "thumb": "design/thumb_pitts2.png",
    "images": ["design/thumb_buildfit.png","design/thumb_pnc.png","design/thumb_pitts2.png","design/thumb_poster.png"],
    "captions":["image","image2","image3","image4"]
  },{
    "name": "Poster Design",
    "desc": "designs for School of Architecture events",
    "thumb": "design/thumb_poster.png",
    "images": ["design/thumb_pnc.png"],
    "captions":["image"]
  },{
    "name": "Hand Drawing",
    "desc": "perspective drawing, architectural diagrams, anatomy",
    "thumb": "design/thumb_draw.png",
    "images": ["design/thumb_pnc.png"],
    "captions":["image"]
  },{
    "name": "Architectural Design",
    "desc": "sustainable design, design-build",
    "thumb": "design/thumb_arch.png",
    "images": ["design/thumb_pnc.png"],
    "captions":["image"]
  }]
};


project.display = function () {

  for(var i = 0; i < project.projects.length; i++)
  {
    $("#projects").append(HTMLprojStart);
    var modalID = "modal" + i;
    var formattedProj = HTMLprojName.replace("%data%", project.projects[i].name);
    var formattedDesc = HTMLprojDesc.replace("%data%", project.projects[i].desc);
    var formattedTitle = formattedProj + formattedDesc;
    var formattedThumb = HTMLprojThumb.replace("%data%", project.projects[i].thumb).replace("%modal%", modalID);


    $(".project-listing:last").append(formattedTitle, formattedThumb);

    var formattedModalstart = HTMLmodalStart.replace("%modal%", modalID).replace("%id%", modalID);
    $("#projects").append(formattedModalstart);

    var modalImageLength = project.projects[i].images.length;
    for (var a = 0; a < modalImageLength; a++) {
      var slideNo = a+1 + "/" + modalImageLength
      var formattedModalslide = HTMLmodalSlide.replace("%page%",slideNo).replace("%data%",project.projects[i].images[a]);
      $(".modal-content:last").append(formattedModalslide);
    }
    $(".modal-content:last").append(HTMLmodalArrows, HTMLmodalCaption);

    for (var b = 0; b < modalImageLength; b++) {
      var formattedModalcolumn = HTMLmodalColumn.replace("%data%", project.projects[i].images[b]).replace("%slideNo%", b+1).replace("%content%", project.projects[i].captions[b]);
      $(".modal-content:last").append(formattedModalcolumn);
    }

  }
}

project.display();
