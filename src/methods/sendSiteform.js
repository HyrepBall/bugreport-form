const sendSiteform = (siteform) => {
  siteform.setAttribute('method','post');
  siteform.setAttribute('action','/api/post');

  let obj = {};
  let elements = siteform.querySelectorAll( "input, select, textarea" );
  for( let i = 0; i < elements.length; ++i ) {
    let element = elements[i];
    let name = element.name;
    let value = element.value;
    if( name ) {
      obj[ name ] = value;
    }
  }
  siteform.submit();
}

export default sendSiteform;
