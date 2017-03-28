//Created by Misha Volinets
//Version 1.0.0
//28.03.2017

function testController(){
    var vm = this;
    vm.messageText = "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.";

}

function textCollapse(){

    var createShortText = function(text, options){
        var shortText;

        if(text.length > options.maxChars)
        {
            var currentCharacter;
            for(var i = options.maxChars;i >= 0;i--){
                currentCharacter = text[i];
                if(currentCharacter != '\s' && )
            }
        }
        else
            shortText = text;
        
        debugger;
        return shortText;

    }

    return{
        restrict: 'EA',
        scope: {
            text: '=textCollapse',
            maxChars: '=tcMaxChars',
            maxRows: '=tcMaxRows'
        },
        link: function(scope, elem, attrs){
            var generalOptions = {
                maxChars: 50,
                maxRows:  5
            };

            var userOptions = {
                maxChars: scope.maxChars,
                maxRows: scope.maxRows
            };

            $.extend(generalOptions,userOptions);

            var shortText = createShortText(scope.text, generalOptions);
            debugger;
            var seeMore = angular.element('<div>See more</div>');
            

            $(elem).html(seeMore);
        }
    }
}

angular.module("mvTextCollapse", [])
    .controller('testCtrl', testController)
    .directive('textCollapse', textCollapse);