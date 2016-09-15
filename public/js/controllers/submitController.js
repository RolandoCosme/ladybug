app.directive('ladybug', function()
{
    // need this to make sure that you can submit your form by simply pressing the enter key in one of the input fields
    return {
     restrict: 'E',
     link: function(scope, element, attrs)
     {
        element.onTrigger(function()
        {
          //scope.$apply(attrs.formsubmitfunction); 
            scope.$eval(attrs.formsubmitfunction);
        });
     }
 };
});