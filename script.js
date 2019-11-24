$(window).resize(function() {
  if ($(window).width() < 300) {
    $("div").css({
      width: "100%",
      height: "130px",
      margin: "0px"
    });
    $("h4").css({
      fontSize: "10px"
    });
    $("h2").css({
      fontSize: "12px"
    });
    $("p").css({
      fontSize: "10px"
    });
    $("header").css({
      height: "100px",
      borderRadius: "0"
    });
    $(logo).css({
      position: "relative",
      margin: "0 auto",
      width: "60px",
      height: "60px"
    });
    $(socials).hide();
    $(socials2).show();
    $(imgfooter).css({
      marginLeft: "0 auto",
      width: "40px",
      height: "40px"
    });
    $("footer").css({
      height: "100px",
      borderRadius: "0"
    });
    $(".container-fluid").css({
      margin: "0px"
    });
  } else if ($(window).width() < 500) {
    $("div").removeAttr("style");
    $("ul").css({
      marginLeft: "0px",
      padding: "0px"
    });
    $("h4").css({
      fontSize: "15px"
    });
    $("h4").css({
      fontSize: "20px"
    });
    $("p").css({
      fontSize: "15px"
    });
    $(logo).css({
      position: "relative",
      margin: "0 auto",
      width: "120px",
      height: "120px"
    });
    $("header").css({
      display: "block",
      textAlign: "center",
      borderRadius: "0"
    });
    $("footer").css({
      height: "180px",
      borderRadius: "0"
    });
    $(imgfooter).css({
      marginLeft: "0 auto",
      width: "80px",
      height: "80px"
    });
    $(geogame).hide();
    $(socials).hide();
    $(socials2).show();
  } else {
    $("div").removeAttr("style");
    $("section").removeAttr("style");
    $("ul").removeAttr("style");
    $("h4").removeAttr("style");
    $("p").removeAttr("style");
    $("header").removeAttr("style");
    $("footer").removeAttr("style");
    $(imgfooter).removeAttr("style");
    $(socials2).removeAttr("style");
    $(follow).removeAttr("style");
    $(logo).removeAttr("style");
    $(geogame).show();
  }
});
$("li,i").click(function() {
  alert("page in preparation, check 'Capitals' or 'Peaks' ");
});
