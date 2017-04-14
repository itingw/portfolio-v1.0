var project = {
  "projects": [{
    "name": "BuildFIT Marketing & Interface",
    "desc": "brand design and user interface development",
    "thumb": "design/thumb_buildfit.png",
    "images": ["design/buildfit_1.png","design/buildfit_2.png","design/buildfit_3.jpg","design/buildfit_4.jpg"],
    "captions":["image","image2","image3","image4"]
  }, {
    "name": "PNC Building Portfolio Utility Report",
    "desc": "energy benchmarking data analysis and infographics",
    "thumb": "design/thumb_pnc.png",
    "images": ["design/pnc_1.jpg","design/pnc_2.jpg","design/pnc_3.jpg","design/pnc_4.jpg","design/pnc_5.jpg","design/pnc_6.png","design/pnc_7.png"],
    "captions":["image","image2","image3"]
  },{
    "name": "City of Pittsburgh Utility App",
    "desc": "web interface built on DOE's SEED platform",
    "thumb": "design/thumb_pitts2.png",
    "images": ["design/pitts_1.jpg","design/pitts_2.jpg","design/pitts_3.jpg","design/pitts_4.jpg","design/pitts_5.jpg","design/pitts_6.jpg","design/pitts_7.jpg"],
    "captions":["image","image2","image3","image4","image","image","image"]
  },{
    "name": "Poster Design",
    "desc": "designs for School of Architecture events",
    "thumb": "design/thumb_poster.png",
    "images": ["design/poster_1.png","design/poster_2.png"],
    "captions":["image","image"]
  },{
    "name": "Hand Drawing",
    "desc": "perspective drawing, architectural diagrams, anatomy",
    "thumb": "design/thumb_draw.png",
    "images": ["design/draw_1.jpg","design/draw_2.jpg","design/draw_3.jpg","design/draw_4.jpg"],
    "captions":["image","image","image","image"]
  },{
    "name": "Architectural Design",
    "desc": "sustainable design, design-build",
    "thumb": "design/thumb_arch.png",
    "images": ["design/arch_1.png","design/arch_2.png","design/arch_3.png","design/arch_4.png","design/arch_5.png","design/arch_6.png","design/arch_7.png"],
    "captions":["image","image","image","image","image","image","image"]
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
    var formattedThumb = HTMLprojThumb.replace("%data%", project.projects[i].thumb).replace(/%modal%/g, modalID);


    $(".project-listing:last").append(formattedTitle, formattedThumb);

    var formattedModalstart = HTMLmodalStart.replace(/%modal%/g, modalID);
    $("#projects").append(formattedModalstart);

    var modalImageLength = project.projects[i].images.length;
    for (var a = 0; a < modalImageLength; a++) {
      var slideNo = a+1 + "/" + modalImageLength;
      var formattedModalslide = HTMLmodalSlide.replace("%page%",slideNo).replace("%data%",project.projects[i].images[a]);
      $(".modal-content:last").append(formattedModalslide);
    }

    var formattedArrows = HTMLmodalArrows.replace(/%modal%/g, modalID);
    $(".modal-content:last").append(formattedArrows, HTMLmodalCaption);

    for (var b = 0; b < modalImageLength; b++) {
      var formattedModalcolumn = HTMLmodalColumn.replace("%data%", project.projects[i].images[b]).replace("%slideNo%", b+1).replace("%modal%", modalID).replace("%content%", project.projects[i].captions[b]);
      $(".modal-content:last").append(formattedModalcolumn);
    }

  }
};

project.display();
