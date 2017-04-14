var HTMLprojStart = '<div class="col-4 featthumbs"><ul class="sliding effect project-listing"></ul></div>';
var HTMLprojName = '<li class = "zero"><h2 class="zero">%data%</h2>';
var HTMLprojDesc = '<p class="zero">%data%</p></li>';
var HTMLprojThumb ='<li><img class="projimg top" src=%data% onclick="openModal(%modal%);currentSlide(1, %modal%)" class="hover-shadow"/></li>';


var HTMLmodalStart = '<div id="%modal%" class="modal"><span class="close cursor" onclick="closeModal(%modal%)">&times;</span><div class="modal-content"></div></div';
var HTMLmodalSlide = '<div class="mySlides"><div class="numbertext">%page%</div><img src=%data% style="width:100%"></div>';
var HTMLmodalArrows = '<a class="prev" onclick="plusSlides(-1, %modal%)">&#10094;</a><a class="next" onclick="plusSlides(1, %modal%)">&#10095;</a>';

var HTMLmodalCaption = '<div class="caption-container"><p class="caption"></p></div>';
var HTMLmodalColumn = '<div class="column"><img class="demo" src=%data% onclick="currentSlide(%slideNo%, %modal%)" alt="%content%"></div>';
