var searchIndex = {};
searchIndex["handlebars"] = {"doc":"Handlebars","items":[[3,"Template","handlebars","A handlebars template",null,null],[12,"name","","",0,null],[12,"elements","","",0,null],[12,"mapping","","",0,null],[3,"RenderError","","Error when rendering data on template.",null,null],[12,"desc","","",1,null],[12,"template_name","","",1,null],[12,"line_no","","",1,null],[12,"column_no","","",1,null],[3,"TemplateError","","Error on parsing template.",null,null],[12,"reason","","",2,null],[12,"template_name","","",2,null],[12,"line_no","","",2,null],[12,"column_no","","",2,null],[3,"Handlebars","","The single entry point of your Handlebars templates",null,null],[3,"ContextJson","","Json wrapper that holds the Json value and reference path information",null,null],[3,"Decorator","","Render-time Decorator data when using in a decorator definition",null,null],[3,"Helper","","Render-time Helper data when using in a helper definition",null,null],[3,"RenderContext","","The context of a render call",null,null],[12,"writer","","the `Write` where page is generated",3,null],[12,"current_template","","current template name",3,null],[12,"root_template","","root template name",3,null],[12,"disable_escape","","",3,null],[3,"Context","","The context wrap data you render on your templates.",null,null],[3,"StringWriter","","",null,null],[4,"TemplateFileError","","",null,null],[13,"TemplateError","","",4,null],[13,"IOError","","",4,null],[4,"TemplateRenderError","","",null,null],[13,"TemplateError","","",5,null],[13,"RenderError","","",5,null],[13,"IOError","","",5,null],[5,"html_escape","","The default escape fn replaces the characters `&\"<>` with the equivalent html / xml entities.",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"no_escape","","`EscapeFn` that do not change any thing. Useful when using in a non-html environment.",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"to_json","","",null,{"inputs":[{"name":"t"}],"output":{"name":"json"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"template"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"template"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"template"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"bool"}],"output":{"name":"template"}}],[11,"compile","","",0,{"inputs":[{"name":"s"}],"output":{"generics":["template","templateerror"],"name":"result"}}],[11,"compile2","","",0,{"inputs":[{"name":"s"},{"name":"bool"}],"output":{"generics":["template","templateerror"],"name":"result"}}],[11,"compile_with_name","","",0,{"inputs":[{"name":"s"},{"name":"string"},{"name":"bool"}],"output":{"generics":["template","templateerror"],"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"from","","",1,{"inputs":[{"name":"ioerror"}],"output":{"name":"rendererror"}}],[11,"from","","",1,{"inputs":[{"name":"serdeerror"}],"output":{"name":"rendererror"}}],[11,"new","","",1,{"inputs":[{"name":"t"}],"output":{"name":"rendererror"}}],[11,"with","","",1,{"inputs":[{"name":"e"}],"output":{"name":"rendererror"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"templateerror"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"templateerror"}],"output":{"name":"bool"}}],[11,"of","","",2,{"inputs":[{"name":"templateerrorreason"}],"output":{"name":"templateerror"}}],[11,"at","","",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"usize"},{"name":"usize"}],"output":{"name":"templateerror"}}],[11,"in_template","","",2,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"name":"templateerror"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",4,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"from","","",4,{"inputs":[{"name":"templateerror"}],"output":{"name":"templatefileerror"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"from","","",5,{"inputs":[{"name":"templateerror"}],"output":{"name":"templaterendererror"}}],[11,"from","","",5,{"inputs":[{"name":"rendererror"}],"output":{"name":"templaterendererror"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"new","","",6,{"inputs":[],"output":{"name":"registry"}}],[11,"source_map_enabled","","Enable handlebars template source map",6,{"inputs":[{"name":"self"},{"name":"bool"}],"output":null}],[11,"register_template_string","","Register a template string",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"s"}],"output":{"generics":["templateerror"],"name":"result"}}],[11,"register_partial","","Register a partial string",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"s"}],"output":{"generics":["templateerror"],"name":"result"}}],[11,"register_template_file","","Register a template from a path",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"p"}],"output":{"generics":["templatefileerror"],"name":"result"}}],[11,"register_template_source","","Register a template from `std::io::Read` source",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"read"}],"output":{"generics":["templatefileerror"],"name":"result"}}],[11,"unregister_template","","remove a template from the registry",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"register_helper","","register a helper",6,{"inputs":[{"name":"self"},{"name":"str"},{"generics":["helperdef"],"name":"box"}],"output":{"generics":["box"],"name":"option"}}],[11,"register_decorator","","register a decorator",6,{"inputs":[{"name":"self"},{"name":"str"},{"generics":["directivedef"],"name":"box"}],"output":{"generics":["box"],"name":"option"}}],[11,"register_escape_fn","","Register a new escape fn to be used from now on by this registry.",6,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"unregister_escape_fn","","Restore the default escape fn.",6,{"inputs":[{"name":"self"}],"output":null}],[11,"get_escape_fn","","Get a reference to the current escape fn.",6,{"inputs":[{"name":"self"}],"output":{"name":"fn"}}],[11,"get_template","","Return a registered template,",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["template"],"name":"option"}}],[11,"get_helper","","Return a registered helper",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["box"],"name":"option"}}],[11,"get_decorator","","Return a registered directive, aka decorator",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["box"],"name":"option"}}],[11,"get_templates","","Return all templates registered",6,{"inputs":[{"name":"self"}],"output":{"name":"hashmap"}}],[11,"clear_templates","","Unregister all templates",6,{"inputs":[{"name":"self"}],"output":null}],[11,"render","","Render a registered template with some data into a string",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"}],"output":{"generics":["string","rendererror"],"name":"result"}}],[11,"render_to_write","","Render a registered template and write some data to the `std::io::Write`",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"},{"name":"write"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"render_template","","render a template string using current registry without register it",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"}],"output":{"generics":["string","templaterendererror"],"name":"result"}}],[11,"render_template_to_write","","render a template string using current registry without register it",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"},{"name":"write"}],"output":{"generics":["templaterendererror"],"name":"result"}}],[11,"render_template_source_to_write","","render a template source using current registry without register it",6,{"inputs":[{"name":"self"},{"name":"read"},{"name":"t"},{"name":"write"}],"output":{"generics":["templaterendererror"],"name":"result"}}],[11,"renderw","","",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"},{"name":"write"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"template_render","","",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"}],"output":{"generics":["string","templaterendererror"],"name":"result"}}],[11,"template_renderw","","",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"t"},{"name":"write"}],"output":{"generics":["templaterendererror"],"name":"result"}}],[11,"template_renderw2","","",6,{"inputs":[{"name":"self"},{"name":"read"},{"name":"t"},{"name":"write"}],"output":{"generics":["templaterendererror"],"name":"result"}}],[11,"new","","Create a render context from a `Write`",3,{"inputs":[{"name":"context"},{"name":"hashmap"},{"name":"write"}],"output":{"name":"rendercontext"}}],[11,"derive","","",3,{"inputs":[{"name":"self"}],"output":{"name":"rendercontext"}}],[11,"with_context","","",3,{"inputs":[{"name":"self"},{"name":"context"}],"output":{"name":"rendercontext"}}],[11,"get_partial","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["rc"],"name":"option"}}],[11,"set_partial","","",3,{"inputs":[{"name":"self"},{"name":"string"},{"generics":["template"],"name":"rc"}],"output":null}],[11,"get_path","","",3,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"set_path","","",3,{"inputs":[{"name":"self"},{"name":"string"}],"output":null}],[11,"get_local_path_root","","",3,{"inputs":[{"name":"self"}],"output":{"name":"vecdeque"}}],[11,"push_local_path_root","","",3,{"inputs":[{"name":"self"},{"name":"string"}],"output":null}],[11,"pop_local_path_root","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"set_local_var","","",3,{"inputs":[{"name":"self"},{"name":"string"},{"name":"json"}],"output":null}],[11,"clear_local_vars","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"promote_local_vars","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"demote_local_vars","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"get_local_var","","",3,{"inputs":[{"name":"self"},{"name":"string"}],"output":{"generics":["json"],"name":"option"}}],[11,"writer","","",3,{"inputs":[{"name":"self"}],"output":{"name":"write"}}],[11,"push_block_context","","",3,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"pop_block_context","","",3,{"inputs":[{"name":"self"}],"output":null}],[11,"evaluate_in_block_context","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["option","rendererror"],"name":"result"}}],[11,"is_current_template","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"context","","",3,{"inputs":[{"name":"self"}],"output":{"name":"context"}}],[11,"context_mut","","",3,{"inputs":[{"name":"self"}],"output":{"name":"context"}}],[11,"register_local_helper","","",3,{"inputs":[{"name":"self"},{"name":"str"},{"generics":["helperdef"],"name":"box"}],"output":{"generics":["rc"],"name":"option"}}],[11,"unregister_local_helper","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"get_local_helper","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["rc"],"name":"option"}}],[11,"evaluate","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["json","rendererror"],"name":"result"}}],[11,"evaluate_absolute","","",3,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["json","rendererror"],"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"path","","Returns relative path when the value is referenced If the value is from a literal, the path is `None`",7,{"inputs":[{"name":"self"}],"output":{"generics":["string"],"name":"option"}}],[11,"path_root","","Return root level of this path if any",7,{"inputs":[{"name":"self"}],"output":{"generics":["str"],"name":"option"}}],[11,"value","","Returns the value",7,{"inputs":[{"name":"self"}],"output":{"name":"json"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"name","","Returns helper name",8,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"params","","Returns all helper params, resolved within the context",8,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"param","","Returns nth helper param, resolved within the context.",8,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"generics":["contextjson"],"name":"option"}}],[11,"hash","","Returns hash, resolved within the context",8,{"inputs":[{"name":"self"}],"output":{"name":"btreemap"}}],[11,"hash_get","","Return hash value of a given key, resolved within the context",8,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["contextjson"],"name":"option"}}],[11,"template","","Returns the default inner template if the helper is a block helper.",8,{"inputs":[{"name":"self"}],"output":{"generics":["template"],"name":"option"}}],[11,"inverse","","Returns the template of `else` branch if any",8,{"inputs":[{"name":"self"}],"output":{"generics":["template"],"name":"option"}}],[11,"is_block","","Returns if the helper is a block one `{{#helper}}{{/helper}}` or not `{{helper 123}}`",8,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"block_param","","Returns block param if any",8,{"inputs":[{"name":"self"}],"output":{"generics":["str"],"name":"option"}}],[11,"block_param_pair","","Return block param pair (for example |key, val|) if any",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"name","","Returns helper name",9,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"params","","Returns all helper params, resolved within the context",9,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"param","","Returns nth helper param, resolved within the context",9,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"generics":["contextjson"],"name":"option"}}],[11,"hash","","Returns hash, resolved within the context",9,{"inputs":[{"name":"self"}],"output":{"name":"btreemap"}}],[11,"hash_get","","Return hash value of a given key, resolved within the context",9,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["contextjson"],"name":"option"}}],[11,"template","","Returns the default inner template if any",9,{"inputs":[{"name":"self"}],"output":{"generics":["template"],"name":"option"}}],[11,"render","","",0,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"eval","","",0,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"context"}}],[11,"null","","Create a context with null data",10,{"inputs":[],"output":{"name":"context"}}],[11,"wraps","","Create a context with given data",10,{"inputs":[{"name":"t"}],"output":{"generics":["context","rendererror"],"name":"result"}}],[11,"navigate","","Navigate the context with base path and relative path Typically you will set base path to `RenderContext.get_path()` and set relative path to helper argument or so.",10,{"inputs":[{"name":"self"},{"name":"str"},{"name":"vecdeque"},{"name":"str"}],"output":{"generics":["json","rendererror"],"name":"result"}}],[11,"data","","",10,{"inputs":[{"name":"self"}],"output":{"name":"json"}}],[11,"data_mut","","",10,{"inputs":[{"name":"self"}],"output":{"name":"json"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",11,{"inputs":[],"output":{"name":"stringwriter"}}],[11,"to_string","","",11,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"write","","",11,null],[11,"flush","","",11,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[6,"EscapeFn","","This type represents an escape fn, that is a function who's purpose it is to escape potentially problematic characters in a string.",null,null],[6,"HelperResult","","Helper Definition",null,null],[8,"Evaluable","","Evaluate directive or decorator",null,null],[10,"eval","","",12,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["rendererror"],"name":"result"}}],[8,"Renderable","","Render trait",null,null],[10,"render","","render into RenderContext's `writer`",13,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["rendererror"],"name":"result"}}],[11,"renders","","render into string",13,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["string","rendererror"],"name":"result"}}],[8,"HelperDef","","",null,null],[11,"call_inner","","",14,{"inputs":[{"name":"self"},{"name":"helper"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["option","rendererror"],"name":"result"}}],[11,"call","","",14,{"inputs":[{"name":"self"},{"name":"helper"},{"name":"registry"},{"name":"rendercontext"}],"output":{"name":"helperresult"}}],[8,"DecoratorDef","","Decorator Definition",null,null],[10,"call","","",15,{"inputs":[{"name":"self"},{"name":"directive"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["rendererror"],"name":"result"}}],[8,"JsonRender","","Render Json data with default format",null,null],[10,"render","","",16,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"renders","","render into string",13,{"inputs":[{"name":"self"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["string","rendererror"],"name":"result"}}],[11,"call_inner","","",14,{"inputs":[{"name":"self"},{"name":"helper"},{"name":"registry"},{"name":"rendercontext"}],"output":{"generics":["option","rendererror"],"name":"result"}}],[11,"call","","",14,{"inputs":[{"name":"self"},{"name":"helper"},{"name":"registry"},{"name":"rendercontext"}],"output":{"name":"helperresult"}}]],"paths":[[3,"Template"],[3,"RenderError"],[3,"TemplateError"],[3,"RenderContext"],[4,"TemplateFileError"],[4,"TemplateRenderError"],[3,"Handlebars"],[3,"ContextJson"],[3,"Helper"],[3,"Decorator"],[3,"Context"],[3,"StringWriter"],[8,"Evaluable"],[8,"Renderable"],[8,"HelperDef"],[8,"DecoratorDef"],[8,"JsonRender"]]};
initSearch(searchIndex);
