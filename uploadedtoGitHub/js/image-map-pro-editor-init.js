!function(t,e,o,i){t.wcpEditorCreateForm({name:"Image Map Settings",controlGroups:[{groupName:"general",groupTitle:"General",groupIcon:"fa fa-cog",controls:[{type:"text",name:"image_map_name",title:"Image Map Name",value:t.imageMapProDefaultSettings.general.name},{type:"int",name:"image_map_width",title:"Width",value:t.imageMapProDefaultSettings.general.width},{type:"int",name:"image_map_height",title:"Height",value:t.imageMapProDefaultSettings.general.height},{type:"switch",name:"responsive",title:"Responsive",value:t.imageMapProDefaultSettings.general.responsive},{type:"switch",name:"sticky_tooltips",title:"Sticky Tooltips",value:t.imageMapProDefaultSettings.general.sticky_tooltips},{type:"switch",name:"constrain_tooltips",title:"Constrain Tooltips",value:t.imageMapProDefaultSettings.general.constrain_tooltips},{type:"select",name:"tooltip_animation",title:"Tooltip Animation",options:[{value:"none",title:"None"},{value:"grow",title:"Grow"},{value:"fade",title:"Fade"}],value:t.imageMapProDefaultSettings.general.tooltip_animation},{type:"select",name:"pageload_animation",title:"Page Load Animation",options:[{value:"none",title:"None"},{value:"grow",title:"Grow"},{value:"fade",title:"Fade"}],value:t.imageMapProDefaultSettings.general.pageload_animation},{type:"select",name:"fullscreen_tooltips",title:"Fullscreen Tooltips",options:[{value:"none",title:"None"},{value:"mobile-only",title:"Mobile Only"},{value:"always",title:"Always"}],value:t.imageMapProDefaultSettings.general.fullscreen_tooltips},{type:"switch",name:"late_initialization",title:"Late Initialization",value:t.imageMapProDefaultSettings.general.late_initialization}]},{groupName:"image",groupTitle:"Image",groupIcon:"fa fa-photo",controls:[{type:"text",name:"image_url",title:"Image URL",value:t.imageMapProDefaultSettings.general.image_url}]}]}),t.wcpEditorCreateForm({name:"Shape Settings",controlGroups:[{groupName:"general",groupTitle:"General",groupIcon:"fa fa-cog",controls:[{type:"float",name:"x",title:"X",value:t.imageMapProDefaultSpotSettings.x},{type:"float",name:"y",title:"Y",value:t.imageMapProDefaultSpotSettings.y},{type:"float",name:"width",title:"Width",value:t.imageMapProDefaultSpotSettings.width},{type:"float",name:"height",title:"Height",value:t.imageMapProDefaultSpotSettings.height}]},{groupName:"actions",groupTitle:"Actions",groupIcon:"fa fa-bolt",controls:[{type:"select",name:"mouseover",title:"Mouseover Action",options:[{value:"no-action",title:"No Action"},{value:"show-tooltip",title:"Show Tooltip"}],value:t.imageMapProDefaultSpotSettings.actions.mouseover},{type:"select",name:"click",title:"Click Action",options:[{value:"no-action",title:"No Action"},{value:"show-tooltip",title:"Show Tooltip"},{value:"follow-link",title:"Follow Link"}],value:t.imageMapProDefaultSpotSettings.actions.click},{type:"text",name:"link",title:"Link URL",value:t.imageMapProDefaultSpotSettings.actions.link},{type:"switch",name:"open_link_in_new_window",title:"Open Link in New Window",value:t.imageMapProDefaultSpotSettings.actions.open_link_in_new_window}]},{groupName:"icon",groupTitle:"Icon",groupIcon:"fa fa-map-marker",controls:[{type:"switch",name:"use_icon",title:"Use Icon",value:t.imageMapProDefaultSpotSettings.default_style.use_icon},{type:"button group",name:"icon_type",title:"Icon Type",options:[{value:"library",title:"Library"},{value:"custom",title:"Custom"}],value:t.imageMapProDefaultSpotSettings.default_style.icon_type},{type:"button",name:"choose_icon_from_library",title:"Choose from Library",options:{event_name:"button-choose-icon-clicked"},value:i},{type:"text",name:"icon_svg_path",title:"Icon SVG Path",value:t.imageMapProDefaultSpotSettings.default_style.icon_svg_path},{type:"text",name:"icon_svg_viewbox",title:"Icon SVG Viewbox",value:t.imageMapProDefaultSpotSettings.default_style.icon_svg_viewbox},{type:"text",name:"icon_url",title:"Icon URL",value:t.imageMapProDefaultSpotSettings.default_style.icon_url},{type:"switch",name:"icon_is_pin",title:"Icon is a Pin",value:t.imageMapProDefaultSpotSettings.default_style.icon_is_pin},{type:"switch",name:"icon_shadow",title:"Icon Shadow",value:t.imageMapProDefaultSpotSettings.default_style.icon_shadow}]},{groupName:"default_style",groupTitle:"Default Style",groupIcon:"fa fa-paint-brush",controls:[{type:"slider",name:"opacity",title:"Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.default_style.opacity},{type:"color",name:"icon_fill",title:"SVG Icon Fill Color",value:t.imageMapProDefaultSpotSettings.default_style.icon_fill},{type:"int",name:"border_radius",title:"Border Radius",value:t.imageMapProDefaultSpotSettings.default_style.border_radius},{type:"color",name:"background_color",title:"Background Color",value:t.imageMapProDefaultSpotSettings.default_style.background_color},{type:"slider",name:"background_opacity",title:"Background Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.default_style.background_opacity},{type:"slider",name:"border_width",title:"Border Width",options:{min:0,max:20,type:"int"},value:t.imageMapProDefaultSpotSettings.default_style.border_width},{type:"select",name:"border_style",title:"Border Style",options:[{value:"none",title:"None"},{value:"hidden",title:"Hidden"},{value:"solid",title:"Solid"},{value:"dotted",title:"Dotted"},{value:"dashed",title:"Dashed"},{value:"double",title:"Double"},{value:"groove",title:"Groove"},{value:"inset",title:"Inset"},{value:"outset",title:"Outset"}],value:t.imageMapProDefaultSpotSettings.default_style.border_style},{type:"color",name:"border_color",title:"Border Color",value:t.imageMapProDefaultSpotSettings.default_style.border_color},{type:"slider",name:"border_opacity",title:"Border Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.default_style.border_opacity},{type:"color",name:"fill",title:"Fill",value:t.imageMapProDefaultSpotSettings.default_style.fill},{type:"slider",name:"fill_opacity",title:"Fill Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.default_style.fill_opacity},{type:"color",name:"stroke_color",title:"Stroke Color",value:t.imageMapProDefaultSpotSettings.default_style.stroke_color},{type:"slider",name:"stroke_opacity",title:"Stroke Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.default_style.stroke_opacity},{type:"slider",name:"stroke_width",title:"Stroke Width",options:{min:0,max:20,type:"int"},value:t.imageMapProDefaultSpotSettings.default_style.stroke_width},{type:"text",name:"stroke_dasharray",title:"Stroke Dasharray",value:t.imageMapProDefaultSpotSettings.default_style.stroke_dasharray},{type:"select",name:"stroke_linecap",title:"Stroke Linecap",options:[{value:"butt",title:"Butt"},{value:"round",title:"Round"},{value:"square",title:"Square"}],value:t.imageMapProDefaultSpotSettings.default_style.stroke_linecap}]},{groupName:"mouseover_style",groupTitle:"Mouseover Style",groupIcon:"fa fa-paint-brush",controls:[{type:"button",name:"copy_from_default_styles",title:"Copy from Default Styles",options:{event_name:"button-copy-from-default-styles-clicked"},value:i},{type:"slider",name:"mouseover_opacity",title:"Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.mouseover_style.opacity},{type:"color",name:"mouseover_icon_fill",title:"SVG Icon Fill Color",value:t.imageMapProDefaultSpotSettings.mouseover_style.icon_fill},{type:"int",name:"mouseover_border_radius",title:"Border Radius",value:t.imageMapProDefaultSpotSettings.mouseover_style.border_radius},{type:"color",name:"mouseover_background_color",title:"Background Color",value:t.imageMapProDefaultSpotSettings.mouseover_style.background_color},{type:"slider",name:"mouseover_background_opacity",title:"Background Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.mouseover_style.background_opacity},{type:"slider",name:"mouseover_border_width",title:"Border Width",options:{min:0,max:20,type:"int"},value:t.imageMapProDefaultSpotSettings.mouseover_style.border_width},{type:"select",name:"mouseover_border_style",title:"Border Style",options:[{value:"none",title:"None"},{value:"hidden",title:"Hidden"},{value:"solid",title:"Solid"},{value:"dotted",title:"Dotted"},{value:"dashed",title:"Dashed"},{value:"double",title:"Double"},{value:"groove",title:"Groove"},{value:"inset",title:"Inset"},{value:"outset",title:"Outset"}],value:t.imageMapProDefaultSpotSettings.mouseover_style.border_style},{type:"color",name:"mouseover_border_color",title:"Border Color",value:t.imageMapProDefaultSpotSettings.mouseover_style.border_color},{type:"slider",name:"mouseover_border_opacity",title:"Border Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.mouseover_style.border_opacity},{type:"color",name:"mouseover_fill",title:"Fill",value:t.imageMapProDefaultSpotSettings.mouseover_style.fill},{type:"slider",name:"mouseover_fill_opacity",title:"Fill Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.mouseover_style.fill_opacity},{type:"color",name:"mouseover_stroke_color",title:"Stroke Color",value:t.imageMapProDefaultSpotSettings.mouseover_style.stroke_color},{type:"slider",name:"mouseover_stroke_opacity",title:"Stroke Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.mouseover_style.stroke_opacity},{type:"slider",name:"mouseover_stroke_width",title:"Stroke Width",options:{min:0,max:20,type:"int"},value:t.imageMapProDefaultSpotSettings.mouseover_style.stroke_width},{type:"text",name:"mouseover_stroke_dasharray",title:"Stroke Dasharray",value:t.imageMapProDefaultSpotSettings.mouseover_style.stroke_dasharray},{type:"select",name:"mouseover_stroke_linecap",title:"Stroke Linecap",options:[{value:"butt",title:"Butt"},{value:"round",title:"Round"},{value:"square",title:"Square"}],value:t.imageMapProDefaultSpotSettings.mouseover_style.stroke_linecap}]},{groupName:"tooltip_settings",groupTitle:"Tooltip Settings",groupIcon:"fa fa-comment",controls:[{type:"int",name:"tooltip_border_radius",title:"Border Radius",value:t.imageMapProDefaultSpotSettings.tooltip_style.border_radius},{type:"int",name:"tooltip_padding",title:"Padding",value:t.imageMapProDefaultSpotSettings.tooltip_style.padding},{type:"color",name:"tooltip_background_color",title:"Background Color",value:t.imageMapProDefaultSpotSettings.tooltip_style.background_color},{type:"slider",name:"tooltip_background_opacity",title:"Background Opacity",options:{min:0,max:1},value:t.imageMapProDefaultSpotSettings.tooltip_style.background_opacity},{type:"select",name:"tooltip_position",title:"Position",options:[{value:"top",title:"Top"},{value:"bottom",title:"Bottom"},{value:"left",title:"Left"},{value:"right",title:"Right"}],value:t.imageMapProDefaultSpotSettings.tooltip_style.position},{type:"int",name:"tooltip_width",title:"Width",value:t.imageMapProDefaultSpotSettings.tooltip_style.width},{type:"switch",name:"tooltip_auto_width",title:"Auto Width",value:t.imageMapProDefaultSpotSettings.tooltip_style.auto_width}]},{groupName:"tooltip_content",groupTitle:"Tooltip Content",groupIcon:"fa fa-paragraph",controls:[{type:"button group",name:"tooltip_content_type",title:"Tooltip Content",options:[{value:"plain-text",title:"Plain Text"},{value:"content-builder",title:"Content Builder"}]},{type:"textarea",name:"plain_text",title:"Tooltip Content",value:t.imageMapProDefaultSpotSettings.tooltip_content.plain_text},{type:"color",name:"plain_text_color",title:"Text Color",value:t.imageMapProDefaultSpotSettings.tooltip_content.plain_text_color},{type:"textarea",name:"squares_json",title:"Squares JSON",value:t.imageMapProDefaultSpotSettings.tooltip_content.content_json},{type:"textarea",name:"squares_content",title:"Squares Content",value:t.imageMapProDefaultSpotSettings.tooltip_content.content_json},{type:"button",name:"launch_content_builder",title:"Launch Content Builder",options:{event_name:"button-launch-content-builder-clicked"},value:i}]}]}),t.wcpTourRegister({name:"Image Map Pro Editor Tour",welcomeScreen:{title:"Welcome!",text:"This is a guided tour to get you started quickly with Image Map Pro.<br>Click the button below to begin!",startButtonTitle:"Take the Tour",cancelButtonTitle:"Or skip this guide"},steps:[{title:"Drawing Shapes",text:"Use the toolbar on the left to draw different kinds of shapes.<br>Choose between Spots/Icons, Ellipses, Rectangles or polygons.",tip:{title:"Toolbar",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/01-drawing-shapes.mp4"},position:"bottom-left",highlightRect:!0}},{title:"Customize Your Shapes",text:"Change how the shapes look by selecting a shape <br>and clicking “Shape” on the left, and then “Default Style” or “Mouseover Style”.",tip:{title:"Shape Styles",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/02-customizing-shapes.mp4"},position:"bottom-right",arrowStyle:"transform: scaleX(-1);",highlightRect:!0}},{title:"Edit and Delete Shapes",text:"From the list on the right you can do various things with your shapes, like <br>copy-pasting styles, reordering them, or deleting the shapes.",tip:{title:"Shapes List",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/03-list.mp4"},position:"bottom-left",highlightRect:!0}},{title:"Use Icons",text:"To have an icon, place a Spot shape on the image, then open the “Icon” tab on the left to customize it.<br>Choose from 150 built-in SVG icons, or use your own!",tip:{title:"Icon Settings",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/04-icons.mp4"},position:"bottom-right",highlightRect:!0}},{title:"Tooltip Content Builder",text:'Use a fully featured content builder to add rich content to the tooltips. <br>You can launch the content builder by selecting a shape and opening the "Tooltip Content" settings tab.',tip:{title:"Tooltip Content Settings",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/05-content-builder.mp4"},position:"top-right",highlightRect:!0}},{title:"Responsive &amp; Fullscreen Tooltips",text:'Image Map Pro is fully optimized for mobile devices. It\'s responsive, <br>and you even have the option for fullscreen tooltips on mobile. To change these settings, open the "General" settings tab.',tip:{title:"Image Map Settings",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/06-responsive.mp4"},position:"bottom-right",highlightRect:!0}},{title:"Preview Mode",text:"See how your image map will look like by entering Preview Mode. <br>You can continue to tweak settings and see the changes live!",tip:{title:"Preview Mode Button",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/07-preview-mode.mp4"},position:"bottom-right",highlightRect:!0}},{title:"Save and Load",text:"This editor uses Local Storage to save your work. You can have <br>as many image maps as you want, and switch between them any time. No database needed!",tip:{title:"Save/Load Buttons",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/08-save-load.mp4"},position:"bottom-right",highlightRect:!0}},{title:"Import and Export",text:"You can also import and export your data, <br>in case you need to switch devices, or save your work somewhere else.",tip:{title:"Import/Export Buttons",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/09-import-export.mp4"},position:"bottom-right",highlightRect:!0}},{title:"Easy Installation",text:'When you are ready to add the image map to your site, simply click the <br>"Code" button and follow the instructions.',tip:{title:"Code Button",subtitle:"Watch Video",media:{type:"video",url_mp4:"https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4",url_webm:"https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4",url_ogv:"https://webcraftplugins.com/uploads/image-map-pro/videos/10-install.mp4"},position:"bottom-right",highlightRect:!0}}]});var a={mainTabs:[{name:"Image Map",icon:"fa fa-cog",title:"Image Map Settings"},{name:"Shape",icon:"fa fa-object-ungroup",title:"Selected Shape Settings"}],toolbarButtons:[{name:"spot",icon:"fa fa-map-marker",title:"Icon"},{name:"oval",customIcon:'<div style="width: 14px; height: 14px; border: 2px solid #222; border-radius: 50px;"></div>',title:"Ellipse"},{name:"rect",customIcon:'<div style="width: 20px; height: 14px; border: 2px solid #222; border-radius: 5px;"></div>',title:"Rectangle"},{name:"poly",customIcon:'<svg width="24px" height="24px" viewport="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" style="stroke: black; stroke-width: 2px;" points="20,20 18,4 7,7 4,20"></polygon><ellipse cx="20" cy="20" rx="3" ry="3"></ellipse><ellipse cx="18" cy="4" rx="3" ry="3"></ellipse><ellipse cx="7" cy="7" rx="3" ry="3"></ellipse><ellipse cx="4" cy="20" rx="3" ry="3"></ellipse></svg>',title:"Polygon"}],extraMainButtons:[{name:"code",icon:"fa fa-code",title:"Code"},{name:"import",icon:"fa fa-arrow-down",title:"Import"},{name:"export",icon:"fa fa-arrow-up",title:"Export"}],listItemButtons:[{name:"copy",icon:"fa fa-files-o",title:"Copy Style"},{name:"paste",icon:"fa fa-clipboard",title:"Paste Style"},{name:"duplicate",icon:"fa fa-clone",title:"Duplicate"},{name:"delete",icon:"fa fa-trash-o",title:"Delete"}],newButton:!0,helpButton:!0,previewToggle:!0};t(o).ready(function(){t.image_map_pro_init_editor(i,a)})}(jQuery,window,document);