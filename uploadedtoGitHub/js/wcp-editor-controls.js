!function(e,t,o,i){e.wcpEditorRegisterControl({type:"int",getValue:function(){return parseInt(e("#"+this.elementID).val(),10)},setValue:function(t){e("#"+this.elementID).val(parseInt(t,10))},HTML:function(){return'<input type="text" id="'+this.elementID+'">'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){var o=parseInt(e(this).val(),10);isNaN(o)&&(o=0),e(this).val(o),t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"float",getValue:function(){return parseFloat(e("#"+this.elementID).val())},setValue:function(t){e("#"+this.elementID).val(parseFloat(t))},HTML:function(){return'<input type="text" id="'+this.elementID+'">'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){var o=parseFloat(e(this).val());isNaN(o)&&(o=0),e(this).val(o),t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"text",getValue:function(){return e("#"+this.elementID).val()},setValue:function(t){e("#"+this.elementID).val(t)},HTML:function(){return'<input type="text" id="'+this.elementID+'">'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"textarea",getValue:function(){return e("#"+this.elementID).val()},setValue:function(t){e("#"+this.elementID).val(t)},HTML:function(){return'<textarea id="'+this.elementID+'" rows="5"></textarea>'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"checkbox",getValue:function(){return 1==e("#"+this.elementID).get(0).checked?1:0},setValue:function(t){1===parseInt(t,10)?e("#"+this.elementID).get(0).checked=!0:e("#"+this.elementID).get(0).checked=!1},HTML:function(){return'<input type="checkbox" id="'+this.elementID+'">'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"color",getValue:function(){return e("#"+this.elementID).val()},setValue:function(t){e("#"+this.elementID).val(t)},HTML:function(){return'<input type="color" id="'+this.elementID+'">'},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"select",getValue:function(){return e("#"+this.elementID).val()},setValue:function(t){e("#"+this.elementID).val(t)},HTML:function(){var e="";e+='<select id="'+this.elementID+'">';for(var t=0;t<this.options.length;t++)e+='<option value="'+this.options[t].value+'">'+this.options[t].title+"</option>";return e+="</select>"},init:function(){var t=this;e(o).on("change","#"+this.elementID,function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"box model",getValue:function(){return{margin:{top:parseInt(e("#wcp-editor-element-option-boxmodel-margin-top").val(),10),bottom:parseInt(e("#wcp-editor-element-option-boxmodel-margin-bottom").val(),10),left:parseInt(e("#wcp-editor-element-option-boxmodel-margin-left").val(),10),right:parseInt(e("#wcp-editor-element-option-boxmodel-margin-right").val(),10)},padding:{top:parseInt(e("#wcp-editor-element-option-boxmodel-padding-top").val(),10),bottom:parseInt(e("#wcp-editor-element-option-boxmodel-padding-bottom").val(),10),left:parseInt(e("#wcp-editor-element-option-boxmodel-padding-left").val(),10),right:parseInt(e("#wcp-editor-element-option-boxmodel-padding-right").val(),10)}}},setValue:function(t){e("#wcp-editor-element-option-boxmodel-margin-top").val(t.margin.top),e("#wcp-editor-element-option-boxmodel-margin-bottom").val(t.margin.bottom),e("#wcp-editor-element-option-boxmodel-margin-left").val(t.margin.left),e("#wcp-editor-element-option-boxmodel-margin-right").val(t.margin.right),e("#wcp-editor-element-option-boxmodel-padding-top").val(t.padding.top),e("#wcp-editor-element-option-boxmodel-padding-bottom").val(t.padding.bottom),e("#wcp-editor-element-option-boxmodel-padding-left").val(t.padding.left),e("#wcp-editor-element-option-boxmodel-padding-right").val(t.padding.right)},HTML:function(){var e="";return e+='<div class="wcp-editor-boxmodel-margin" id="'+this.elementID+'">',e+='   <div id="wcp-editor-boxmodel-label-margin">margin</div>',e+='   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-top">',e+='   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-bottom">',e+='   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-left">',e+='   <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-margin-right">',e+='   <div class="wcp-editor-boxmodel-padding">',e+='       <div id="wcp-editor-boxmodel-label-padding">padding</div>',e+='       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-top">',e+='       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-bottom">',e+='       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-left">',e+='       <input type="text" class="wcp-editor-boxmodel-input" id="wcp-editor-element-option-boxmodel-padding-right">',e+="   </div>",e+="</div>"},init:function(){var t=this;e(o).on("change","#"+this.elementID+" input",function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"slider",getValue:function(){var t=0,o=e("#"+this.elementID).find(".wcp-editor-control-slider-ball"),i=o.position().left,s=e("#"+this.elementID).find(".wcp-editor-control-slider-track"),n=s.outerWidth(),l=i/n;return t=this.options.min+(this.options.max-this.options.min)*l,"int"==this.options.type&&(t=Math.round(t)),t},setValue:function(t){"int"==this.options.type&&(t=Math.round(t));var o=(t-this.options.min)/(this.options.max-this.options.min),i=e("#"+this.elementID).find(".wcp-editor-control-slider-ball"),s=e("#"+this.elementID).find(".wcp-editor-control-slider-track"),n=s.outerWidth();i.css({left:n*o})},HTML:function(){var e="";return e+='<div class="wcp-editor-control-slider" id="'+this.elementID+'">',e+='   <div class="wcp-editor-control-slider-bubble"></div>',e+='   <div class="wcp-editor-control-slider-track"></div>',e+='   <div class="wcp-editor-control-slider-ball"></div>',e+="</div>"},init:function(){var t=this,s=0,n=0,l=!1,r=i,d=i,c=i;e(o).on("mousedown","#"+t.elementID+" .wcp-editor-control-slider-ball",function(o){r=e("#"+t.elementID).find(".wcp-editor-control-slider-ball"),d=e("#"+t.elementID).find(".wcp-editor-control-slider-track"),c=e("#"+t.elementID).find(".wcp-editor-control-slider-bubble"),s=r.position().left,n=o.pageX,l=!0,e.wcpEditorSliderStartedDragging&&e.wcpEditorSliderStartedDragging(),c.show()}),e(o).on("mousemove."+this.elementID,function(e){if(l){var o=s-n+e.pageX;if(o<0&&(o=0),o>d.outerWidth()&&(o=d.outerWidth()),"int"==t.options.type){var i=d.outerWidth()/(t.options.max+1);o-=o%i}r.css({left:o}),t.valueChanged();var a=Math.round(10*t.getValue())/10;"int"==t.options.type&&(a=t.getValue()),c.html(a),c.css({left:o})}}),e(o).on("mouseup."+this.elementID,function(o){l&&(e.wcpEditorSliderFinishedDragging&&e.wcpEditorSliderFinishedDragging(),l=!1,t.valueChanged(),c.hide())}),e(o).on("mousedown","#"+t.elementID+" .wcp-editor-control-slider-track",function(o){r=e("#"+t.elementID).find(".wcp-editor-control-slider-ball"),d=e("#"+t.elementID).find(".wcp-editor-control-slider-track"),c=e("#"+t.elementID).find(".wcp-editor-control-slider-bubble");var i=o.pageX-d.offset().left;i<0&&(i=0),i>d.outerWidth()&&(i=d.outerWidth()),r.css({left:i}),s=r.position().left,n=o.pageX,l=!0,c.show()})}}),e.wcpEditorRegisterControl({type:"grid system",getValue:function(){var t={xs:{use:1,class:"col-xs-1",visible:1},sm:{use:1,class:"col-sm-1",visible:1},md:{use:1,class:"col-md-1",visible:1},lg:{use:1,class:"col-lg-1",visible:1}},o=e("#"+this.elementID),i=o.find(".wcp-editor-grid-system-control-res-group-xs");i.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked?t.xs.use=1:t.xs.use=0,t.xs.class=i.find(".wcp-editor-grid-system-control-select-colspan").val(),i.find(".wcp-editor-grid-system-control-visible").hasClass("wcp-editor-grid-system-control-visible-not")?t.xs.visible=0:t.xs.visible=1;var s=o.find(".wcp-editor-grid-system-control-res-group-sm");s.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked?t.sm.use=1:t.sm.use=0,t.sm.class=s.find(".wcp-editor-grid-system-control-select-colspan").val(),s.find(".wcp-editor-grid-system-control-visible").hasClass("wcp-editor-grid-system-control-visible-not")?t.sm.visible=0:t.sm.visible=1;var n=o.find(".wcp-editor-grid-system-control-res-group-md");n.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked?t.md.use=1:t.md.use=0,t.md.class=n.find(".wcp-editor-grid-system-control-select-colspan").val(),n.find(".wcp-editor-grid-system-control-visible").hasClass("wcp-editor-grid-system-control-visible-not")?t.md.visible=0:t.md.visible=1;var l=o.find(".wcp-editor-grid-system-control-res-group-lg");return l.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked?t.lg.use=1:t.lg.use=0,t.lg.class=l.find(".wcp-editor-grid-system-control-select-colspan").val(),l.find(".wcp-editor-grid-system-control-visible").hasClass("wcp-editor-grid-system-control-visible-not")?t.lg.visible=0:t.lg.visible=1,t},setValue:function(t){var o=e("#"+this.elementID),i=o.find(".wcp-editor-grid-system-control-res-group-xs");1==parseInt(t.xs.use,10)?(i.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!0,i.find("select").removeAttr("disabled"),i.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-control-disabled")):(i.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!1,i.find("select").attr("disabled","disabled"),i.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-control-disabled")),i.find(".wcp-editor-grid-system-control-select-colspan").val(t.xs.class),1==parseInt(t.xs.visible,10)?i.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-grid-system-control-visible-not"):i.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-grid-system-control-visible-not");var s=o.find(".wcp-editor-grid-system-control-res-group-sm");1==parseInt(t.sm.use,10)?(s.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!0,s.find("select").removeAttr("disabled"),s.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-control-disabled")):(s.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!1,s.find("select").attr("disabled","disabled"),s.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-control-disabled")),s.find(".wcp-editor-grid-system-control-select-colspan").val(t.sm.class),1==parseInt(t.sm.visible,10)?s.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-grid-system-control-visible-not"):s.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-grid-system-control-visible-not");var n=o.find(".wcp-editor-grid-system-control-res-group-md");1==parseInt(t.md.use,10)?(n.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!0,n.find("select").removeAttr("disabled"),n.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-control-disabled")):(n.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!1,n.find("select").attr("disabled","disabled"),n.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-control-disabled")),n.find(".wcp-editor-grid-system-control-select-colspan").val(t.md.class),1==parseInt(t.md.visible,10)?n.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-grid-system-control-visible-not"):n.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-grid-system-control-visible-not");var l=o.find(".wcp-editor-grid-system-control-res-group-lg");1==parseInt(t.lg.use,10)?(l.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!0,l.find("select").removeAttr("disabled"),l.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-control-disabled")):(l.find(".wcp-editor-grid-system-control-res-use-checkbox").get(0).checked=!1,l.find("select").attr("disabled","disabled"),l.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-control-disabled")),l.find(".wcp-editor-grid-system-control-select-colspan").val(t.lg.class),1==parseInt(t.lg.visible,10)?l.find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-grid-system-control-visible-not"):l.find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-grid-system-control-visible-not")},HTML:function(){var e="";return e+='<div class="wcp-editor-grid-system-control" id="'+this.elementID+'">',e+='   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-lg">',e+='       <div class="wcp-editor-grid-system-control-res-name">LG</div>',e+='       <div class="wcp-editor-grid-system-control-res-use">',e+='           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">',e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-colspan">',e+='           <select class="wcp-editor-grid-system-control-select-colspan">',e+='               <option value="col-lg-1">1 Column</option>',e+='               <option value="col-lg-2">2 Columns</option>',e+='               <option value="col-lg-3">3 Columns</option>',e+='               <option value="col-lg-4">4 Columns</option>',e+='               <option value="col-lg-5">5 Columns</option>',e+='               <option value="col-lg-6">6 Column</option>',e+='               <option value="col-lg-7">7 Columns</option>',e+='               <option value="col-lg-8">8 Columns</option>',e+='               <option value="col-lg-9">9 Columns</option>',e+='               <option value="col-lg-10">10 Columns</option>',e+='               <option value="col-lg-11">11 Columns</option>',e+='               <option value="col-lg-12">12 Columns</option>',e+="           </select>",e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-visible">',e+='           <i class="fa fa-eye" aria-hidden="true"></i>',e+='           <i class="fa fa-eye-slash" aria-hidden="true"></i>',e+="       </div>",e+="   </div>",e+='   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-md">',e+='       <div class="wcp-editor-grid-system-control-res-name">MD</div>',e+='       <div class="wcp-editor-grid-system-control-res-use">',e+='           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">',e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-colspan">',e+='           <select class="wcp-editor-grid-system-control-select-colspan">',e+='               <option value="col-md-1">1 Column</option>',e+='               <option value="col-md-2">2 Columns</option>',e+='               <option value="col-md-3">3 Columns</option>',e+='               <option value="col-md-4">4 Columns</option>',e+='               <option value="col-md-5">5 Columns</option>',e+='               <option value="col-md-6">6 Column</option>',e+='               <option value="col-md-7">7 Columns</option>',e+='               <option value="col-md-8">8 Columns</option>',e+='               <option value="col-md-9">9 Columns</option>',e+='               <option value="col-md-10">10 Columns</option>',e+='               <option value="col-md-11">11 Columns</option>',e+='               <option value="col-md-12">12 Columns</option>',e+="           </select>",e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-visible">',e+='           <i class="fa fa-eye" aria-hidden="true"></i>',e+='           <i class="fa fa-eye-slash" aria-hidden="true"></i>',e+="       </div>",e+="   </div>",e+='   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-sm">',e+='       <div class="wcp-editor-grid-system-control-res-name">SM</div>',e+='       <div class="wcp-editor-grid-system-control-res-use">',e+='           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">',e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-colspan">',e+='           <select class="wcp-editor-grid-system-control-select-colspan">',e+='               <option value="col-sm-1">1 Column</option>',e+='               <option value="col-sm-2">2 Columns</option>',e+='               <option value="col-sm-3">3 Columns</option>',e+='               <option value="col-sm-4">4 Columns</option>',e+='               <option value="col-sm-5">5 Columns</option>',e+='               <option value="col-sm-6">6 Column</option>',e+='               <option value="col-sm-7">7 Columns</option>',e+='               <option value="col-sm-8">8 Columns</option>',e+='               <option value="col-sm-9">9 Columns</option>',e+='               <option value="col-sm-10">10 Columns</option>',e+='               <option value="col-sm-11">11 Columns</option>',e+='               <option value="col-sm-12">12 Columns</option>',e+="           </select>",e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-visible">',e+='           <i class="fa fa-eye" aria-hidden="true"></i>',e+='           <i class="fa fa-eye-slash" aria-hidden="true"></i>',e+="       </div>",e+="   </div>",e+='   <div class="wcp-editor-grid-system-control-res-group wcp-editor-grid-system-control-res-group-xs">',e+='       <div class="wcp-editor-grid-system-control-res-name">XS</div>',e+='       <div class="wcp-editor-grid-system-control-res-use">',e+='           <input type="checkbox" class="wcp-editor-grid-system-control-res-use-checkbox">',e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-colspan">',e+='           <select class="wcp-editor-grid-system-control-select-colspan">',e+='               <option value="col-xs-1">1 Column</option>',e+='               <option value="col-xs-2">2 Columns</option>',e+='               <option value="col-xs-3">3 Columns</option>',e+='               <option value="col-xs-4">4 Columns</option>',e+='               <option value="col-xs-5">5 Columns</option>',e+='               <option value="col-xs-6">6 Column</option>',e+='               <option value="col-xs-7">7 Columns</option>',e+='               <option value="col-xs-8">8 Columns</option>',e+='               <option value="col-xs-9">9 Columns</option>',e+='               <option value="col-xs-10">10 Columns</option>',e+='               <option value="col-xs-11">11 Columns</option>',e+='               <option value="col-xs-12">12 Columns</option>',e+="           </select>",e+="       </div>",e+='       <div class="wcp-editor-grid-system-control-visible">',e+='           <i class="fa fa-eye" aria-hidden="true"></i>',e+='           <i class="fa fa-eye-slash" aria-hidden="true"></i>',e+="       </div>",e+="   </div>",e+='   <div class="wcp-editor-controls-clear"></div>',e+="</div>"},init:function(){var t=this;e(o).on("change","#"+this.elementID+" .wcp-editor-grid-system-control-res-use-checkbox",function(){e(this).get(0).checked?(e(this).closest(".wcp-editor-grid-system-control-res-group").find("select").removeAttr("disabled"),e(this).closest(".wcp-editor-grid-system-control-res-group").find(".wcp-editor-grid-system-control-visible").removeClass("wcp-editor-control-disabled")):(e(this).closest(".wcp-editor-grid-system-control-res-group").find("select").attr("disabled","disabled"),e(this).closest(".wcp-editor-grid-system-control-res-group").find(".wcp-editor-grid-system-control-visible").addClass("wcp-editor-control-disabled")),t.valueChanged()}),e(o).on("click","#"+this.elementID+" .wcp-editor-grid-system-control-visible",function(){e(this).toggleClass("wcp-editor-grid-system-control-visible-not"),t.valueChanged()}),e(o).on("change","#"+this.elementID+" .wcp-editor-grid-system-control-select-colspan",function(){t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"switch",customLabel:!0,getValue:function(){var t=0;return e("#"+this.elementID).hasClass("active")&&(t=1),t},setValue:function(t){1==parseInt(t,10)?e("#"+this.elementID).addClass("active"):e("#"+this.elementID).removeClass("active")},HTML:function(){var e="";return e+='<div class="wcp-editor-control-switch" id="'+this.elementID+'">',e+='   <div class="wcp-editor-control-switch-ball"></div>',e+="</div>",e+='<div class="wcp-editor-control-switch-label" id="'+this.elementID+'-label">'+this.title+"</div>",e+='<div class="wcp-editor-controls-clear"></div>'},init:function(){var t=this;e(o).on("click","#"+this.elementID,function(){e(this).toggleClass("active"),t.valueChanged()}),e(o).on("click","#"+this.elementID+"-label",function(){e("#"+t.elementID).toggleClass("active"),t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"button group",getValue:function(){var t=e("#"+this.elementID).find(".active[data-button-value]").data("button-value");return t},setValue:function(t){e("#"+this.elementID).find("[data-button-value]").removeClass("active"),e("#"+this.elementID).find('[data-button-value="'+t+'"]').addClass("active"),e("#"+this.elementID).find('[data-button-value="'+t+'"]').siblings().removeClass("no-border-right"),e("#"+this.elementID).find('[data-button-value="'+t+'"]').prev().addClass("no-border-right")},HTML:function(){var e="";e+='<div class="wcp-editor-control-button-group" id="'+this.elementID+'">';for(var t=0;t<this.options.length;t++)e+='<div class="wcp-editor-control-button-group-button" data-button-value="'+this.options[t].value+'">'+this.options[t].title+"</div>";return e+="</div>"},init:function(){var t=this;e(o).on("click","#"+this.elementID+" .wcp-editor-control-button-group-button",function(){e(this).siblings().removeClass("active").removeClass("no-border-right"),e(this).prev().addClass("no-border-right"),e(this).addClass("active"),t.valueChanged()})}}),e.wcpEditorRegisterControl({type:"button",customLabel:!0,getValue:function(){return i},setValue:function(){},HTML:function(){return'<div id="'+this.elementID+'" class="wcp-editor-control-button">'+this.title+"</div>"},init:function(){var t=this;e(o).on("click","#"+this.elementID,function(){t.valueChanged(),e(o).trigger(t.options.event_name)})}}),e.wcpEditorRegisterControl({type:"wp media upload",getValue:function(){return e("#"+this.elementID+" input").val()},setValue:function(t){e("#"+this.elementID+" input").val(t)},HTML:function(){return'<div class="wcp-editor-input-with-button" id="'+this.elementID+'"><input type="text"><div class="wcp-editor-control-button">Choose Image</div></div>'},init:function(){var t=this,i="#"+this.elementID+" input",s="#"+this.elementID+" .wcp-editor-control-button";e.wcpWPMedia(i,s,function(){t.valueChanged()}),e(o).on("change",i,function(){t.valueChanged()})}})}(jQuery,window,document);