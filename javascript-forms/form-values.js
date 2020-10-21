var $form = document.forms[0];

function handleSubmit(event) {
  event.preventDefault();
  var formValues = {};
  formValues.name = $form.elements.name.value;
  formValues.email = $form.elements.email.value;
  formValues.message = $form.elements.message.value;
  console.log('formValues: ', formValues);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
