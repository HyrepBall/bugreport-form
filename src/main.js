// Functional EntryPoint

import createCustomForm from './methods/createCustomForm';
import sendSiteform from './methods/sendSiteform';

function BugReport() {
  console.log('BugReport initialized')

  return {
    createCustomForm: createCustomForm,
    sendSiteform: sendSiteform,
  }
}

export default BugReport
