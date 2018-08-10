const createCustomForm = (selector) => {

  let container = document.createElement('div');
  container.className='wrapper';
  container.style.width='100%';
  container.style.maxWidth='400px';
  container.style.margin='50px auto';

  let title = document.createElement('p');
  title.innerHTML='Custom BugForm. Render to selector if passed to function.'
  
  let form = document.createElement('form');
  form.setAttribute('method','post');
  form.setAttribute('action','/api/post');

  let input = document.createElement('input');
  input.setAttribute('type','email');
  input.setAttribute('placeholder','Введите email для связи с вами');
  input.setAttribute('required','true');
  input.setAttribute('name','username');
  input.style.display='block';
  input.style.width='100%';
  input.style.margin='0 0 10px 0';

  let textarea = document.createElement('textarea');
  textarea.setAttribute('placeholder','Описание ошибки');
  textarea.setAttribute('required','true');
  textarea.setAttribute('name','textarea');
  textarea.style.display='block';
  textarea.style.width='100%';
  textarea.style.margin='0 0 10px 0';

  var button = document.createElement('button');
  button.innerHTML='Сообщить об ошибке';

  form.appendChild(input);
  form.appendChild(textarea);
  form.appendChild(button);

  container.appendChild(title);
  container.appendChild(form);

  if (selector) {
    document.querySelector(selector).appendChild(container);
  } else {
    document.querySelector('body').appendChild(container);
  }
};

export default createCustomForm;
