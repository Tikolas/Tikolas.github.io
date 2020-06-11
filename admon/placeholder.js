/**
 * HTML5 Placeholder Text jQuery Fallback with Modernizr
 *
 * @url     http://uniquemethod.com/
 * @author  Unique Method
 */
$(function()
{
    // check placeholder browser support
    if (!Modernizr.input.placeholder)
    {
 
        // set placeholder values
        $(this).find('[placeholder]').each(function()
        {
            if ($(this).val() == '') // if field is empty
            {
                $(this).val( $(this).attr('placeholder') );
            }
        });
 
        // focus and blur of placeholders
        $('[placeholder]').focus(function()
        {
            if ($(this).val() == $(this).attr('placeholder'))
            {
                $(this).val('');
                $(this).removeClass('placeholder');
            }
        }).blur(function()
        {
            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))
            {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeholder');
            }
        });
 
        // remove placeholders on submit
        $('[placeholder]').closest('form').submit(function()
        {
            $(this).find('[placeholder]').each(function()
            {
                if ($(this).val() == $(this).attr('placeholder'))
                {
                    $(this).val('');
                }
            })
        });
 
    }
});


function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var x=document.forms['form']['name'].value;
   var y=document.forms['form']['password'].value;
   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      document.getElementById('namef').innerHTML='*данное поле обязательно для заполнения';
      return false;
   }
   
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
   if (y.length==0){
      document.getElementById('emailf').innerHTML='*данное поле обязательно для заполнения';
      return false;
   }
   //Проверим содержит ли значение введенное в поле email символы @ и .
   at=y.indexOf("2");
   dot=y.indexOf("3");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      document.getElementById('emailf').innerHTML='*email введен не верно';
      return false;
   }
}



function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var x=document.forms['for4']['username'].value;
   var y=document.forms['for4']['password'].value;
   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (x.length==0){
      document.getElementById('namef').innerHTML='*данное поле обязательно для заполнения';
      return false;
   }
    at=x.indexOf("2");
   dot=x.indexOf("3");
   if (at<1 || dot <1){
      document.getElementById('namef').innerHTML='*email введен не верно';
      return false;
   }
   
   //Если поле email пустое выведем сообщение и предотвратим отправку формы
   if (y.length==0){
      document.getElementById('emailf').innerHTML='*данное поле обязательно для заполнения';
      return false;
   }
   //Проверим содержит ли значение введенное в поле email символы @ и .
   at=y.indexOf("2");
   dot=y.indexOf("3");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      document.getElementById('emailf').innerHTML='*email введен не верно';
      return false;
   }
}