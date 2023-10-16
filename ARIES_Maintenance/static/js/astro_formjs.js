$(document).ready(function() {
    $(":reset").click(function(){
       $("#ibmarkoptical").prop('value',"MarkOptical");
       $("#ibmarkinfrared").prop('value',"MarkInfrared");
       $("#ibmarkoptical").removeClass("marked");
       $("#ibmarkinfrared").removeClass("marked");
       });
    
    $("#ibmarkoptical").click(function(){
       $(this).toggleClass("marked");
       if ( $(this).hasClass("marked") ) {
          //$(".optical :input[value*='OPT']").attr("checked","checked");
          // AM $(".optical :input[value*='OPT']").prop('checked', true);
    
          $(".optical").each(function(index){
             $(this).addClass("opt_selected");
             $(this).prop('checked', true);
          });
          $(this).prop('value',"UnmarkOptical");
       } else {
          //$(".optical :input[value*='OPT']").attr("checked","checked");
          // AM $(".optical :input[value*='OPT']").prop('checked', false);
          //$(".optical").prop('checked', false);
          $(".optical").each(function(index){
             $(this).removeClass("opt_selected");
             if ( ! $(this).hasClass("ir_selected") )
             {
                $(this).prop('checked', false);
             }
          });
          $(this).prop('value',"MarkOptical");
    
       }
    
       ShowTags(document.openForm,'[]');
       });
    
    $("#ibmarkinfrared").click(function(){
       $(this).toggleClass("marked");
       if ( $(this).hasClass("marked") ) {
          $(".infrared").each(function(index){
             $(this).addClass("ir_selected");
             $(this).prop('checked', true);
          });
          
          $(this).prop('value',"UnmarkInfrared");
       } else {
          $(".infrared").each(function(index){
             $(this).removeClass("ir_selected");
             if ( ! $(this).hasClass("opt_selected") )
             {
                $(this).prop('checked', false);
             }
          });
          $(this).prop('value',"MarkInfrared");
    
       }
    
       ShowTags(document.openForm,'[]');
       });
    
    $(".instr").click(function(){
       if ( $(this).hasClass("ir_selected") )
       {
          $(this).removeClass("ir_selected");
       }
    
       if ( $(this).hasClass("opt_selected") )
       {
          $(this).removeClass("opt_selected");
       }
    
       ShowTags(document.openForm,'[]');
       });
    
      // Function to truncate text (Read More, Read Less) is applied to any element of the class textContainer_Truncate
      // line height in 'px' is set to 36, height which is currently hardcoded for all elements.
          var maxheight=164;
          var showText = "<span class='raw_show_public_hide_cas'>Read more...</span>";
          var hideText = "<span class='raw_show_public_hide_cas'>Read less...</span>";
    
          jQuery('.textContainer_Truncate').each(function () {
            var text = jQuery(this);
            if (text.height() > maxheight){
                text.css({ 'overflow': 'hidden','height': maxheight + 'px' });
    
                var link = jQuery('<a style="color:rgb(155,115,0); text-decoration:none; font-family: Arial,sans-serif,Helvetica; font-size: 75%;" href="\x23">' + showText + '</a>');
                var linkDiv = jQuery('<div></div>');
                linkDiv.append(link);
                jQuery(this).after(linkDiv);
    
                link.click(function (event) {
                  event.preventDefault();
    
                  if (text.height() > maxheight) {
                      jQuery(this).html(showText);
                      text.css('height', maxheight + 'px');
                  } else {
                      jQuery(this).html(hideText);
                      text.css('height', 'auto');
                  }
                });
            }
          }); 
    });
    
    
    function selects(){  
       var ele=document.getElementsByName('file_name');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=true;  
       }  
    }  
    function deSelect(){  
       var ele=document.getElementsByName('file_name');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=false;  
             
       }  
    }  
    
    function selects1(){  
       var ele=document.getElementsByName('file_name1');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=true;  
       }  
    }  
    function deSelect1(){  
       var ele=document.getElementsByName('file_name1');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=false;  
             
       }  
    }
    
    function selects2(){  
       var ele=document.getElementsByName('file_name2');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=true;  
       }  
    }  
    function deSelect2(){  
       var ele=document.getElementsByName('file_name2');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=false;  
             
       }  
    }
    
    function selects3(){  
       var ele=document.getElementsByName('file_name3');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=true;  
       }  
    }  
    function deSelect3(){  
       var ele=document.getElementsByName('file_name3');  
       for(var i=0; i<ele.length; i++){  
           if(ele[i].type=='checkbox')  
               ele[i].checked=false;  
             
       }  
    }
    
    // function getElementsRelative(iobj,whatever,includeTextNodes) {
    //    if(!document.getElementsByTagName("*")) {
    //       // safari < 1.1 has no idea what that asterix means - return an array who's first index is -1
    //       // so the calling function will know that the browser cant handle this
    //       return new Array(-1);
    //    }
    //    // change "whatever" to lowercase if its not an int.
    //    if(!parseInt(whatever))whatever = whatever.toLowerCase();
    //    // this array will contain all of the object references.
    //    objArray = new Array();
    //    // var iElem = iobj.getElementsByTagName("*");
    //    // loop over the document
    //    var iElem = iobj.elements;
    //    for(_i=0;_i<iElem.length;_i++) {
    //       // this variable set to 1 when an object is added to objArray so we 
    //       // dont double/triple up on object references if they meet more than one condition
    //       inArray = 0;
    //       // assign this object to a reference variable
    //       obj = iElem[_i];
    //       // check attributes and values for "whatever"
    //       if(obj.tagName != "!") { // IE freaks out over HTML comments - dont check for attributes if that's what this tag is.
    //          for(_w=0;_w<obj.attributes.length;_w++) {
    // 	    // IE will list all attributes, regardless of if they defined in the HTML, so check that they are defined.
    // 	    if(obj.attributes[_w].value) {
    // 	       // if the objects attribute name or its value equal "whatever", add it to objArray
    // 	       attr = obj.attributes[_w].value.toLowerCase();
    // 	       if(attr.indexOf(whatever)>-1) {
    // 	          objArray[objArray.length] = obj;
    // 		  inArray=1;
    // 		  break;
    // 	       }
    // 	    }
    // 	 } 
    //       }
    //       // check tag names for "whatever"
    //       if(obj.tagName.toLowerCase() == whatever && !inArray) {
    //          objArray[objArray.length]=obj;
    // 	 inArray=1;
    //       }
    //       // check text nodes for "whatever". 
    //       if(obj.childNodes.length && !inArray && includeTextNodes) {
    //          for(_w=0;_w<obj.childNodes.length;_w++) {
    // 	    if(obj.childNodes[_w].nodeType == 3 && obj.childNodes[_w].data) {
    // 	       cData = obj.childNodes[_w].data.toLowerCase();
    // 	       if(cData.indexOf(whatever)>-1) {
    // 	          objArray[objArray.length] = obj;
    // 		  inArray=1;
    // 		  break;
    //                }
    // 	    }
    //          }
    //       }
    //    }
    //    // send the object reference array back to the caller
    //    // window.alert(objArray.length);
    //    return objArray;
    // }
    
    // function ShowTags(iobj,tagName){
    //    var bool = 0;
    //    var ins="";
    //    var lis="";
      
    //    window.document.openForm.instrument.value="";
    //    //window.document.openForm.dp_tech.value="";
    //    window.document.openForm.add.value="";
    
    //    z = getElementsRelative(iobj,tagName,0);
    //    ii = 0;
    //    while (z[ii]){
    //       if (z[ii].name.indexOf(tagName)>-1 && z[ii].checked == true){
    
    // 	 ins = z[ii].value.split(";");
    // 	 if (bool == 0) {
    // 	    if (z[ii].value.indexOf(";") == -1) {
    // 	      ins[1]="";
    // 	      window.document.openForm.add.value = "((ins_id like '" + ins[0] + "%')" ;
    //               if (ins[0].indexOf("SHOOT") != -1) {
    //                 window.document.openForm.add.value = "((ins_id in ('XSHOOTER','SHOOT') AND ((dp_tech like 'ECHELLE%') OR (dp_cat != 'SCIENCE')))" ;
    //               }
    // 	    }
    // 	    else if (ins.length == 2) {
    // 	      lis = ins[1].split(",");
    // 	      build_lis = "dp_tech like " + lis[0];
    // 	      for (i=1; i<lis.length; i++) {
    // 	         build_lis += " OR dp_tech like " + lis[i];
    // 	      }
    //               //AM20160203: unification! all elements treated with same logic, to allow handling of (dp_tech=this or dp_tech=that) also for image[].
    //               //AM20160203: For this unification, all the values with ShowTags have now the dp_tech part in single quotes and with the necessary wildcard (eg: before was FORS1:IMA now is FORS1:'IMA%')
    //               //AM20160203: code was:
    // 	      //AM20160203: spec_cons = "((ins_id like '" + ins[0] + "%' AND ((" + build_lis + ") OR (dp_cat != 'SCIENCE')))" ;
    // 	      //AM20160203: window.document.openForm.add.value = (z[ii].name.indexOf("image")>-1 || z[ii].name.indexOf("polarim")>-1 || z[ii].name.indexOf("corono")>-1) ? "((ins_id like '" + ins[0] + "%' AND dp_tech like '" + ins[1] + "%')" : spec_cons;
    // 	      cons = "((ins_id like '" + ins[0] + "%' AND (" + build_lis + "))";
    // 	      spec_cons = "((ins_id like '" + ins[0] + "%' AND ((" + build_lis + ") OR (dp_cat != 'SCIENCE')))";
    // 	      window.document.openForm.add.value = (z[ii].name.indexOf("image")>-1 || z[ii].name.indexOf("polarim")>-1 || z[ii].name.indexOf("corono")>-1 || z[ii].name.indexOf("sam")>-1) ? cons : spec_cons;
    // 	    }
    // 	    bool = 1;
    // 	 } else {
    // 	    if (z[ii].value.indexOf(";") == -1) {
    // 	      ins[1]="";
    // 	      window.document.openForm.add.value += " or " + "(ins_id like '" + ins[0] + "%')" ;
    // 	      if (ins[0].indexOf("SHOOT") != -1) {
    //                 window.document.openForm.add.value += " or " + "(ins_id in ('SHOOT','XSHOOTER') AND ((dp_tech like 'ECHELLE%') OR (dp_cat != 'SCIENCE')))";
    //               }	      
    // 	    }
    // 	    else if (ins.length == 2) {
    // 	      lis = ins[1].split(",");
    // 	      build_lis = "dp_tech like " + lis[0];
    // 	      for (i=1; i<lis.length; i++) {
    // 	         build_lis += " OR dp_tech like " + lis[i];
    // 	      }
    // 	      //AM20160203: spec_cons = " or " + "(ins_id like '" + ins[0] + "%' AND ((" + build_lis + ") OR (dp_cat != 'SCIENCE')))"  ;
    // 	      //AM20160203: window.document.openForm.add.value += (z[ii].name.indexOf("image")>-1 || z[ii].name.indexOf("polarim")>-1 || z[ii].name.indexOf("corono")>-1) ? " or " + "(ins_id like '" + ins[0] + "%' AND dp_tech like '" + ins[1] + "%')" : spec_cons;
    // 	      cons = " or (ins_id like '" + ins[0] + "%' AND (" + build_lis + "))";
    // 	      spec_cons = " or (ins_id like '" + ins[0] + "%' AND ((" + build_lis + ") OR (dp_cat != 'SCIENCE')))";
    // 	      window.document.openForm.add.value += (z[ii].name.indexOf("image")>-1 || z[ii].name.indexOf("polarim")>-1 || z[ii].name.indexOf("corono")>-1 || z[ii].name.indexOf("sam")>-1) ? cons : spec_cons;
    // 	    }
    // 	 }
    //       }
    //       ii++;
    //    }
    //    if (bool != 0) {
    //       window.document.openForm.add.value += ")";
    //    }
    // }
    
    
    // function QChecker(iobj,tag, check) {
    //   z = getElementsRelative(iobj,tag,0);
    //   i = 0;
    //   while (z[i]){
    //      z[i].checked = check;
    //      i++;
    //   }
    //   ShowTags(iobj,"[]");
    // }
    